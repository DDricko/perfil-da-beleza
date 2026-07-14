import Link from 'next/link';
import { CLINIC_INFO, SOCIAL_LINKS, NAV_LINKS, FOOTER_SERVICES } from '@/lib/constants';
import AnimateOnView from '@/components/shared/AnimateOnView';

function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.126 1.527 5.858L0 24l6.318-1.508A11.956 11.956 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.891 0-3.667-.5-5.2-1.373l-.374-.22-3.751.895.938-3.638-.243-.386A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="16" viewBox="0 0 14 18" fill="currentColor" className="shrink-0 mt-0.5">
      <path d="M7 0C3.68 0 1 2.68 1 6C1 10.5 7 18 7 18C7 18 13 10.5 13 6C13 2.68 10.32 0 7 0ZM7 8.5C5.62 8.5 4.5 7.38 4.5 6C4.5 4.62 5.62 3.5 7 3.5C8.38 3.5 9.5 4.62 9.5 6C9.5 7.38 8.38 8.5 7 8.5Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" className="shrink-0">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="12" viewBox="0 0 20 16" fill="currentColor" className="shrink-0">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      <footer
        className="text-white"
        style={{
          background: 'linear-gradient(135deg, #15101E 0%, #1A1028 50%, #12091A 100%)',
        }}
      >
        <div className="mx-auto max-w-6xl px-8 py-14">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-[2fr_1fr]">

            {/* Coluna 1 — Marca */}
            <AnimateOnView delay={0}>
              <div>
                <p className="font-display text-2xl font-bold text-white leading-none">
                  {CLINIC_INFO.name}
                </p>
                <p className="mt-1 text-[10px] tracking-[0.3em] uppercase text-[#D4AF37]">
                  {CLINIC_INFO.subtitle}
                </p>
                <div className="mt-2 h-px w-10 bg-[#D4AF37]" />
              </div>
              <p className="mt-sm text-sm leading-relaxed text-zinc-400">
                A est&eacute;tica de excel&ecirc;ncia que valoriza sua beleza natural.
                <br/>Tratamentos realizados com seriedade e sofistica&ccedil;&atilde;o.
              </p>
              <div className="mt-6 flex gap-2">
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 text-zinc-400 transition-colors hover:border-white hover:text-white"
                >
                  <WhatsAppIcon size={16} />
                </a>
                <a
                  href={SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-600 text-zinc-400 transition-colors hover:border-white hover:text-white"
                >
                  <InstagramIcon size={16} />
                </a>
              </div>
            </AnimateOnView>

            {/* Coluna 2 — Navegação */}
            {/* <AnimateOnView delay={100}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Navega&ccedil;&atilde;o
              </h3>
              <ul className="flex flex-col gap-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateOnView> */}

            {/* Coluna 3 — Serviços */}
            {/* <AnimateOnView delay={200}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Servi&ccedil;os
              </h3>
              <ul className="flex flex-col gap-2.5">
                {FOOTER_SERVICES.map((service) => (
                  <li key={service}>
                    <Link
                      href="/tratamentos"
                      className="text-sm text-zinc-400 transition-colors hover:text-white"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </AnimateOnView> */}

            {/* Coluna 4 — Contato */}
            <AnimateOnView delay={300}>
              <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
                Contato
              </h3>
              <ul className="flex flex-col gap-3">
                <li className="flex items-start gap-2 text-sm text-zinc-400">
                  <PinIcon />
                  <span>{CLINIC_INFO.address}</span>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-400">
                  <PhoneIcon />
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2 text-sm text-zinc-400">
                  <MailIcon />
                  <a
                    href={`mailto:${CLINIC_INFO.email}`}
                    className="hover:text-white transition-colors break-all"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </li>
              </ul>
            </AnimateOnView>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-6xl px-8 py-4 text-center">
            <span className="text-xs text-zinc-600">
              &copy; {new Date().getFullYear()} {CLINIC_INFO.name}. Todos os direitos reservados.
            </span>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale pelo WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <WhatsAppIcon size={26} />
      </a>
    </>
  );
}

