const categoriesContainer = document.querySelector(".category_list_container");

fetch(`https://kea-alt-del.dk/t7/api/categories/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(categories) {
  console.log("min data er:", categories);
  const markup = categories
    .map(
      (category) => `
        
          
            <a href="produktliste.html?category=${category.category}" class="category-link">${category.category}</a>`
    )
    .join("");
  console.log("min markup er", markup);
  categoriesContainer.innerHTML = markup;
}
