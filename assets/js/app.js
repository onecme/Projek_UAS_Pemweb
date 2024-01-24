// app.js

import { data } from "./data.mjs";

function searchByName() {
  const searchInput = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const dropdownList = document.getElementById("dropdownList");
  const searchResult = document.getElementById("searchResult");

  dropdownList.innerHTML = "";

  if (searchInput.trim() === "") {
    dropdownList.style.display = "none";
    searchResult.textContent = ""; // Menghapus hasil pencarian sebelumnya
    return;
  }

  const filteredData = data.filter((item) =>
    item.nama.toLowerCase().includes(searchInput)
  );

  if (filteredData.length === 0) {
    dropdownList.style.display = "none";
    searchResult.textContent = "No matching results found.";
  } else {
    filteredData.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = item.nama;
      listItem.setAttribute("data-prodi", item.prodi);
      listItem.addEventListener("click", selectItem);
      dropdownList.appendChild(listItem);
    });
    dropdownList.style.display = "block";
    searchResult.textContent = ""; // Menghapus hasil pencarian sebelumnya
  }
}

function selectItem(event) {
  const selectedName = event.target.textContent;
  const selectedProdi = event.target.getAttribute("data-prodi");
  const searchResult = document.getElementById("searchResult");

  // Buat elemen untuk nama dan prodi
  const nameElement = document.createElement("div");
  const prodiElement = document.createElement("div");

  // Atur teks untuk elemen-elemen tersebut
  nameElement.textContent = `Nama: ${selectedName}`;
  prodiElement.textContent = `Prodi: ${selectedProdi}`;

  // Bersihkan konten sebelumnya
  searchResult.innerHTML = "";

  // Tambahkan elemen-elemen ke dalam searchResult
  searchResult.appendChild(nameElement);
  searchResult.appendChild(prodiElement);

  document.getElementById("searchInput").value = "";
  document.getElementById("dropdownList").style.display = "none";

  // Tambahkan gaya CSS untuk membuat teks tidak tebal
  nameElement.style.fontWeight = "normal";
  prodiElement.style.fontWeight = "normal";
}

window.searchByName = searchByName;
