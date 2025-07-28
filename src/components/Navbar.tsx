import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      {/* Desktop vertical navbar */}
      <nav className="hidden sm:flex fixed top-0 left-0 h-full w-20 bg-neutral-100 dark:bg-neutral-950 flex-col items-center pt-8 z-100 shadow-lg">
        <div className="flex flex-col gap-8 text-lg font-medium w-full items-center mt-4">
                      <Link href="/" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors" title="Home">
            <span className="sr-only">Home</span>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>
          </Link>
                      <a href="/blog" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors" title="Blog">
            <span className="sr-only">Blog</span>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 17V4.5A2.5 2.5 0 0 1 9 2h8.5A2.5 2.5 0 0 1 20 4.5V17"/></svg>
          </a>
                      <a href="/about" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors" title="About">
            <span className="sr-only">About</span>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
          </a>
                      <a href="/resume.pdf" target="_blank" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors" title="Resume">
            <span className="sr-only">Resume</span>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 8h6M9 12h6M9 16h6"/></svg>
          </a>
                      <a href="/contact" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors" title="Contact">
            <span className="sr-only">Contact</span>
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/><path d="M3 10.5l9 6 9-6"/></svg>
          </a>
        </div>
      </nav>
      {/* Mobile horizontal navbar */}
      <nav className="sm:hidden fixed bottom-0 left-0 w-full h-16 bg-neutral-100 dark:bg-neutral-950 flex flex-row items-center justify-around z-100 shadow-t-lg">
        <Link href="/" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors flex flex-col items-center" title="Home">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>
        </Link>
                  <a href="/blog" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors flex flex-col items-center" title="Blog">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 17V4.5A2.5 2.5 0 0 1 9 2h8.5A2.5 2.5 0 0 1 20 4.5V17"/></svg>
        </a>
                  <a href="/about" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors flex flex-col items-center" title="About">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a7.5 7.5 0 0 1 13 0"/></svg>
        </a>
                  <a href="/resume.pdf" target="_blank" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors flex flex-col items-center" title="Resume">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 8h6M9 12h6M9 16h6"/></svg>
        </a>
                  <a href="/contact" className="hover:text-blue-400 text-neutral-900 dark:text-white transition-colors flex flex-col items-center" title="Contact">
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v4.5"/><path d="M3 10.5l9 6 9-6"/></svg>
        </a>
      </nav>
    </>
  );
} 