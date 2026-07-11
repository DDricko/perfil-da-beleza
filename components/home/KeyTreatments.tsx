import AnimateOnView from '@/components/shared/AnimateOnView';

function FacialIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Face oval */}
      <ellipse cx="24" cy="26" rx="10" ry="13" stroke="#5E2D53" strokeWidth="1.5" fill="none" />
      {/* Eyes */}
      <circle cx="20" cy="22" r="1.4" fill="#5E2D53" />
      <circle cx="28" cy="22" r="1.4" fill="#5E2D53" />
      {/* Smile */}
      <path d="M20 29 Q24 33 28 29" stroke="#5E2D53" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Sparkle glow top-right */}
      <path d="M37 8 L37 12" stroke="#5E2D53" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M35 10 L39 10" stroke="#5E2D53" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M40 4 L40 6" stroke="#5E2D53" strokeWidth="1" strokeLinecap="round" />
      <path d="M39 5 L41 5" stroke="#5E2D53" strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

function MassageIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <circle cx="24" cy="9" r="5" stroke="#5E2D53" strokeWidth="1.5" fill="none" />
      {/* Shoulders */}
      <path d="M13 20 Q14 16 24 16 Q34 16 35 20"
        stroke="#5E2D53" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Left side of body */}
      <path d="M13 20 L12 38" stroke="#5E2D53" strokeWidth="1.5" strokeLinecap="round" />
      {/* Right side of body */}
      <path d="M35 20 L36 38" stroke="#5E2D53" strokeWidth="1.5" strokeLinecap="round" />
      {/* Hips */}
      <path d="M12 38 Q24 42 36 38"
        stroke="#5E2D53" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Spa sparkle — vertical */}
      <path d="M24 27 L24 31" stroke="#5E2D53" strokeWidth="1.2" strokeLinecap="round" />
      {/* Spa sparkle — horizontal */}
      <path d="M22 29 L26 29" stroke="#5E2D53" strokeWidth="1.2" strokeLinecap="round" />
      {/* Side dots */}
      <circle cx="19" cy="25" r="0.9" fill="#5E2D53" />
      <circle cx="29" cy="25" r="0.9" fill="#5E2D53" />
    </svg>
  );
}

function LeafIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <ellipse cx="24" cy="20" rx="10" ry="12" stroke="#5E2D53" strokeWidth="1.5" fill="none" />
      {/* Hair crown — arc above head */}
      <path d="M14 17 Q13 5 24 4 Q35 5 34 17"
        stroke="#5E2D53" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Hair strands flowing down */}
      <path d="M14 30 Q10 36 12 43" stroke="#5E2D53" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M18 32 Q16 37 17 43" stroke="#5E2D53" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M24 33 Q23 37 24 43" stroke="#5E2D53" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M30 32 Q32 37 31 43" stroke="#5E2D53" strokeWidth="1.3" strokeLinecap="round" fill="none" />
      <path d="M34 30 Q38 36 36 43" stroke="#5E2D53" strokeWidth="1.3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const TREATMENTS = [
  {
    id: '1',
    icon: <FacialIcon />,
    title: 'Tratamentos Faciais',
    description:
      'Procedimentos especializados para revitalizar, hidratar e rejuvenescer a pele do rosto, devolvendo luminosidade e firmeza natural.',
  },
  {
    id: '2',
    icon: <MassageIcon />,
    title: 'Tratamentos Corporais',
    description:
      'Técnicas avançadas de modelagem e tonificação para o corpo, promovendo bem-estar, autoestima e resultados visíveis.',
  },
  {
    id: '3',
    icon: <LeafIcon />,
    title: 'Tratamentos Capilares',
    description:
      'Cuidados personalizados para fortalecer, nutrir e restaurar a saúde dos cabelos com produtos e técnicas de alta performance.',
  },
];

export default function KeyTreatments() {
  return (
    <section className="bg-[#FAFAF8] py-20">
      <div className="mx-auto max-w-6xl px-8">
        {/* Título da seção */}
        <AnimateOnView className="mb-14 text-center">
          <p className="text-base text-zinc-500">
            Conheça nossos principais tratamentos
          </p>
          <p className="mt-1 font-display text-2xl font-bold italic text-[#8C6E85]">
            key treatments
          </p>
        </AnimateOnView>
        {/* Cards com stagger esquerda → direita */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {TREATMENTS.map((t, i) => (
            <AnimateOnView key={t.id} delay={i * 150}>
              <div className="flex flex-col items-center gap-3 px-4 text-center">
                <div className="mb-1">{t.icon}</div>
                <h3 className="text-[15px] font-semibold text-zinc-800">{t.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">{t.description}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
