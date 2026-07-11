import { Metadata } from 'next';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'Tratamentos — Perfil da Beleza',
  description: 'Conheça todos os tratamentos estéticos da Perfil da Beleza.',
};

export default function TratamentosPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-20">
      <SectionTitle
        title="Nossos Tratamentos"
        subtitle="Tratamentos Estéticos Personalizados para Todos."
        centered={false}
      />
      <p className="text-zinc-500">Em breve, lista completa de tratamentos.</p>
    </main>
  );
}
