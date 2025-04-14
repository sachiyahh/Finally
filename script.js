document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll("button");
  const cartCount = document.getElementById("cart-count");

  // Load existing cart count from localStorage if available
  let cartTotal = parseInt(localStorage.getItem("cartTotal")) || 0;
  updateCartUI();

  // Add to Cart buttons
  addToCartButtons.forEach((button) => {
    if (button.textContent.trim() === "Add to Cart") {
      button.addEventListener("click", function () {
        const productName = this.parentElement.querySelector("h5").textContent;
        cartTotal++;
        localStorage.setItem("cartTotal", cartTotal);
        updateCartUI();
        alert(`"${productName}" has been added to your cart!`);
      });
    }
  });

  // Contact form message
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Your message has been sent! Thank you.");
    this.reset();
  });

  // Function to update cart count display
  function updateCartUI() {
    cartCount.textContent = cartTotal;
  }
});
