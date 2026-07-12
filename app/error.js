'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-24">
      <div className="max-w-[560px] text-center">
        <div className="eyebrow">Something went wrong</div>
        <h2 className="font-slab text-[clamp(28px,4vw,40px)] font-medium text-heading mb-4">
          An unexpected error occurred.
        </h2>
        <p className="text-mid leading-[1.8] mb-8">
          Please refresh the page or try again in a moment.
        </p>
        <button onClick={() => reset()} className="btn btn-primary">
          Try Again
        </button>
      </div>
    </section>
  );
}
