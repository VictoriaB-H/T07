const listContainer = document.querySelector(".products");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=100`)
  .then((response) => response.json())
  .then(showProductList);

function showProductList(data) {
  const markup = data
    .map(
      (product) =>
        `<article>
          <a href="produkt.html">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
              alt="product image"
            />
          </a>
          <a class="link" href="produkt.html">
            <h3>${product.productdisplayname}</h3>
          </a>
          <p>${product.brandname}</p>
          <p>Størrelser: S, M, L</p>
          <p>
            <span class="old-price">${product.price}</span>
            <span class="discount-price">3950 KR</span>
          </p>
        </article>`
    )
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
