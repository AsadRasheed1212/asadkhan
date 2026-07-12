export const siteName = 'Muhammad Asad';

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/service', label: 'Services' },
  { href: '/works', label: 'Works' },
  { href: '/credentials', label: 'Credentials' },
  { href: '/contact', label: 'Contact' },
];

export const skills = [
  'Data Entry', 'MS Excel', 'MS Word', 'WordPress',
  'PHP / Laravel', 'MySQL', 'Video Editing', 'HTML / CSS',
  'E-Commerce Operations',
];

export const skillBars = [
  { name: 'PHP / Laravel', pct: 90 },
  { name: 'WordPress CMS', pct: 88 },
  { name: 'MS Excel', pct: 92 },
  { name: 'MS Word', pct: 90 },
  { name: 'MySQL / Database', pct: 82 },
  { name: 'Data Entry', pct: 95 },
  { name: 'Video Editing', pct: 80 },
  { name: 'HTML / CSS', pct: 78 },
];

export const services = [
  { icon: '📊', title: 'Data Entry & Excel', desc: 'Accurate data entry, MS Excel reports, and structured data management.' },
  { icon: '⚡', title: 'Laravel Development', desc: 'PHP Laravel websites with clean structure and reliable MySQL backend.' },
  { icon: '📝', title: 'WordPress Management', desc: 'Page builds, content updates, and full WordPress site maintenance.' },
  { icon: '🎬', title: 'Video Editing', desc: 'Reels, ads, intros, and full edits with motion graphics and color grading.' },
  { icon: '🛒', title: 'E-Commerce Operations', desc: 'Product listing, store management, and online catalog organization.' },
  { icon: '🗄️', title: 'Database Design', desc: 'Efficient MySQL schemas and structured data for web applications.' },
  { icon: '💼', title: 'Administrative Support', desc: 'Email communication, internet research, and office administration tasks.' },
  { icon: '🚀', title: 'Performance', desc: 'Caching, CDN, server tuning — blazing fast load times.' },
];

export const works = [
  {
    id: 1, title: 'E-Commerce Platform', category: 'Laravel',
    description: 'Full-stack e-commerce with payment gateway, inventory management, and real-time notifications.',
    tech: ['Laravel', 'MySQL', 'Vue.js', 'Stripe'], thumbnail: null, url: null,
  },
  {
    id: 2, title: 'Portfolio CMS', category: 'Laravel',
    description: 'Custom CMS for managing portfolio projects, blog posts, and client work with admin panel.',
    tech: ['Laravel', 'Livewire', 'Tailwind CSS'], thumbnail: null, url: null,
  },
  {
    id: 3, title: 'Real Estate App', category: 'Web',
    description: 'Property listing platform with advanced search, map integration, and agent dashboard.',
    tech: ['Laravel', 'MySQL', 'Google Maps API'], thumbnail: null, url: null,
  },
  {
    id: 4, title: 'Restaurant Dashboard', category: 'UI/UX',
    description: 'Admin dashboard for restaurant management with order tracking and analytics charts.',
    tech: ['Blade', 'Chart.js', 'GSAP', 'Tailwind'], thumbnail: null, url: null,
  },
  {
    id: 5, title: 'Metro Gala — Kitchen & Household Store', category: 'Web',
    description: 'A fully functional e-commerce website built during my Advanced Diploma at Aptech Garden Center. Metro Gala is a kitchen and household products store featuring 6 product categories — Crockery, Cutlery, Kitchen Utensils, Storage Containers, Bakeware, and Pots & Pans — with individual product pages, Add to Cart flow, gallery, contact, and login pages. Built as a complete front-end e-commerce project.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
    thumbnail: '/works/metro-gala.png',
    url: 'https://asadrasheed1212.github.io/laravel/index.html',
  },
  {
    id: 6, title: 'Task Manager App', category: 'Laravel',
    description: 'A full-featured task management web app with user authentication, priority labels, due-date reminders, and a Kanban-style board. Team members can assign tasks, leave comments, and track progress in real time. Built with Laravel backend and a reactive Blade + Alpine.js frontend.',
    tech: ['Laravel', 'Alpine.js', 'MySQL', 'Tailwind CSS'], thumbnail: null, url: null,
  },
  {
    id: 7, title: 'Inventory & Stock Control System', category: 'Laravel',
    description: 'A web-based inventory management system designed for small businesses. Features include product cataloguing, stock-in / stock-out tracking, low-stock alerts, supplier records, and exportable Excel reports. Role-based access control lets managers and staff have separate views.',
    tech: ['Laravel', 'MySQL', 'Maatwebsite Excel', 'Tailwind CSS'], thumbnail: null, url: null,
  },
  {
    id: 8, title: 'Freelance Services Landing Page', category: 'Web',
    description: 'A modern, responsive single-page website for a freelance data-entry and admin-support business. Includes animated hero section, services breakdown, testimonials carousel, pricing table, and a contact form with email notification. Optimised for fast loading and SEO.',
    tech: ['HTML', 'CSS', 'JavaScript', 'GSAP'], thumbnail: null, url: null,
  },
  {
    id: 9, title: 'Sales Analytics Dashboard', category: 'UI/UX',
    description: 'An interactive sales analytics dashboard built for an e-commerce client. Displays monthly revenue trends, top-selling products, order status breakdown, and regional heat maps — all in real time. Includes CSV export and dark-mode toggle.',
    tech: ['Laravel', 'Chart.js', 'MySQL', 'Tailwind CSS'], thumbnail: null, url: null,
  },
  {
    id: 10, title: 'WordPress Business Website', category: 'WordPress',
    description: 'A professional multi-page WordPress website for a local services company. Customised an existing theme, built custom page templates, configured WooCommerce for bookings, and set up SEO plugins and caching for optimal performance. Ongoing content management included.',
    tech: ['WordPress', 'WooCommerce', 'Elementor', 'PHP'], thumbnail: null, url: null,
  },
];

export const credentials = [
  {
    type: 'experience', title: 'WordPress & Laravel Website Management',
    organization: 'Freelance / Self-Managed Projects', year: '2023 – Present',
    description: 'Managed pages, posts, and content updates on WordPress sites. Updated and maintained Laravel website content, structure, and data organization for web applications.',
  },
  {
    type: 'education', title: 'Bachelor of Science in Economics',
    organization: 'University', year: '2022 – 2025',
    description: 'Undergraduate degree in Economics, alongside ongoing self-development in web development and data management.',
  },
  {
    type: 'education', title: 'Advanced Diploma in Software Engineering',
    organization: 'Aptech Garden Center', year: '2021 – 2023',
    description: 'Completed Advanced Diploma in Software Engineering with a Credit grade, covering web development, databases, and software engineering fundamentals.',
  },
  {
    type: 'education', title: 'Intermediate / Commerce',
    organization: 'Sirajuddaula Commerce College', year: '2019 – 2021',
    description: 'Completed commerce studies, building a foundation in business and administrative concepts.',
  },
];

export const certificates = [
  { file: 'cert-diploma-software-engineering.jpg', title: 'Advanced Diploma in Software Engineering', org: 'Aptech Computer Education', year: '2024' },
  { file: 'cert-technology-contest.jpg', title: 'Technology Contest 2021', org: 'Aptech Learning', year: '2021' },
  { file: 'cert-iot-workshop.jpg', title: 'IOT Workshop', org: 'Aptech Learning', year: '2021' },
  { file: 'cert-no-code-tools.jpg', title: 'No Code Development Tools', org: 'Aptech Learning', year: '2021' },
];

export const contactInfo = [
  { icon: '📍', label: 'Location', value: 'Karachi, Pakistan' },
  { icon: '📧', label: 'Email', value: 'asadrasheed8787@gmail.com' },
  { icon: '📱', label: 'WhatsApp', value: '+92 316 2432479' },
];

export const socialLinks = [
  { name: 'Fiverr', href: 'https://www.fiverr.com/muhammadasadkh8?public_mode=true', icon: 'fiverr' },
  { name: 'GitHub', href: 'https://github.com/AsadRasheed1212', icon: 'github' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/asad-rasheed-731685263/', icon: 'linkedin' },
];

export const whatsappLink = 'https://wa.me/923162432479?text=Hello!%20I%20visited%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.';

export const gigs = [
  {
    id: 'g1', icon: '⚡', category: 'Laravel Development',
    title: 'I will build a Laravel web application for you',
    rating: '5.0', badge: 'Top Rated',
    packages: {
      basic: { price: 'Rs 5,000', label: 'Simple CRUD · 5 din delivery · 1 revision', delivery: '5 din delivery',
        features: ['Laravel setup & config', '1 module (CRUD)', 'MySQL database', 'Basic Blade UI', '!Authentication system', '!Admin panel'] },
      standard: { price: 'Rs 11,000', label: 'Multi-module app · 8 din delivery · 2 revisions', delivery: '8 din delivery',
        hostingAddon: '+ Hosting & domain setup available (+Rs 4,000/year)',
        features: ['Laravel setup & config', '3 modules (CRUD)', 'MySQL + migrations', 'Authentication system', 'Tailwind CSS UI', '!Admin panel'] },
      premium: { price: 'Rs 24,000', label: 'Full app + admin + hosting · 12 din delivery · Unlimited', delivery: '12 din delivery',
        features: ['Full project setup', 'Unlimited modules', 'Authentication system', 'Admin panel (Filament)', 'Tailwind CSS UI', '1 year hosting + domain included'] },
    },
  },
  {
    id: 'g2', icon: '📊', category: 'Data Entry & Excel',
    title: 'I will do data entry, Excel reports & spreadsheet work',
    rating: '4.9', badge: 'Level 2',
    packages: {
      basic: { price: 'Rs 1,500', label: '200 rows tak · 5 din delivery · 1 revision', delivery: '5 din delivery',
        features: ['200 rows tak', 'Data cleaning', 'Basic formatting', '!Formulas & functions', '!Charts & pivot tables', '!Automated reports'] },
      standard: { price: 'Rs 3,000', label: '1000 rows tak · 8 din delivery · 2 revisions', delivery: '8 din delivery',
        features: ['1000 rows tak', 'Data cleaning', 'Formulas & functions', 'Charts & pivot tables', '!Automated reports', '!Macro / VBA'] },
      premium: { price: 'Rs 6,000', label: 'Unlimited rows · 12 din delivery · Unlimited', delivery: '12 din delivery',
        features: ['Unlimited rows', 'Full data cleaning', 'Advanced formulas', 'Charts & pivot tables', 'Automated reports', 'Custom dashboard'] },
    },
  },
  {
    id: 'g3', icon: '🎬', category: 'Video Editing',
    title: 'I will edit your video for reels, ads, or YouTube',
    rating: '5.0', badge: null,
    packages: {
      basic: { price: 'Rs 2,000', label: '2 min video · 5 din delivery · 1 revision', delivery: '5 din delivery',
        features: ['2 min tak video', 'Basic cuts & transitions', 'Background music', '!Motion graphics', '!Color grading', '!Custom intro/outro'] },
      standard: { price: 'Rs 4,500', label: '5 min video · 8 din delivery · 2 revisions', delivery: '8 din delivery',
        features: ['5 min tak video', 'Cuts & transitions', 'Background music', 'Motion graphics', 'Color grading', '!Custom intro/outro'] },
      premium: { price: 'Rs 9,000', label: '15 min video · 12 din delivery · Unlimited', delivery: '12 din delivery',
        features: ['15 min tak video', 'Professional editing', 'Motion graphics', 'Color grading', 'Custom intro/outro', 'Social media export'] },
    },
  },
  {
    id: 'g4', icon: '📝', category: 'WordPress Management',
    title: 'I will manage or fix your WordPress website',
    rating: '4.8', badge: null,
    packages: {
      basic: { price: 'Rs 2,000', label: 'Minor fixes · 5 din delivery · 1 revision', delivery: '5 din delivery',
        features: ['Content updates', 'Plugin installation', 'Minor bug fixes', '!Theme customization', '!Speed optimization', '!WooCommerce setup'] },
      standard: { price: 'Rs 5,500', label: 'Full management · 8 din delivery · 2 revisions', delivery: '8 din delivery',
        hostingAddon: '+ Hosting & domain setup available (+Rs 3,500/year)',
        features: ['Content updates', 'Plugin management', 'Theme customization', 'Speed optimization', '!WooCommerce setup', '!Monthly maintenance'] },
      premium: { price: 'Rs 13,000', label: 'Complete setup + hosting · 12 din delivery · Unlimited', delivery: '12 din delivery',
        features: ['Full WordPress setup', 'Theme customization', 'WooCommerce setup', 'Speed optimization', 'SEO basics', '1 year hosting + domain included'] },
    },
  },
];

export const paymentMethods = [
  { icon: '🟢', name: 'EasyPaisa', lines: [['Number', '0316-2432479'], ['Name', 'Muhammad Asad']], copyLabel: 'Copy Number', copyValue: '03162432479' },
  { icon: '🟣', name: 'NayaPay', lines: [['Number', '0316-2432479'], ['Name', 'Muhammad Asad']], copyLabel: 'Copy Number', copyValue: '03162432479' },
  { icon: '🏦', name: 'Faysal Bank', lines: [['Name', 'Muhammad Asad'], ['IBAN', 'PK71FAYS3490383000003533'], ['Branch', 'IBB Pak Colony, Karachi']], copyLabel: 'Copy IBAN', copyValue: 'PK71FAYS3490383000003533' },
];

// PLACEHOLDER — apne real Fiverr / client reviews se replace karo before publish.
export const testimonials = [
  { name: 'Client Name', role: 'Fiverr Buyer — Laravel Development', avatar: 'CN', rating: 5,
    quote: 'Yahan apna real client feedback paste karo — Fiverr review se copy kar sakte ho.' },
  { name: 'Client Name', role: 'Fiverr Buyer — Data Entry & Excel', avatar: 'CN', rating: 5,
    quote: 'Yahan apna real client feedback paste karo — Fiverr review se copy kar sakte ho.' },
  { name: 'Client Name', role: 'Fiverr Buyer — WordPress Management', avatar: 'CN', rating: 5,
    quote: 'Yahan apna real client feedback paste karo — Fiverr review se copy kar sakte ho.' },
];
