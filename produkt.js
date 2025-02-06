const productId = new URLSearchParams(window.location.search).get("id");
const productContainer = document.querySelector(".productContainer");

fetch(`https://kea-alt-del.dk/t7/api/products/${productId}`)
  .then((response) => response.json())

  .then((data) => {
    let discountPrice = data.price;
    if (data.discountpercentage) {
      discountPrice = Math.round(
        data.price * (1 - data.discountpercentage / 100)
      );
    }

    productContainer.innerHTML = `
        <div class="container">
          <div class="product-image">
            <img
              src="https://kea-alt-del.dk/t7/images/webp/640/${productId}.webp"
              alt="${data.productdisplayname}"
            />
          </div>
          <div class="product-details">
            <h2>${data.brandname}</h2>
            <h3>${data.productdisplayname}</h3>
            <p>
              <span class="old-price">${data.price} KR</span>
              <span class="discount-price">${discountPrice} KR</span>
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
