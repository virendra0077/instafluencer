(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()



  let taxswitch = document.getElementById("flexSwitchCheckDefault");

taxswitch.addEventListener("change", function() {
  let cards = document.querySelectorAll(".card-listing");
  cards.forEach(card => {
    let priceElement = card.querySelector("#price");
    let originalPrice = priceElement.getAttribute("data-original-price");

    if (!originalPrice) {
      originalPrice = priceElement.innerText.match(/\d+/g)[0]; // Extract numeric part
      priceElement.setAttribute("data-original-price", originalPrice);
    }

    let priceNumInt = parseInt(originalPrice);

    if (taxswitch.checked) {
      let tax = priceNumInt * 0.18;
      let total = priceNumInt + tax;
      let final = Math.round(total);
      priceElement.innerText = `Price: ₹ ${final} /night (taxes included)`;
    } else {
      priceElement.innerText = `Price: ₹ ${priceNumInt} /night + taxes`;
    }
  });
});