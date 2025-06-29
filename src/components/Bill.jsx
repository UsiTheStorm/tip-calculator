import { useState } from 'react';

function Bill({ onSetBill, bill }) {
  return (
    <div>
      <label htmlFor="bill" className="label">
        How much was your bill?
      </label>
      <input
        type="number"
        id="bill"
        min={0}
        max={10000}
        className="input"
        placeholder="$10"
        value={bill}
        onChange={(e) => onSetBill(e.target.value)}
      />
    </div>
  );
}

export default Bill;
