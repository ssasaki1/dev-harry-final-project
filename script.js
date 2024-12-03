document.getElementById('submitOrder').addEventListener('click', function () {
  const name = document.getElementById('customerName').value;
  const size = document.querySelector('input[name="size"]:checked')?.value;
  const toppings = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                         .map(checkbox => checkbox.value);
  const fruitBase = document.getElementById('fruitBase').value;
  const boba = document.querySelector('input[name="boba"]:checked')?.value;
  const pickupTime = document.getElementById('pickupTime').value;

  const smoothieOrder = {
    customerName: name,
    smoothieSize: size,
    toppings: toppings,
    fruitBase: fruitBase,
    boba: boba,
    pickupTime: pickupTime,
  };

  const resultDiv = document.getElementById('orderResult');
  resultDiv.classList.remove('d-none');
  resultDiv.innerHTML = `
    <h4>Order Summary:</h4>
    <p><strong>Name:</strong> ${smoothieOrder.customerName}</p>
    <p><strong>Size:</strong> ${smoothieOrder.smoothieSize}</p>
    <p><strong>Toppings:</strong> ${smoothieOrder.toppings.join(', ') || 'None'}</p>
    <p><strong>Fruit Base:</strong> ${smoothieOrder.fruitBase}</p>
    <p><strong>BOBA:</strong> ${smoothieOrder.boba}</p>
    <p><strong>Pickup Time:</strong> ${smoothieOrder.pickupTime}</p>
  `;

  console.log(JSON.stringify(smoothieOrder, null, 2));
});