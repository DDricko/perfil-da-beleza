import Image from 'next/image';
import Button from '@/components/shared/Button';

export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] bg-[#F4F0EE] overflow-hidden">
      {/* Right side: model photo */}
      <div className="absolute inset-y-0 right-0 w-[58%] hidden md:block">
        <Image
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85"
          alt="Tratamentos estéticos para todos"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Smooth gradient fade to off-white */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, #F4F0EE 0%, #F4F0EE 8%, rgba(244,240,238,0.6) 35%, transparent 60%)',
          }}
        />
      </div>

      {/* Text content */}
      <div className="relative z-10 mx-auto max-w-6xl px-8 py-20 md:py-32">
        <div className="max-w-[480px]">
          <h1
            className="font-display font-bold leading-[1.06] text-[#5E2D53]"
            style={{ fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)' }}
          >
            Sua Melhor Versão,
            <br />
            em Harmonia.
          </h1>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-[#8C6E85]">
            Tratamentos Estéticos
            <br />
            Personalizados para Todos.
          </p>
          <div className="mt-8">
            <Button href="/contato">Agende Sua Avaliação</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
