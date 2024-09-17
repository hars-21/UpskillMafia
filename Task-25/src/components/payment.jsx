export const Payment = () => {
  return (
    <div className="gateway">
      <h1>Payment Gateway</h1>
      <form className="paymentForm">
        <label for="cardNumber">Card Number:</label>
        <input type="text" id="cardNumber" name="cardNumber" />
        <label for="expiryDate">Expiry Date:</label>
        <input type="text" id="expiryDate" name="expiryDate" />
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" />
        <input type="submit" value="Submit" className="payment-btn" />
      </form>
    </div>
  );
};
