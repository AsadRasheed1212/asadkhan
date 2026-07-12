import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticlesBg from '@/components/ParticlesBg';
import CursorRing from '@/components/CursorRing';
import Loader from '@/components/Loader';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import PageTransition from '@/components/PageTransition';
import { ThemeProvider } from '@/components/ThemeProvider';
import { socialLinks } from '@/lib/data';

export const metadata = {
  metadataBase: new URL('https://muhammad-asad.vercel.app'),
  title: {
    default: 'Muhammad Asad — Full-Stack Developer Portfolio',
    template: '%s · Muhammad Asad',
  },
  description:
    'Muhammad Asad — Data Entry, MS Excel, WordPress, Next.js, PHP Laravel development, and video editing. Karachi, Pakistan.',
  openGraph: {
    title: 'Muhammad Asad — Full-Stack Developer Portfolio',
    description:
      'Data Entry, MS Excel, WordPress, Next.js, PHP Laravel development, and video editing — based in Karachi, Pakistan.',
    url: '/',
    siteName: 'Muhammad Asad',
    images: ['/assets/portfolio.jpg'],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Asad — Full-Stack Developer Portfolio',
    description: 'Data Entry, MS Excel, WordPress, Next.js, PHP Laravel development, and video editing.',
    images: ['/assets/portfolio.jpg'],
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

// Runs before React hydrates so the correct theme is applied on first paint
// (avoids a flash of the wrong theme when the visitor has "light" saved).
const themeInitScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Muhammad Asad',
  jobTitle: 'Full-Stack Developer',
  url: 'https://muhammad-asad.vercel.app',
  image: 'https://muhammad-asad.vercel.app/assets/portfolio.jpg',
  address: { '@type': 'PostalAddress', addressLocality: 'Karachi', addressCountry: 'PK' },
  email: 'mailto:asadrasheed8787@gmail.com',
  sameAs: socialLinks.map((s) => s.href),
  knowsAbout: ['Laravel', 'PHP', 'Next.js', 'WordPress', 'Data Entry', 'MS Excel', 'Video Editing'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body id="top" className="font-sans antialiased">
        <ThemeProvider>
          <Loader />
          <ParticlesBg />
          <CursorRing />
          <ScrollProgress />
          <Header />
          <main id="main-content" className="relative z-10">
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <WhatsAppFloat />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
