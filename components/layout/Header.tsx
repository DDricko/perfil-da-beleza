'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { NAV_LINKS, CLINIC_INFO } from '@/lib/constants';

function HamburgerIcon() {
  return (
    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 1H22" stroke="#5E2D53" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M0 8H22" stroke="#5E2D53" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M0 15H22" stroke="#5E2D53" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L17 17" stroke="#5E2D53" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 1L1 17" stroke="#5E2D53" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-zinc-100">
      {/* Barra principal */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 md:px-8">
        <Link href="/" className="flex flex-col items-center gap-1" onClick={() => setIsOpen(false)}>
          <Image
            src="/logo.png"
            alt="Perfil da Beleza — Clínica de Estética"
            width={56}
            height={48}
            className="object-contain"
            priority
          />
          <div className="flex flex-col leading-tight items-center">
            <span className="text-[11px] font-bold tracking-widest text-[#5E2D53] uppercase">
              {CLINIC_INFO.name}
            </span>
            <span className="text-[7.5px] tracking-[0.25em] text-[#5E2D53] uppercase">
              {CLINIC_INFO.subtitle}
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive
                    ? 'text-zinc-900 font-medium underline underline-offset-4 decoration-zinc-800'
                    : 'text-zinc-500 hover:text-zinc-900'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Botão hambúrguer — somente mobile */}
        <button
          className="flex items-center justify-center p-2 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>

      {/* Mobile menu — dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col border-t border-zinc-100 bg-white px-6 py-2">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`py-3 text-sm border-b border-zinc-50 transition-colors ${
                  isActive
                    ? 'font-semibold text-[#5E2D53]'
                    : 'text-zinc-600 hover:text-[#5E2D53]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
