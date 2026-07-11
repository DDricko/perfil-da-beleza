import { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';
import { CLINIC_INFO, SOCIAL_LINKS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contato — Perfil da Beleza',
  description: 'Entre em contato com a Clínica de Estética Perfil da Beleza.',
};

export default function ContatoPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle title="Contato" centered={false} />
      <div className="flex flex-col gap-2 text-zinc-600">
        <p>{CLINIC_INFO.address}</p>
        <p>{CLINIC_INFO.phone}</p>
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#7B2D8B] hover:underline"
        >
          Fale pelo WhatsApp
        </a>
      </div>
    </main>
  );
}
