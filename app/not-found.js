import Link from 'next/link';

export const metadata = { title: 'Page Not Found' };

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center py-36">
      <div className="max-w-[500px] mx-auto px-10 text-center">
        <div className="font-slab text-[clamp(80px,15vw,140px)] font-medium leading-none mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          404
        </div>
        <h1 className="font-slab text-2xl font-medium text-heading mb-3">Page Not Found</h1>
        <p className="text-mid mb-10 leading-[1.8]">
          Ye page exist nahi karta ya move ho gaya hai. Wapas home pe chalte hain.
        </p>
        <Link href="/" className="btn btn-primary">
          Back to Home
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
