'use client';

import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#08121c', color: '#f7f7f7', fontFamily: 'Arial, sans-serif' }}>
        <main style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ maxWidth: '560px', textAlign: 'center' }}>
            <p style={{ textTransform: 'uppercase', letterSpacing: '0.25em', color: '#6ec1e4', marginBottom: '12px' }}>
              Something went wrong
            </p>
            <h1 style={{ fontSize: '32px', margin: '0 0 12px', color: '#f7f7f7' }}>
              The page could not be loaded.
            </h1>
            <p style={{ lineHeight: 1.8, color: '#9aa7b2', marginBottom: '24px' }}>
              Please refresh the page or try again.
            </p>
            <button
              onClick={() => reset()}
              style={{ background: '#6ec1e4', color: '#08121c', border: 'none', borderRadius: '999px', padding: '12px 20px', cursor: 'pointer', fontWeight: 600 }}
            >
              Try Again
            </button>
          </div>
        </main>
      </body>
    </html>
  );
}
