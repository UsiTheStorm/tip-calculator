function TotalTipAmount({ bill, frService, myService }) {
  const billAmount = bill;
  const service = (myService + frService) / 2;
  const tip = Number((billAmount * service).toFixed(2));
  return (
    <p className="total-tip-amount">
      You have to pay ${billAmount + tip}
      <span>
        (Bill: ${bill ? billAmount : '0'} + Tips: ${tip})
      </span>
    </p>
  );
}

export default TotalTipAmount;
