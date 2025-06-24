import { useState } from 'react';

function Bill() {
  return (
    <div>
      <label htmlFor="bill" className="label">
        How much was your bill?
      </label>
      <input type="number" id="bill" min={0} className="input" placeholder="10$" />
    </div>
  );
}

export default Bill;
