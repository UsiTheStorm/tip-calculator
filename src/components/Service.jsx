import { useState } from 'react';
import React from 'react';

function Service({ onServiceQuality, serviceId, children, service }) {
  return (
    <div>
      <label htmlFor="service" className="label">
        {children}
      </label>
      <select
        id={serviceId}
        className="input"
        name="service"
        value={service}
        onChange={(e) => onServiceQuality(e.target.value)}
      >
        <option value="0" disabled>
          Select
        </option>
        <option value="0">Dissatisfied(0%)</option>
        <option value="0.05">It was okay(5%)</option>
        <option value="0.1">It was good(10%)</option>
        <option value="0.2">Mucho gusto!(20%)</option>
      </select>
    </div>
  );
}

export default Service;
