function TotalTipAmount({ bill, frService, myService }) {
  const billAmount = Number(bill);
  const allServiceQualities = [Number(myService), ...frService.map(Number)];
  const service = allServiceQualities.reduce((sum, cur) => sum + cur) / allServiceQualities.length;
  const tip = Number(billAmount * service);

  const totalAmount = billAmount + tip;

  const displayBill = isNaN(billAmount) || billAmount === 0 ? '0.00' : billAmount.toFixed(2);
  const displayTip = isNaN(tip) ? '0.00' : tip.toFixed(2);
  const displayTotalAmount = isNaN(totalAmount) ? '0.00' : totalAmount.toFixed(2);
  return (
    <p className="total-tip-amount">
      You have to pay ${displayTotalAmount}
      <span>
        (Bill: ${displayBill} + Tips: ${displayTip})
      </span>
    </p>
  );
}

export default TotalTipAmount;
