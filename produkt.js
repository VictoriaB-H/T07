const productContainer = document.querySelector(".productContainer");
const productId = 1528;
fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = `
          <div class="container">
        <div class="product-image">
          <img
            src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp"
            alt="Sahara Team India Fanwear"
          />
        </div>
        <div class="product-details">
          <h2>${data.brandname}</h2>
          <h3>${data.productdisplayname}</h3>
          <p>
            <span class="old-price">${data.price}</span>
            <span class="discount-price">3950 KR</span>
          </p>
          <p class="color">Farve: Sort</p>
          <div class="size-selector">
            <button>S</button>
            <button>M</button>
            <button>L</button>
          </div>
          <button class="add-to-cart">TILFØJ TIL KURV</button>
        </div>
      </div>
    `;
  });
