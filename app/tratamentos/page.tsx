import { Metadata } from 'next';
import TreatmentCategoryCards from '@/components/tratamentos/TreatmentCategoryCards';

export const metadata: Metadata = {
  title: 'Tratamentos — Perfil da Beleza',
  description: 'Conheça todos os tratamentos estéticos da Perfil da Beleza: procedimentos corporais, faciais, estética e bem estar e estética avançada.',
};

export default function TratamentosPage() {
  return (
    <main>
      {/* Hero */}
      <div className="relative bg-[#F4F0EE] py-16">
        {/* Logo decorativa — marca d'água à direita */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/logo.png`}
          alt=""
          aria-hidden="true"
          className="md:hidden pointer-events-none absolute top-0 right-0 w-[220px] opacity-[0.07] select-none"
        />

        <div className="relative z-10 mx-auto max-w-6xl px-8 text-center">
          <p className="text-xs font-bold tracking-widest text-[#8C6E85] uppercase mb-2">
            O que oferecemos
          </p>
          <h1 className="text-3xl font-semibold text-[#2C2C2C]">
            Nossos{' '}
            <span className="font-display font-bold italic text-[#8C6E85]">Tratamentos</span>
          </h1>
          <p className="mt-3 text-[15px] text-zinc-500">
            Escolha a categoria de interesse e entre em contato para saber mais sobre os procedimentos disponíveis.
          </p>
        </div>
      </div>

      {/* Cards de categorias */}
      <div className="mx-auto max-w-6xl px-8 py-16">
        <TreatmentCategoryCards />
      </div>
    </main>
  );
}


