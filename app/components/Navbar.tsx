"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#service" },
  { label: "Sectors", href: "#sector" },
  { label: "Insights", href: "#insights" },
  { label: "Approach", href: "#approach" },
  { label: "Investors", href: "#invest" },
  { label: "News", href: "#news" },
  { label: "Careers", href: "#career" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`flex justify-between pl-3 pr-8 gap-24 pb-3 fixed top-0 left-0 right-0 bg-transparent z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg pt-4" : "bg-transparent text-white pt-4"
          }`}
      >
        <div>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="LXXI logo"
              width={78.29}
              height={97.37}
              className="rounded-lg"
            />
          </Link>
        </div>

        <ul className="hidden lg:flex gap-2 items-center">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:bg-yellow-400 py-2 px-3.5 hover:text-white hover:rounded-sm transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile: search + hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <Link href="/search" className="p-2 text-current">
            <CiSearch className="text-3xl" />
          </Link>
          <button
            className="p-2 text-current focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
          >
            {!mobileMenuOpen && <FiMenu className="text-3xl" />}
          </button>
        </div>

        {/* Desktop search */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/search"
            className={`${scrolled
              ? "bg-amber-300 text-gray-900 hover:bg-amber-400"
              : "bg-yellow-400 text-white hover:bg-yellow-500"
              } py-2.5 px-4 rounded-lg flex items-center gap-2 transition-colors font-medium`}
          >
            Search in site
            <CiSearch className="text-xl" />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu – only rendered when open, fully hidden otherwise */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop – click to close */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Sidebar */}
          <div
            className={`
              lg:hidden fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs bg-white shadow-2xl
              transform transition-transform duration-400 ease-in-out
              ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
            `}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b">
                <div className="flex items-center gap-3">
                  <Image
                    src="/logo.png"
                    alt="LXXI logo"
                    width={48}
                    height={60}
                    className="rounded-lg"
                  />
                  <span className="text-xl font-bold text-gray-900">Menu</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-gray-900 p-2 -mr-2"
                  aria-label="Close menu"
                >
                  <IoMdClose className="text-3xl" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="flex items-center px-4 py-3.5 text-lg font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom buttons */}
              <div className="p-6 border-t mt-auto">
                <div className="flex flex-col gap-4">
                  <Link
                    href="/#insights"
                    className="py-4 px-6 bg-blue-600 text-white text-center rounded-xl font-semibold hover:bg-blue-700 transition"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="/#search"
                    className="py-4 px-6 border border-gray-300 text-center rounded-xl hover:bg-gray-50 transition flex items-center justify-center gap-3"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <CiSearch className="text-xl" />
                    Search
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}