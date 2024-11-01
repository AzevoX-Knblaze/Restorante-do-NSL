// script.js

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const menuItems = document.querySelectorAll(".menu-item");

  searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    menuItems.forEach(item => {
      const itemName = item.querySelector("h3").textContent.toLowerCase();
      const itemDescription = item.querySelector("p").textContent.toLowerCase();

      // Se o nome ou a descrição contiverem o texto de pesquisa, exibe o item; caso contrário, oculta
      if (itemName.includes(searchText) || itemDescription.includes(searchText)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});
