document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bakery-form');
    const summaryBox = document.getElementById('order-summary');

   
    const prices = {
        "Chocolate Fudge Cake": 450,
        "Red Velvet Cupcake": 80,
        "Fresh Butter Croissant": 60
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();  
     
        const name = document.getElementById('customer-name').value;
        const item = document.getElementById('item-select').value;
        const quantity = parseInt(document.getElementById('item-quantity').value);

         
        const unitPrice = prices[item];
        const totalBill = unitPrice * quantity;

         
        summaryBox.innerHTML = `
            <h3>🎉 Order Placed Successfully!</h3>
            <p><strong>Thank you, ${name}!</strong></p>
            <p>Item: ${item} (x${quantity})</p>
            <p><strong>Total Bill: ₹${totalBill}</strong></p>
        `;

        
        summaryBox.classList.remove('hidden');

         
        form.reset();
    });
});
