/*jslint es6:true */
// Load the PayPal JavaScript SDK
const script = document.createElement('script');
script.src = "https://www.paypal.com/sdk/js?client-id=AW9Mt05jy6griDYebB9F4lZzujTWa16SPZ_pcaUMfdWphQVSzAHahdvcqeCGly16Ghkh3DHfEqddQ2p5";
// Replace YOUR_CLIENT_ID with your actual PayPal client ID
document.body.appendChild(script);

script.onload = function() {
    // Render the PayPal button
    paypal.Buttons({
        createOrder: function(data, actions) {
            // Set up the transaction
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10.00' // Change this to your desired amount
                    }
                }]
            });
        },
        onApprove: function(data, actions) {
            // Capture the transaction
            return actions.order.capture().then(function(details) {
                // Show a success message to the buyer
                alert('Transaction completed by ' + details.payer.name.given_name);
            });
        }
    }).render('#paypal-button-container');
};
