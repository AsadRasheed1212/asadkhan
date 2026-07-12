# Muhammad Asad — Portfolio (Next.js)

Laravel se poori tarah Next.js (App Router) mein convert kiya gaya portfolio. Sara
content (Home, About, Services & Pricing, Works, Work Detail, Credentials, Contact)
same hai, saath animations aur naya sticky/glass header add kiya gaya hai.

## Kya naya hai

- **Dark / Light Mode** — top-right toggle button, choice `localStorage` mein save hoti hai, page reload pe bhi yaad rehta hai. Flash-of-wrong-theme se bachne ke liye ek chhota inline script hydration se pehle hi sahi theme laga deta hai.
- **Sticky glass header** — scroll pe blur + background fade in hota hai, active
  link ke neeche underline animate hoti hai, mobile pe full-screen menu.
- **Loading screen** — site open hote hi 2-3 sec ka animated progress-bar loader (sirf pehli visit pe, `sessionStorage` se track hota hai).
- **Custom cursor** — mouse ke sath smooth circle follow karta hai, links/buttons pe hover karne se size badh jata hai (desktop only).
- **Scroll progress bar** — page ke top par ek thin bar scroll ke sath fill hoti hai.
- **Back to top button** — 500px scroll ke baad neeche-left (mobile pe right) floating button dikhta hai.
- **Framer Motion page transitions** — route change pe fade + slide animation.
- **Fade Up on Scroll** — `Reveal` component, har section scroll mein aane par animate hota hai.
- **Zoom cards** — work/certificate thumbnails hover par smoothly zoom hote hain.
- **Tilt effect** — service cards mouse follow karke halka 3D tilt karte hain (`TiltCard`).
- **Magnetic buttons** — hero ke CTA buttons cursor ki taraf halka khinchte hain (`MagneticButton`).
- **Glow hover effect** — cards aur primary buttons hover par soft blue glow dete hain.
- **Text reveal animation** — hero heading ke words scroll/load par slide-up ho ke reveal hote hain (`TextReveal`).
- **Animated counters + skill progress bars** — numbers aur percentage bars scroll mein aane par count-up/fill animate hote hain.
- Har page apna content Laravel seeders se match karta hai (`lib/data.js`).

### Naye reusable components (jahan chahen wahan use kar sakte ho)

| Component | Kaam |
|---|---|
| `components/ThemeProvider.jsx` + `ThemeToggle.jsx` | Dark/Light mode context + toggle button |
| `components/ScrollProgress.jsx` | Top scroll progress bar |
| `components/BackToTop.jsx` | Floating back-to-top button |
| `components/PageTransition.jsx` | Route change fade transition |
| `components/TiltCard.jsx` | Kisi bhi card ko 3D tilt wrapper mein lapeto |
| `components/MagneticButton.jsx` | Kisi bhi button/link ko magnetic wrapper mein lapeto |
| `components/TextReveal.jsx` | `<TextReveal as="h2">Your Heading</TextReveal>` — word-by-word reveal |
| `.glow-hover` / `.zoom-card` (globals.css) | CSS utility classes — kisi bhi element pe class laga do |

## Local run

```bash
npm install
npm run dev
```

Phir `http://localhost:3000` khol lein.

## Build

```bash
npm run build
npm start
```

## Deploy ke baad ek zaroori step

`app/layout.js`, `app/sitemap.js`, aur `app/robots.js` mein `metadataBase` /
domain abhi placeholder (`https://muhammad-asad.vercel.app`) hai. Deploy karne
ke baad apna asal domain wahan daal dena — isse Open Graph / social-share
previews aur sitemap sahi URLs ke sath generate hongi.

## ⚠️ Deployment — InfinityFree kaam nahi karega

Yeh ek **Next.js** app hai jise chalane ke liye **Node.js server** chahiye.
InfinityFree sirf static/PHP hosting deta hai — Node.js support nahi karta,
isliye yeh project wahan deploy **nahi** ho sakta (jaisa Laravel version try
kar rahe thay).

Next.js ke liye behtareen free options:

- **Vercel** (recommended, Next.js banane walon ka apna platform) — GitHub repo
  connect karo, auto-deploy ho jayega.
- **Netlify** — Next.js plugin ke sath support karta hai.
- Koi bhi Node.js-supporting host (Railway, Render, etc.)

Agar sirf static HTML chahiye (bina contact-form API ke) to `next.config.js`
mein `output: 'export'` add karke `npm run build` se static files generate ho
sakti hain — phir wo files kisi bhi static host (InfinityFree included) pe
upload ho sakti hain, lekin contact form API route kaam nahi karega (uski jagah
WhatsApp button use ho sakta hai).

## Structure

```
app/                 → routes (App Router)
  page.js            → Home
  about/page.js
  service/page.jsx    → Services & Pricing (interactive gig cards)
  works/page.jsx       → Works grid + filter
  works/[id]/page.js   → Work detail
  credentials/page.js
  contact/page.jsx
  api/contact/route.js → form submit handler (extend with email service)
components/           → Header, Footer, Reveal, Counter, GigCard, etc.
lib/data.js            → all site content (ported from Laravel seeders)
public/                → CV, certificates, photo
```

## Contact form

`app/api/contact/route.js` abhi sirf console.log karta hai. Isay real email
bhejne ke liye Resend, Nodemailer, ya kisi bhi email API se connect kar sakte
ho.
