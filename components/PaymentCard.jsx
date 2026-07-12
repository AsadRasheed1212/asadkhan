'use client';

import { useState } from 'react';

export default function PaymentCard({ method }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(method.copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <div className="pay-card">
      <div className="text-[30px] mb-2.5">{method.icon}</div>
      <div className="text-[15px] font-medium text-heading mb-1.5">{method.name}</div>
      <div className="text-[13px] text-mid leading-[1.8]">
        {method.lines.map(([label, value]) => (
          <div key={label}>
            {label}: <span className={label === 'Name' || label === 'Branch' ? 'text-heading' : 'text-primary font-medium break-all'}>{value}</span>
          </div>
        ))}
      </div>
      <button onClick={copy} className="copy-btn" style={copied ? { color: '#61CE70', borderColor: '#61CE70' } : undefined}>
        {copied ? 'Copied!' : method.copyLabel}
      </button>
    </div>
  );
}
