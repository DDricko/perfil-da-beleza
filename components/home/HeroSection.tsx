import Image from 'next/image';
import Button from '@/components/shared/Button';

const HERO_EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';

export default function HeroSection() {
  return (
    <section className="relative min-h-[680px] bg-[#F4F0EE] overflow-hidden">
      {/* Right side: model photo with Ken Burns */}
      <div className="absolute inset-y-0 right-0 w-[58%] hidden md:block overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=1000&q=85"
          alt="Tratamentos estéticos para todos"
          fill
          className="object-cover object-center animate-ken-burns"
          priority
        />
      </div>

      {/*
        Gradient at section level — outside the GPU compositing layer created by
        the Ken Burns transform. This eliminates the 1px compositing-seam artifact
        that appeared at the left edge of the image container (42% from left).
        Percentages are recalculated relative to full section width:
          8% of 58% container  → ~47% of section
          35% of 58% container → ~62% of section
          60% of 58% container → ~77% of section
      */}
      <div
        aria-hidden="true"
        className="absolute inset-y-0 left-0 right-0 z-[1] hidden md:block pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, #F4F0EE 0%, #F4F0EE 47%, rgba(244,240,238,0.6) 62%, transparent 77%)',
        }}
      />

      {/* Text content — sequential fade-in */}
      <div className="relative z-10 mx-auto max-w-6xl px-8 py-20 md:py-32">
        <div className="max-w-[480px]">
          {/* 1 — Título: aparece primeiro */}
          <h1
            className="font-display font-bold leading-[1.06] text-[#5E2D53]"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)',
              animation: `heroFadeUp 700ms ${HERO_EASING} 0ms both`,
            }}
          >
            Sua Melhor Versão,
            <br />
            em Harmonia.
          </h1>
          {/* 2 — Subtítulo: +200ms */}
          <p
            className="mt-5 text-[1.05rem] leading-relaxed text-[#8C6E85]"
            style={{ animation: `heroFadeUp 700ms ${HERO_EASING} 200ms both` }}
          >
            Tratamentos Estéticos
            <br />
            Personalizados para Todos.
          </p>
          {/* 3 — Botão CTA: +400ms */}
          <div
            className="mt-8"
            style={{ animation: `heroFadeUp 700ms ${HERO_EASING} 400ms both` }}
          >
            <Button href="/contato">Agende Sua Avaliação</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
