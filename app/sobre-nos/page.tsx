import { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'Sobre Nós — Perfil da Beleza',
  description: 'Conheça a Clínica de Estética Perfil da Beleza.',
};

export default function SobreNosPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle title="Sobre Nós" centered={false} />
      <p className="text-zinc-500">Em breve, nossa história e equipe.</p>
    </main>
  );
}
