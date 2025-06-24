import { useState } from 'react';

function Service() {
  return (
    <div>
      <label htmlFor="service" className="label">
        How was the service?
      </label>
      <select select id="service" className="input" name="service">
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">It was okay(5%)</option>
        <option value="10">It was good(10%)</option>
        <option value="20">Mucho gusto!(20%)</option>
      </select>
    </div>
  );
}

export default Service;
