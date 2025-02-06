const mycategory = new URLSearchParams(window.location.search).get("category");

const listContainer = document.querySelector(".products");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${mycategory}`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(data) {
  const markup = data
    .map((product) => {
      let discountPrice = product.price;
      if (product.discountpercentage) {
        discountPrice = Math.round(
          product.price * (1 - product.discountpercentage / 100)
        );
      }

      let priceHTML = product.discountpercentage
        ? `<span class="old-price">${product.price} KR</span>
             <span class="discount-price">${discountPrice} KR</span>`
        : `<span class="discount-price">${product.price} KR</span>`;

      return `
          <article>
            <a href="produkt.html?id=${product.id}">
              <img
                src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                alt="${product.productdisplayname}"
              />
            </a>
            <a class="link" href="produkt.html?id=${product.id}">
              <h3>${product.productdisplayname}</h3>
            </a>
            <p>${product.brandname}</p>
            <p>Størrelser: S, M, L</p>
            <p>${priceHTML}</p>
          </article>
        `;
    })
    .join("");

  listContainer.innerHTML = markup;
}
