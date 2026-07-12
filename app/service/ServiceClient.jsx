'use client';

import { useState } from 'react';
import Link from 'next/link';
import Reveal from '@/components/Reveal';
import GigCard from '@/components/GigCard';
import OrderModal from '@/components/OrderModal';
import PaymentCard from '@/components/PaymentCard';
import { gigs, paymentMethods } from '@/lib/data';

export default function ServiceClient() {
  const [order, setOrder] = useState(null);

  const handleOrder = (service, pkg, price) => setOrder({ service, pkg, price });

  return (
    <section className="pt-[140px] pb-20">
      <div className="max-w-[1160px] mx-auto px-6">
        <Reveal className="text-center mb-16">
          <div className="eyebrow">What I Offer</div>
          <h1 className="font-slab text-[clamp(30px,4vw,52px)] font-medium text-heading leading-[1.15] mb-4">
            Services &amp; Pricing
          </h1>
          <p className="text-mid max-w-[540px] mx-auto">
            Basic, Standard, ya Premium — jo suit kare choose karo. Website packages mein hosting
            &amp; domain setup bhi add ho sakta hai — Premium mein 1 saal hosting free included hai.
          </p>
        </Reveal>

        <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))' }}>
          {gigs.map((gig, i) => (
            <Reveal key={gig.id} delay={i * 0.08}>
              <GigCard gig={gig} onOrder={handleOrder} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 bg-soft border border-line/[0.07] rounded-[10px] py-9 px-7">
          <div className="eyebrow !mb-1.5">Payment Methods</div>
          <div className="font-slab text-2xl text-heading font-medium mb-1.5">In tareeqon se payment karo</div>
          <p className="text-sm text-mid mb-7">
            Amount send karo → screenshot WhatsApp ya Contact Form pe bhejo → kaam shuru!
          </p>

          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(210px,1fr))' }}>
            {paymentMethods.map((m) => (
              <PaymentCard key={m.name} method={m} />
            ))}
          </div>

          <div className="mt-5 text-[13px] text-mid bg-primary/5 border border-primary/10 rounded-[5px] py-3 px-4 leading-[1.8]">
            ⚠️ <strong className="text-primary">Important:</strong> Payment ke baad apna order
            detail aur payment screenshot{' '}
            <Link href="/contact" className="text-primary no-underline">
              Contact Form
            </Link>{' '}
            ya{' '}
            <a href="https://wa.me/923162432479" target="_blank" rel="noopener noreferrer" className="text-accent no-underline">
              WhatsApp
            </a>{' '}
            pe zaroor bhejo. Confirm hote hi kaam shuru kar diya jaega.
          </div>
        </Reveal>
      </div>

      <OrderModal order={order} onClose={() => setOrder(null)} />
    </section>
  );
}
