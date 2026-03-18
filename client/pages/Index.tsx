import { useState } from "react";

const cars = [
  {
    id: 1,
    name: "Honda Amaze",
    type: "Sedan",
    year: "2023",
    price: "₹5.90 Lakh",
    km: "12,000 km",
    fuel: "Petrol",
    transmission: "Manual",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/ec18f0f57595553bbfd4e1c3f98c7898383ae5a5?width=764",
  },
  {
    id: 2,
    name: "Hyundai i20 Asta",
    type: "Hatchback",
    year: "2022",
    price: "₹7.25 Lakh",
    km: "18,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/7e1782658a367b0c75cb5dc10bac5ee0095c28da?width=764",
  },
  {
    id: 3,
    name: "Tata Nexon EV",
    type: "SUV",
    year: "2023",
    price: "₹17.50 Lakh",
    km: "8,000 km",
    fuel: "Electric",
    transmission: "Automatic",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/109c28413f52eb3874460436053db7f87632af97?width=764",
  },
  {
    id: 4,
    name: "Maruti Swift VXI",
    type: "Hatchback",
    year: "2021",
    price: "₹4.85 Lakh",
    km: "24,000 km",
    fuel: "Petrol",
    transmission: "Manual",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/9773f95f4e072a5de81228c75cb3b269e1c5ee4e?width=764",
  },
  {
    id: 5,
    name: "Audi A4 Premium",
    type: "Sedan",
    year: "2020",
    price: "₹28.50 Lakh",
    km: "32,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/e4054fdc091ea6771b01850bed707e6e0113d74b?width=764",
  },
  {
    id: 6,
    name: "Mahindra Scorpio",
    type: "SUV",
    year: "2022",
    price: "₹12.50 Lakh",
    km: "15,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/dac48c11eb4938742e8a05db69d578883a525157?width=764",
  },
  {
    id: 7,
    name: "Hyundai Creta SX",
    type: "SUV",
    year: "2023",
    price: "₹14.50 Lakh",
    km: "9,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/12d5d852a989e8e8be1103d133798f78ac008016?width=764",
  },
  {
    id: 8,
    name: "Honda City ZX",
    type: "Sedan",
    year: "2021",
    price: "₹8.75 Lakh",
    km: "22,000 km",
    fuel: "Petrol",
    transmission: "CVT",
    img: "https://api.builder.io/api/v1/image/assets/TEMP/4bb5798ab4ecd3b07d945e6e1011be367a9e3da6?width=764",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    time: "2 weeks ago",
    rating: 5,
    text: '"Excellent service! Bought my Honda Amaze here. The team was professional and the paperwork was hassle-free."',
  },
  {
    name: "Priya Sharma",
    time: "1 month ago",
    rating: 5,
    text: '"Very transparent process. They showed me the complete inspection report. Highly recommended!"',
  },
  {
    name: "Amit Patel",
    time: "3 weeks ago",
    rating: 4,
    text: '"Great collection of cars. Got a good deal on my Tata Nexon. Staff is polite and helpful."',
  },
];

function StarRating({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: total }).map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M9.60416 1.91274C9.64068 1.83895 9.69709 1.77685 9.76704 1.73342C9.83698 1.69 9.91767 1.66699 9.99999 1.66699C10.0823 1.66699 10.163 1.69 10.233 1.73342C10.3029 1.77685 10.3593 1.83895 10.3958 1.91274L12.3208 5.8119C12.4476 6.06854 12.6348 6.29058 12.8663 6.45895C13.0979 6.62732 13.3668 6.737 13.65 6.77857L17.955 7.40857C18.0366 7.42039 18.1132 7.4548 18.1762 7.5079C18.2393 7.56101 18.2862 7.63069 18.3117 7.70908C18.3372 7.78746 18.3402 7.87141 18.3205 7.95143C18.3007 8.03146 18.259 8.10436 18.2 8.1619L15.0867 11.1936C14.8813 11.3937 14.7277 11.6406 14.639 11.9133C14.5503 12.1859 14.5292 12.476 14.5775 12.7586L15.3125 17.0419C15.3269 17.1234 15.3181 17.2074 15.2871 17.2841C15.2561 17.3609 15.2041 17.4274 15.1371 17.4761C15.0701 17.5247 14.9908 17.5536 14.9082 17.5593C14.8256 17.5651 14.7431 17.5475 14.67 17.5086L10.8217 15.4852C10.5681 15.3521 10.286 15.2825 9.99958 15.2825C9.71318 15.2825 9.43106 15.3521 9.17749 15.4852L5.32999 17.5086C5.25694 17.5472 5.17449 17.5646 5.09204 17.5588C5.00958 17.5529 4.93043 17.524 4.86357 17.4754C4.79672 17.4268 4.74485 17.3604 4.71387 17.2838C4.68289 17.2071 4.67404 17.1233 4.68833 17.0419L5.42249 12.7594C5.47099 12.4767 5.44998 12.1864 5.36128 11.9136C5.27257 11.6408 5.11883 11.3937 4.91333 11.1936L1.79999 8.16274C1.74049 8.10526 1.69832 8.03223 1.6783 7.95197C1.65827 7.8717 1.66119 7.78742 1.68673 7.70873C1.71226 7.63004 1.75938 7.5601 1.82272 7.50689C1.88607 7.45367 1.96308 7.41932 2.04499 7.40774L6.34916 6.77857C6.63271 6.73732 6.90199 6.62778 7.13381 6.45939C7.36564 6.291 7.55308 6.0688 7.67999 5.8119L9.60416 1.91274Z"
            fill={i < count ? "#FBBF24" : "none"}
            stroke={i < count ? "#FBBF24" : "#CBD5E1"}
            strokeWidth="1.66667"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

function CarCard({ car }: { car: (typeof cars)[0] }) {
  return (
    <div className="flex flex-col bg-white rounded-xl border border-[#E5E5E5] shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img src={car.img} alt={car.name} className="w-full h-48 object-cover" />
        {/* Heart btn */}
        <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.8333 11.6667C17.075 10.45 18.3333 8.99167 18.3333 7.08333C18.3333 5.86776 17.8505 4.70197 16.9909 3.84243C16.1314 2.98289 14.9656 2.5 13.75 2.5C12.2833 2.5 11.25 2.91667 10 4.16667C8.75 2.91667 7.71667 2.5 6.25 2.5C5.03443 2.5 3.86864 2.98289 3.0091 3.84243C2.14956 4.70197 1.66667 5.86776 1.66667 7.08333C1.66667 9 2.91667 10.4583 4.16667 11.6667L10 17.5L15.8333 11.6667Z" stroke="#475569" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {/* Year badge */}
        <div className="absolute bottom-3 left-3">
          <span className="bg-[#F59E0B] text-white text-xs font-semibold px-2.5 py-0.5 rounded-md">
            {car.year}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-[#0F172A] font-bold text-lg leading-7">{car.name}</h3>
            <span className="border border-[#E5E5E5] text-[#0A0A0A] text-xs font-semibold px-2.5 py-0.5 rounded-md w-fit">
              {car.type}
            </span>
          </div>
          <span className="text-[#D97706] font-bold text-xl leading-8 text-right">{car.price}</span>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-3 gap-3 py-3.5 border-y border-[#E2E8F0]">
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 9.33341L10.6667 6.66675" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.22668 12.6666C1.64149 11.6531 1.33339 10.5035 1.33334 9.33318C1.3333 8.16291 1.64131 7.01324 2.22642 5.99974C2.81153 4.98624 3.65312 4.14462 4.6666 3.55947C5.68008 2.97432 6.82974 2.66626 8.00001 2.66626C9.17028 2.66626 10.3199 2.97432 11.3334 3.55947C12.3469 4.14462 13.1885 4.98624 13.7736 5.99974C14.3587 7.01324 14.6667 8.16291 14.6667 9.33318C14.6666 10.5035 14.3585 11.6531 13.7733 12.6666" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#475569] text-sm">{car.km}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 14.6667H10" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M2.66666 6H9.33332" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.33332 14.6666V2.66659C9.33332 2.31296 9.19285 1.97382 8.9428 1.72378C8.69275 1.47373 8.35361 1.33325 7.99999 1.33325H3.99999C3.64637 1.33325 3.30723 1.47373 3.05718 1.72378C2.80713 1.97382 2.66666 2.31296 2.66666 2.66659V14.6666" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.33334 8.66659H10.6667C11.0203 8.66659 11.3594 8.80706 11.6095 9.05711C11.8595 9.30716 12 9.6463 12 9.99992V11.3333C12 11.6869 12.1405 12.026 12.3905 12.2761C12.6406 12.5261 12.9797 12.6666 13.3333 12.6666C13.687 12.6666 14.0261 12.5261 14.2762 12.2761C14.5262 12.026 14.6667 11.6869 14.6667 11.3333V6.55325C14.6668 6.37731 14.6321 6.20308 14.5646 6.04061C14.4971 5.87813 14.3981 5.73062 14.2733 5.60659L12 3.33325" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#475569] text-sm">{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M13.3333 4.66675H7.33333" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M9.33333 11.3333H3.33333" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11.3333 13.3333C12.4379 13.3333 13.3333 12.4378 13.3333 11.3333C13.3333 10.2287 12.4379 9.33325 11.3333 9.33325C10.2288 9.33325 9.33333 10.2287 9.33333 11.3333C9.33333 12.4378 10.2288 13.3333 11.3333 13.3333Z" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4.66667 6.66675C5.77124 6.66675 6.66667 5.77132 6.66667 4.66675C6.66667 3.56218 5.77124 2.66675 4.66667 2.66675C3.5621 2.66675 2.66667 3.56218 2.66667 4.66675C2.66667 5.77132 3.5621 6.66675 4.66667 6.66675Z" stroke="#475569" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-[#475569] text-sm">{car.transmission}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <button className="flex-1 h-9 rounded-md bg-[#F59E0B] text-white text-sm font-medium hover:bg-[#D97706] transition-colors shadow-sm">
            View Details
          </button>
          <button className="h-9 px-4 rounded-md border border-[#E5E5E5] bg-white hover:bg-gray-50 transition-colors flex items-center justify-center shadow-sm">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8195C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.6079 13.3983 14.63 13.2133 14.6133C11.1619 14.3904 9.19134 13.6894 7.46001 12.5667C5.84923 11.5431 4.48356 10.1774 3.46001 8.56665C2.33333 6.82745 1.63217 4.84731 1.41334 2.78665C1.39668 2.60229 1.41859 2.41649 1.47767 2.24107C1.53676 2.06564 1.63172 1.90444 1.75652 1.76773C1.88131 1.63102 2.03321 1.52179 2.20253 1.447C2.37186 1.37221 2.5549 1.33349 2.74001 1.33332H4.74001C5.06354 1.33013 5.3772 1.4447 5.62251 1.65567C5.86783 1.86664 6.02806 2.15961 6.07334 2.47998C6.15775 3.12003 6.31431 3.74847 6.54001 4.35332C6.6297 4.59193 6.64911 4.85126 6.59594 5.10057C6.54277 5.34988 6.41925 5.57872 6.24001 5.75998L5.39334 6.60665C6.34238 8.27568 7.72431 9.65761 9.39334 10.6067L10.24 9.75998C10.4213 9.58074 10.6501 9.45722 10.8994 9.40405C11.1487 9.35088 11.4081 9.37029 11.6467 9.45998C12.2515 9.68568 12.88 9.84224 13.52 9.92665C13.8439 9.97234 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.953 14.6667 11.28Z" stroke="#0A0A0A" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Index() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="w-full bg-white font-[Inter,sans-serif]">
      {/* ── NAV ─────────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A] border-b border-[#1E293B]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <span className="text-2xl font-bold leading-8">
            <span className="text-white">Surebuy </span>
            <span className="text-[#F59E0B]">Cars</span>
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "Inventory", "Services", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white text-base font-medium hover:text-[#F59E0B] transition-colors">
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:9658101001" className="flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-white text-sm font-medium px-4 py-2 rounded-md transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8195C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.6079 13.3983 14.63 13.2133 14.6133C11.1619 14.3904 9.19134 13.6894 7.46001 12.5667C5.84923 11.5431 4.48356 10.1774 3.46001 8.56665C2.33333 6.82745 1.63217 4.84731 1.41334 2.78665C1.39668 2.60229 1.41859 2.41649 1.47767 2.24107C1.53676 2.06564 1.63172 1.90444 1.75652 1.76773C1.88131 1.63102 2.03321 1.52179 2.20253 1.447C2.37186 1.37221 2.5549 1.33349 2.74001 1.33332H4.74001C5.06354 1.33013 5.3772 1.4447 5.62251 1.65567C5.86783 1.86664 6.02806 2.15961 6.07334 2.47998C6.15775 3.12003 6.31431 3.74847 6.54001 4.35332C6.6297 4.59193 6.64911 4.85126 6.59594 5.10057C6.54277 5.34988 6.41925 5.57872 6.24001 5.75998L5.39334 6.60665C6.34238 8.27568 7.72431 9.65761 9.39334 10.6067L10.24 9.75998C10.4213 9.58074 10.6501 9.45722 10.8994 9.40405C11.1487 9.35088 11.4081 9.37029 11.6467 9.45998C12.2515 9.68568 12.88 9.84224 13.52 9.92665C13.8439 9.97234 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.953 14.6667 11.28Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              9658101001
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1E293B] border-t border-[#334155] px-6 py-4 flex flex-col gap-4">
            {["Home", "Inventory", "Services", "About", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-white text-base font-medium" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
            <a href="tel:9658101001" className="text-[#F59E0B] text-base font-semibold">
              9658101001
            </a>
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/834f847eb5b02132f2f8e3fb66d9c4194d61e62c?width=3840"
            alt="Premium Car Showroom"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.80) 50%, rgba(15,23,42,0.60) 100%)" }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[1280px] mx-auto w-full px-6 lg:px-8 py-24">
          <div className="max-w-[584px] flex flex-col gap-6">
            {/* Trusted badge */}
            <div className="flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-[rgba(245,158,11,0.30)] bg-[rgba(245,158,11,0.20)] backdrop-blur-sm">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10.318 8.59332L11.328 14.2773C11.3393 14.3443 11.3299 14.413 11.3011 14.4745C11.2722 14.5359 11.2253 14.5871 11.1666 14.6212C11.1079 14.6553 11.0402 14.6706 10.9725 14.6651C10.9049 14.6597 10.8405 14.6337 10.788 14.5907L8.40132 12.7993C8.2861 12.7132 8.14614 12.6667 8.00232 12.6667C7.8585 12.6667 7.71854 12.7132 7.60332 12.7993L5.21265 14.59C5.1602 14.6329 5.0959 14.6589 5.02832 14.6644C4.96074 14.6698 4.8931 14.6545 4.83443 14.6206C4.77576 14.5866 4.72884 14.5355 4.69993 14.4742C4.67103 14.4129 4.66151 14.3442 4.67265 14.2773L5.68199 8.59332" stroke="#FBBF24" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 9.33331C10.2091 9.33331 12 7.54245 12 5.33331C12 3.12417 10.2091 1.33331 8 1.33331C5.79086 1.33331 4 3.12417 4 5.33331C4 7.54245 5.79086 9.33331 8 9.33331Z" stroke="#FBBF24" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-[#FCD34D] text-sm font-medium">Trusted Since 2022</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl font-bold leading-[1.1]">
              <span className="text-white">Your Dream Car<br /></span>
              <span className="text-[#FBBF24]">Awaits You</span>
            </h1>

            {/* Subtext */}
            <p className="text-[#CBD5E1] text-lg sm:text-xl leading-relaxed">
              Discover premium pre-owned vehicles with complete transparency, flexible financing, and certified quality at Bhubaneswar's most trusted dealership.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#inventory" className="flex items-center gap-3 bg-[#F59E0B] hover:bg-[#D97706] text-white text-lg font-medium px-8 py-2.5 rounded-md transition-colors shadow-md">
                Browse Inventory
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33334 8H12.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 3.33331L12.6667 7.99998L8 12.6666" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href="#contact" className="flex items-center gap-3 border-2 border-white text-white text-lg font-medium px-8 py-2.5 rounded-md hover:bg-white/10 transition-colors">
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/20">
              {[
                { icon: "car", value: "500+", label: "Cars Sold" },
                { icon: "user", value: "4.8", label: "Customer Rating" },
                { icon: "badge", value: "100%", label: "Certified Cars" },
              ].map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-white text-2xl sm:text-3xl font-bold">{stat.value}</span>
                  </div>
                  <span className="text-[#94A3B8] text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* ── INVENTORY ───────────────────────────────────────── */}
      <section id="inventory" className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <span className="bg-[#FEF3C7] text-[#B45309] text-xs font-semibold px-2.5 py-0.5 rounded-md shadow-sm">
              Premium Collection
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A]">Explore Our Inventory</h2>
            <p className="text-[#475569] text-lg sm:text-xl max-w-[672px]">
              Browse through our carefully curated selection of certified pre-owned vehicles
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl border border-[#E5E5E5] shadow-md p-6 mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cars..."
                  className="w-full h-9 pl-10 pr-4 border border-[#E5E5E5] rounded-md text-sm text-[#737373] focus:outline-none focus:border-[#F59E0B] shadow-sm"
                />
                <svg className="absolute left-3 top-2.5" width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 17.5L13.8833 13.8833" stroke="#94A3B8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#94A3B8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {["All Brands", "All Models", "All Price Range"].map((placeholder) => (
                <select key={placeholder} className="h-9 px-3 border border-[#E5E5E5] rounded-md text-sm text-[#0A0A0A] bg-white focus:outline-none focus:border-[#F59E0B] shadow-sm">
                  <option>{placeholder}</option>
                </select>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLETE CAR BUYING SOLUTION ────────────────────── */}
      <section id="services" className="py-20 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16 text-center">
            <span className="bg-[#FEF3C7] text-[#B45309] text-xs font-semibold px-2.5 py-0.5 rounded-md shadow-sm">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A]">Complete Car Buying Solution</h2>
            <p className="text-[#475569] text-lg sm:text-xl max-w-[672px]">
              From selection to ownership, we make your car buying journey smooth and transparent
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: "Wide Inventory",
                desc: "From budget hatchbacks to premium SUVs and luxury cars - find your perfect match",
                svg: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M25.3333 22.6666H28C28.8 22.6666 29.3333 22.1333 29.3333 21.3333V17.3333C29.3333 16.1333 28.4 15.0666 27.3333 14.7999C24.9333 14.1333 21.3333 13.3333 21.3333 13.3333C21.3333 13.3333 19.6 11.4666 18.4 10.2666C17.7333 9.73325 16.9333 9.33325 16 9.33325H6.66666C5.86666 9.33325 5.19999 9.86659 4.79999 10.5333L2.93332 14.3999C2.75676 14.9149 2.66666 15.4555 2.66666 15.9999V21.3333C2.66666 22.1333 3.19999 22.6666 3.99999 22.6666H6.66666" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9.33332 25.3333C10.8061 25.3333 12 24.1394 12 22.6667C12 21.1939 10.8061 20 9.33332 20C7.86056 20 6.66666 21.1939 6.66666 22.6667C6.66666 24.1394 7.86056 25.3333 9.33332 25.3333Z" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 22.6667H20" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22.6667 25.3333C24.1394 25.3333 25.3333 24.1394 25.3333 22.6667C25.3333 21.1939 24.1394 20 22.6667 20C21.1939 20 20 21.1939 20 22.6667C20 24.1394 21.1939 25.3333 22.6667 25.3333Z" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Certified Inspection",
                desc: "Thorough 150-point inspection with transparent vehicle history reports",
                svg: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M26.6667 17.3333C26.6667 23.9999 22 27.3333 16.4533 29.2666C16.1629 29.365 15.8474 29.3603 15.56 29.2533C10 27.3333 5.33334 23.9999 5.33334 17.3333V7.99995C5.33334 7.64633 5.47381 7.30719 5.72386 7.05714C5.97391 6.80709 6.31305 6.66662 6.66667 6.66662C9.33334 6.66662 12.6667 5.06662 14.9867 3.03995C15.2691 2.79861 15.6285 2.66602 16 2.66602C16.3715 2.66602 16.7309 2.79861 17.0133 3.03995C19.3467 5.07995 22.6667 6.66662 25.3333 6.66662C25.687 6.66662 26.0261 6.80709 26.2761 7.05714C26.5262 7.30719 26.6667 7.64633 26.6667 7.99995V17.3333Z" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15.9999L14.6667 18.6666L20 13.3333" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Flexible Financing",
                desc: "Easy loan approval with competitive rates to suit your budget",
                svg: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M8 4H24" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 10.6667H24" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 17.3333L19.3333 27.9999" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 17.3333H12" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 17.3333C20.8893 17.3333 20.8893 4 12 4" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "After-Sales Service",
                desc: "Free service, car wash, oil change, and repair support for peace of mind",
                svg: (
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M19.6 8.40006C19.3557 8.64929 19.2188 8.98438 19.2188 9.33339C19.2188 9.68239 19.3557 10.0175 19.6 10.2667L21.7333 12.4001C21.9826 12.6444 22.3177 12.7812 22.6667 12.7812C23.0157 12.7812 23.3508 12.6444 23.6 12.4001L28.6267 7.37339C29.2971 8.85497 29.5001 10.5057 29.2086 12.1056C28.9171 13.7055 28.1449 15.1785 26.995 16.3284C25.8451 17.4783 24.3721 18.2505 22.7722 18.542C21.1723 18.8335 19.5216 18.6305 18.04 17.9601L8.82666 27.1734C8.29622 27.7038 7.5768 28.0018 6.82666 28.0018C6.07651 28.0018 5.35709 27.7038 4.82666 27.1734C4.29622 26.643 3.99823 25.9235 3.99823 25.1734C3.99823 24.4232 4.29622 23.7038 4.82666 23.1734L14.04 13.9601C13.3695 12.4785 13.1665 10.8277 13.458 9.22786C13.7495 7.62798 14.5217 6.15493 15.6716 5.00502C16.8215 3.8551 18.2946 3.08295 19.8945 2.79144C21.4943 2.49994 23.1451 2.70294 24.6267 3.37339L19.6133 8.38672L19.6 8.40006Z" stroke="#D97706" strokeWidth="2.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((feat) => (
              <div key={feat.title} className="rounded-xl border-2 border-[#E5E5E5] bg-white p-6 flex flex-col items-center text-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-2xl bg-[#FEF3C7] flex items-center justify-center">
                  {feat.svg}
                </div>
                <h3 className="text-[#0F172A] font-bold text-lg">{feat.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>

          {/* Inspection Banner */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/e4f4a94bc8f38dfa7fca9e4601dd66e982321c60?width=1168"
                alt="Car Inspection"
                className="w-full aspect-[3/2] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[#F59E0B] rounded-2xl p-6 shadow-xl hidden sm:block">
                <div className="text-white font-bold text-4xl leading-10">150+</div>
                <div className="text-white text-sm mt-1">Point Inspection</div>
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-5 pt-4">
              <span className="bg-[#FEF3C7] text-[#B45309] text-xs font-semibold px-2.5 py-0.5 rounded-md shadow-sm w-fit">
                Quality Assurance
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight">
                Certified Quality You Can Trust
              </h3>
              <p className="text-[#475569] text-lg leading-7">
                Every vehicle undergoes our rigorous 150-point inspection process. We ensure mechanical soundness, aesthetic condition, and complete documentation transparency.
              </p>
              <div className="flex flex-col gap-4 pt-2">
                {[
                  "Complete Vehicle History Report",
                  "Mechanical & Electrical Inspection",
                  "Transparent Pricing - No Hidden Costs",
                  "Post-Purchase Support & Warranty",
                  "Free First Service Included",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-0.5">
                      <path d="M21.801 9.99999C22.2577 12.2413 21.9322 14.5714 20.8789 16.6018C19.8255 18.6322 18.1079 20.24 16.0125 21.1573C13.9171 22.0746 11.5706 22.2458 9.3643 21.6424C7.15797 21.0389 5.22519 19.6974 3.88828 17.8414C2.55136 15.9854 1.89112 13.7272 2.01766 11.4434C2.14421 9.15952 3.04988 6.98808 4.58365 5.29116C6.11742 3.59424 8.18658 2.47442 10.4461 2.11844C12.7056 1.76247 15.0188 2.19185 17 3.33499" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M9 11L12 14L22 4" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-[#334155] text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────────────────── */}
      <section id="about" className="py-20 md:py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16 text-center">
            <span className="bg-[#FEF3C7] text-[#B45309] text-xs font-semibold px-2.5 py-0.5 rounded-md shadow-sm">
              Customer Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A]">What Our Customers Say</h2>
            <p className="text-[#475569] text-lg sm:text-xl max-w-[672px]">
              Don't just take our word for it - hear from happy customers who found their perfect car
            </p>
          </div>

          {/* Review cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((t, idx) => (
              <div key={idx} className="relative bg-white border border-[#E5E5E5] rounded-xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
                <StarRating count={t.rating} />
                <p className="text-[#334155] text-base leading-relaxed flex-1">{t.text}</p>
                <div className="flex items-center pt-4 border-t border-[#E2E8F0]">
                  <div>
                    <p className="text-[#0F172A] font-bold text-base">{t.name}</p>
                    <p className="text-[#64748B] text-sm">{t.time}</p>
                  </div>
                </div>
                {/* Quote icon */}
                <svg className="absolute bottom-6 right-6 opacity-20" width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M32 6C30.9391 6 29.9217 6.42143 29.1716 7.17157C28.4214 7.92172 28 8.93913 28 10V22C28 23.0609 28.4214 24.0783 29.1716 24.8284C29.9217 25.5786 30.9391 26 32 26C32.5304 26 33.0391 26.2107 33.4142 26.5858C33.7893 26.9609 34 27.4696 34 28V30C34 31.0609 33.5786 32.0783 32.8284 32.8284C32.0783 33.5786 31.0609 34 30 34C29.4696 34 28.9609 34.2107 28.5858 34.5858C28.2107 34.9609 28 35.4696 28 36V40C28 40.5304 28.2107 41.0391 28.5858 41.4142C28.9609 41.7893 29.4696 42 30 42C33.1826 42 36.2348 40.7357 38.4853 38.4853C40.7357 36.2348 42 33.1826 42 30V10C42 8.93913 41.5786 7.92172 40.8284 7.17157C40.0783 6.42143 39.0609 6 38 6H32Z" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 6C8.93913 6 7.92172 6.42143 7.17157 7.17157C6.42143 7.92172 6 8.93913 6 10V22C6 23.0609 6.42143 24.0783 7.17157 24.8284C7.92172 25.5786 8.93913 26 10 26C10.5304 26 11.0391 26.2107 11.4142 26.5858C11.7893 26.9609 12 27.4696 12 28V30C12 31.0609 11.5786 32.0783 10.8284 32.8284C10.0783 33.5786 9.06087 34 8 34C7.46957 34 6.96086 34.2107 6.58579 34.5858C6.21071 34.9609 6 35.4696 6 36V40C6 40.5304 6.21071 41.0391 6.58579 41.4142C6.96086 41.7893 7.46957 42 8 42C11.1826 42 14.2348 40.7357 16.4853 38.4853C18.7357 36.2348 20 33.1826 20 30V10C20 8.93913 19.5786 7.92172 18.8284 7.17157C18.0783 6.42143 17.0609 6 16 6H10Z" stroke="#F59E0B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "4.8/5", label: "Average Rating", sub: "Based on 250+ reviews" },
              { value: "500+", label: "Happy Customers", sub: "Since 2022" },
              { value: "100%", label: "Certified Cars", sub: "Thorough inspection" },
              { value: "24/7", label: "Support Available", sub: "Always here to help" },
            ].map((s) => (
              <div key={s.label} className="text-center py-6">
                <div className="text-[#D97706] text-4xl font-bold leading-10">{s.value}</div>
                <div className="text-[#475569] text-base mt-2">{s.label}</div>
                <div className="text-[#64748B] text-sm mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISIT SHOWROOM / CONTACT ─────────────────────────── */}
      <section id="contact" className="py-20 md:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-12 text-center">
            <span className="bg-[#FEF3C7] text-[#B45309] text-xs font-semibold px-2.5 py-0.5 rounded-md shadow-sm">
              Get Directions
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A]">Visit Our Showroom</h2>
            <p className="text-[#475569] text-lg sm:text-xl">
              Have questions? Our team is here to help you find your perfect car
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left column */}
            <div className="flex flex-col gap-6">
              {/* Locations card */}
              <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 shadow-sm">
                <h3 className="text-[#0F172A] font-bold text-xl mb-6">Our Locations</h3>
                <div className="flex flex-col gap-6">
                  {[
                    {
                      name: "Pandra Showroom (Main)",
                      isMain: true,
                      address: "Plot No-117, Cuttack–Puri Bypass Rd, near Aditya Granite, Bhubaneswar, Odisha 751025",
                      phone: "9658101001",
                    },
                    {
                      name: "Andharua Branch",
                      isMain: false,
                      address: "Near Saveri Hotel, City Women's College Square, Bhubaneswar",
                      phone: "8079978834",
                    },
                  ].map((loc, idx) => (
                    <div key={idx}>
                      {idx > 0 && <hr className="border-[#E2E8F0] mb-6" />}
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] flex items-center justify-center flex-shrink-0">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M20 10C20 14.993 14.461 20.193 12.601 21.799C12.4277 21.9293 12.2168 21.9998 12 21.9998C11.7832 21.9998 11.5723 21.9293 11.399 21.799C9.539 20.193 4 14.993 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#D97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="text-[#0F172A] font-bold text-lg">{loc.name}</h4>
                            {loc.isMain && (
                              <span className="bg-[#F59E0B] text-white text-xs font-semibold px-2.5 py-0.5 rounded-md">Main</span>
                            )}
                          </div>
                          <p className="text-[#475569] text-base">{loc.address}</p>
                          <a href={`tel:${loc.phone}`} className="inline-flex items-center gap-2 mt-2 text-[#D97706] font-semibold text-base hover:underline">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                              <path d="M14.6667 11.2802V13.2802C14.6674 13.4659 14.6294 13.6497 14.555 13.8198C14.4806 13.9899 14.3715 14.1426 14.2347 14.2681C14.0979 14.3937 13.9364 14.4892 13.7605 14.5487C13.5846 14.6082 13.3983 14.6303 13.2133 14.6136C11.1619 14.3907 9.19134 13.6897 7.46001 12.5669C5.84923 11.5433 4.48356 10.1777 3.46001 8.56689C2.33333 6.8277 1.63217 4.84756 1.41334 2.78689C1.39668 2.60254 1.41859 2.41673 1.47767 2.24131C1.53676 2.06589 1.63172 1.90469 1.75652 1.76797C1.88131 1.63126 2.03321 1.52203 2.20253 1.44724C2.37186 1.37245 2.5549 1.33374 2.74001 1.33356H4.74001C5.06354 1.33038 5.3772 1.44495 5.62251 1.65592C5.86783 1.86689 6.02806 2.15986 6.07334 2.48023C6.15775 3.12027 6.31431 3.74871 6.54001 4.35356C6.6297 4.59218 6.64911 4.8515 6.59594 5.10081C6.54277 5.35012 6.41925 5.57897 6.24001 5.76023L5.39334 6.60689C6.34238 8.27592 7.72431 9.65786 9.39334 10.6069L10.24 9.76023C10.4213 9.58099 10.6501 9.45746 10.8994 9.40429C11.1487 9.35112 11.4081 9.37053 11.6467 9.46023C12.2515 9.68593 12.88 9.84248 13.52 9.92689C13.8439 9.97258 14.1396 10.1357 14.351 10.3852C14.5624 10.6348 14.6748 10.9533 14.6667 11.2802Z" stroke="#D97706" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {loc.phone}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Working hours */}
              <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-xl p-6 flex items-center gap-4 shadow-sm">
                <div className="w-12 h-12 rounded-xl bg-[#F59E0B] flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 6V12L16 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[#0F172A] font-bold text-lg">Working Hours</h4>
                  <p className="text-[#334155] font-medium">Open Daily</p>
                  <p className="text-[#475569]">9:00 AM - 8:00 PM</p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white border border-[#E5E5E5] rounded-xl p-6 shadow-sm">
                <h4 className="text-[#0F172A] font-bold text-lg mb-4">Quick Contact</h4>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 bg-[#F8FAFC] rounded-xl p-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z" stroke="#D97706" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-[#475569] text-sm">Call Us</p>
                      <p className="text-[#0F172A] font-semibold">9658101001</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-[#F8FAFC] rounded-xl p-4">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M18.3333 5.8335L10.8408 10.606C10.5866 10.7537 10.2978 10.8315 10.0037 10.8315C9.70971 10.8315 9.42091 10.7537 9.16666 10.606L1.66666 5.8335" stroke="#D97706" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M16.6667 3.3335H3.33332C2.41285 3.3335 1.66666 4.07969 1.66666 5.00016V15.0002C1.66666 15.9206 2.41285 16.6668 3.33332 16.6668H16.6667C17.5871 16.6668 18.3333 15.9206 18.3333 15.0002V5.00016C18.3333 4.07969 17.5871 3.3335 16.6667 3.3335Z" stroke="#D97706" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div>
                      <p className="text-[#475569] text-sm">Email Us</p>
                      <p className="text-[#0F172A] font-semibold">info@surebuycars.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column – Contact Form */}
            <div>
              <div className="bg-white border border-[#E5E5E5] rounded-xl p-8 shadow-sm">
                <h3 className="text-[#0F172A] font-bold text-2xl mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  {[
                    { label: "Your Name *", name: "name", type: "text", placeholder: "Enter your name" },
                    { label: "Email Address *", name: "email", type: "email", placeholder: "your.email@example.com" },
                    { label: "Phone Number *", name: "phone", type: "tel", placeholder: "Enter your phone number" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-[#334155] text-sm font-medium mb-2">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={(formData as Record<string, string>)[field.name]}
                        onChange={handleInputChange}
                        placeholder={field.placeholder}
                        required
                        className="w-full h-9 px-3 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] shadow-sm"
                      />
                    </div>
                  ))}
                  <div>
                    <label className="block text-[#334155] text-sm font-medium mb-2">Your Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className="w-full px-3 py-2 border border-[#E5E5E5] rounded-md text-sm focus:outline-none focus:border-[#F59E0B] focus:ring-1 focus:ring-[#F59E0B] shadow-sm resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 rounded-md bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium text-lg flex items-center justify-center gap-3 transition-colors shadow-sm"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M9.69067 14.4572C9.716 14.5203 9.76003 14.5742 9.81685 14.6116C9.87368 14.6489 9.94057 14.668 10.0086 14.6663C10.0766 14.6646 10.1424 14.6421 10.1972 14.6018C10.2521 14.5616 10.2933 14.5055 10.3153 14.4412L14.6487 1.77454C14.67 1.71547 14.6741 1.65154 14.6604 1.59024C14.6467 1.52894 14.6159 1.4728 14.5715 1.42839C14.5271 1.38398 14.4709 1.35314 14.4096 1.33947C14.3483 1.3258 14.2844 1.32987 14.2253 1.35121L1.55867 5.68454C1.49433 5.7066 1.43829 5.74782 1.39805 5.80266C1.35781 5.85749 1.33532 5.92332 1.33357 5.99131C1.33183 6.05931 1.35093 6.1262 1.38831 6.18303C1.42568 6.23985 1.47955 6.28388 1.54267 6.30921L6.82934 8.42921C6.99646 8.49612 7.1483 8.59618 7.27571 8.72336C7.40312 8.85054 7.50346 9.0022 7.57067 9.16921L9.69067 14.4572Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M14.5693 1.43115L7.276 8.72382" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Send Message
                  </button>
                  <div className="border-t border-[#E2E8F0] pt-4">
                    <a
                      href="https://wa.me/919658101001"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-12 rounded-md bg-[#22C55E] hover:bg-[#16A34A] text-white font-medium text-lg flex items-center justify-center gap-3 transition-colors shadow-sm"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M14 10C14 10.3536 13.8595 10.6928 13.6095 10.9428C13.3594 11.1929 13.0203 11.3333 12.6667 11.3333H4.66667L2 14V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H12.6667C13.0203 2 13.3594 2.14048 13.6095 2.39052C13.8595 2.64057 14 2.97971 14 3.33333V10Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      Chat on WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────── */}
      <footer className="bg-[#0F172A] pt-16 pb-8">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-bold leading-8">
                <span className="text-white">Surebuy </span>
                <span className="text-[#F59E0B]">Cars</span>
              </span>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                Bhubaneswar's trusted destination for premium pre-owned vehicles since 2022.
              </p>
              <div className="flex gap-3 pt-2">
                {[
                  <svg key="fb" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 1.6665H12.5C11.3949 1.6665 10.3351 2.10549 9.55373 2.88689C8.77233 3.66829 8.33334 4.7281 8.33334 5.83317V8.33317H5.83334V11.6665H8.33334V18.3332H11.6667V11.6665H14.1667L15 8.33317H11.6667V5.83317C11.6667 5.61216 11.7545 5.4002 11.9108 5.24391C12.067 5.08763 12.279 4.99984 12.5 4.99984H15V1.6665Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                  <svg key="ig" width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1.66666" y="1.6665" width="16.6667" height="16.6667" rx="4" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /><path d="M13.3333 9.47476C13.4362 10.1683 13.3177 10.8766 12.9948 11.4989C12.6719 12.1213 12.161 12.6259 11.5347 12.9412C10.9084 13.2564 10.1987 13.3661 9.5065 13.2547C8.81428 13.1433 8.17481 12.8165 7.67904 12.3207C7.18327 11.825 6.85645 11.1855 6.74507 10.4933C6.63368 9.80106 6.7434 9.09134 7.05862 8.46507C7.37383 7.83881 7.8785 7.32788 8.50083 7.00496C9.12316 6.68205 9.83147 6.56359 10.525 6.66643C11.2324 6.77133 11.8874 7.10098 12.3931 7.60669C12.8988 8.11239 13.2284 8.76733 13.3333 9.47476Z" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /><path d="M14.5833 5.4165H14.5917" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" /></svg>,
                ].map((icon, i) => (
                  <button key={i} className="w-10 h-10 rounded-full bg-[#1E293B] flex items-center justify-center hover:bg-[#334155] transition-colors">
                    {icon}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Quick Links</h4>
              <ul className="flex flex-col gap-3">
                {["Home", "Inventory", "Services", "About Us", "Contact"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-[#94A3B8] text-base hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Our Services</h4>
              <ul className="flex flex-col gap-3">
                {["Buy Used Cars", "Sell Your Car", "Car Financing", "Car Inspection", "After-Sales Service"].map((s) => (
                  <li key={s}>
                    <a href="#" className="text-[#94A3B8] text-base hover:text-white transition-colors">{s}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">Contact Us</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-1">
                    <path d="M18.3333 14.0999V16.5999C18.3343 16.832 18.2867 17.0617 18.1937 17.2744C18.1008 17.487 17.9644 17.6779 17.7934 17.8348C17.6224 17.9917 17.4205 18.1112 17.2006 18.1855C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1117 9.32498 15.7083C7.31151 14.4288 5.60443 12.7217 4.32499 10.7083C2.91663 8.53426 2.04019 6.05908 1.76665 3.48325C1.74583 3.25281 1.77321 3.02055 1.84707 2.80127C1.92092 2.58199 2.03963 2.38049 2.19562 2.2096C2.35162 2.03871 2.54149 1.90218 2.75314 1.80869C2.9648 1.7152 3.1936 1.6668 3.42499 1.66658H5.92499C6.32941 1.6626 6.72148 1.80582 7.02812 2.06953C7.33476 2.33324 7.53505 2.69946 7.59165 3.09992C7.69717 3.89997 7.89286 4.68552 8.17499 5.44158C8.2871 5.73985 8.31137 6.06401 8.24491 6.37565C8.17844 6.68729 8.02404 6.97334 7.79998 7.19992L6.74165 8.25825C7.92795 10.3445 9.65536 12.072 11.7417 13.2583L12.8 12.1999C13.0266 11.9759 13.3126 11.8215 13.6243 11.755C13.9359 11.6885 14.26 11.7128 14.5583 11.8249C15.3144 12.107 16.0999 12.3027 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6912 18.3333 14.0999Z" stroke="#F59E0B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-[#94A3B8] text-sm">Main Office</p>
                    <p className="text-white">9658101001</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-1">
                    <path d="M18.3333 5.8335L10.8408 10.606C10.5866 10.7537 10.2978 10.8315 10.0037 10.8315C9.70971 10.8315 9.42091 10.7537 9.16666 10.606L1.66666 5.8335" stroke="#F59E0B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16.6667 3.3335H3.33332C2.41285 3.3335 1.66666 4.07969 1.66666 5.00016V15.0002C1.66666 15.9206 2.41285 16.6668 3.33332 16.6668H16.6667C17.5871 16.6668 18.3333 15.9206 18.3333 15.0002V5.00016C18.3333 4.07969 17.5871 3.3335 16.6667 3.3335Z" stroke="#F59E0B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-[#94A3B8] text-sm">Email</p>
                    <p className="text-white">info@surebuycars.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0 mt-1">
                    <path d="M16.6667 8.33317C16.6667 12.494 12.0508 16.8273 10.5008 18.1657C10.3564 18.2742 10.1807 18.333 10 18.333C9.81934 18.333 9.64357 18.2742 9.49918 18.1657C7.94918 16.8273 3.33334 12.494 3.33334 8.33317C3.33334 6.56506 4.03572 4.86937 5.28596 3.61913C6.53621 2.36888 8.2319 1.6665 10 1.6665C11.7681 1.6665 13.4638 2.36888 14.7141 3.61913C15.9643 4.86937 16.6667 6.56506 16.6667 8.33317Z" stroke="#F59E0B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 10.8335C11.3807 10.8335 12.5 9.71421 12.5 8.3335C12.5 6.95278 11.3807 5.8335 10 5.8335C8.61929 5.8335 7.5 6.95278 7.5 8.3335C7.5 9.71421 8.61929 10.8335 10 10.8335Z" stroke="#F59E0B" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div>
                    <p className="text-[#94A3B8] text-sm">Location</p>
                    <p className="text-white">Pandra, Bhubaneswar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-[#1E293B] pt-8">
            <p className="text-center text-[#94A3B8] text-base">
              © 2026 Surebuy Cars. All rights reserved. | Designed with care for our customers
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
