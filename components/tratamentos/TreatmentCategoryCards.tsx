'use client';

import { useState } from 'react';
import AnimateOnView from '@/components/shared/AnimateOnView';
import Button from '@/components/shared/Button';
import { SOCIAL_LINKS } from '@/lib/constants';
import { TREATMENT_CATEGORIES } from '@/lib/treatments';

const WA_NUMBER = SOCIAL_LINKS.whatsapp.match(/wa\.me\/(\d+)/)?.[1] ?? '';

function waHref(category: string) {
  const msg = `Olá! Tenho interesse nos tratamentos de *${category}* da Perfil da Beleza. Podem me passar mais informações?`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

interface CategoryCard {
  id: string;
  badge: string;
  badgeColor: 'purple' | 'gold' | 'rose' | 'teal';
  title: string;
  description: string;
  count: number;
  highlights: string[];
  tags: string[];
}

const CATEGORIES: CategoryCard[] = [
  {
    id: 'corporais',
    badge: 'CORPORAL',
    badgeColor: 'teal',
    title: 'Procedimentos Corporais',
    description: 'Tratamentos para modelar, revitalizar e cuidar do corpo de forma completa e personalizada.',
    count: 16,
    highlights: ['Drenagem linfática', 'Massagem modeladora', 'Radiofrequência corporal'],
    tags: ['Modelagem', 'Redução de medidas', 'Bem-estar'],
  },
  {
    id: 'faciais',
    badge: 'FACIAL',
    badgeColor: 'purple',
    title: 'Procedimentos Faciais',
    description: 'Protocolos avançados para limpeza profunda, rejuvenescimento e harmonização da pele.',
    count: 12,
    highlights: ['Limpeza de pele profunda', 'Microagulhamento', 'Rejuvenescimento facial'],
    tags: ['Pele radiante', 'Anti-idade', 'Acne e manchas'],
  },
  {
    id: 'bem-estar',
    badge: 'BEM ESTAR',
    badgeColor: 'rose',
    title: 'Estética e Bem Estar',
    description: 'Serviços completos de beleza e bem‑estar para o seu cuidado integral do dia a dia.',
    count: 8,
    highlights: ['Extensão de cílios', 'Manicure e pedicure', 'Bronze'],
    tags: ['Cuidado integral', 'Relaxamento', 'Embelezamento'],
  },
  {
    id: 'avancada',
    badge: 'AVANÇADA',
    badgeColor: 'gold',
    title: 'Estética Avançada',
    description: 'Procedimentos com tecnologia de ponta para resultados expressivos e duradouros.',
    count: 3,
    highlights: ['Botox (toxina botulínica)', 'Preenchimento labial', 'Bioestimuladores'],
    tags: ['Resultados expressivos', 'Rejuvenescimento', 'Harmonização'],
  },
];

const badgeStyles: Record<CategoryCard['badgeColor'], string> = {
  purple: 'bg-[#5E2D53] text-white',
  gold:   'bg-[#D4AF37] text-white',
  rose:   'bg-rose-500 text-white',
  teal:   'bg-teal-600 text-white',
};

const dotStyles: Record<CategoryCard['badgeColor'], string> = {
  purple: 'text-[#5E2D53]',
  gold:   'text-[#D4AF37]',
  rose:   'text-rose-500',
  teal:   'text-teal-600',
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
    >
      <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TreatmentCategoryCards() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 items-start">
      {CATEGORIES.map((cat, i) => {
        const isExpanded = expandedId === cat.id;
        const allItems = TREATMENT_CATEGORIES.find(c => c.id === cat.id)?.items ?? [];

        return (
          <AnimateOnView key={cat.title} delay={i * 100}>
            <div className="relative flex flex-col rounded-2xl border border-zinc-100 bg-[#FAF8F9] p-6 shadow-sm transition-shadow hover:shadow-md">

              {/* Badge */}
              <span className={`absolute -top-3 left-5 rounded-full px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase ${badgeStyles[cat.badgeColor]}`}>
                {cat.badge}
              </span>

              {/* Title */}
              <h3 className="mt-3 font-display text-[17px] font-bold italic leading-snug text-[#5E2D53]">
                {cat.title}
              </h3>
              <p className="mt-2 text-[12px] leading-relaxed text-zinc-500">
                {cat.description}
              </p>

              {/* Destaques */}
              <div className="mt-4 flex-1">
                <p className="text-[10px] font-bold tracking-widest text-[#8C6E85] uppercase mb-1.5">
                  Destaques
                </p>
                <ul className="space-y-1">
                  {cat.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-[12px] text-zinc-600">
                      <span className={`mt-0.5 ${dotStyles[cat.badgeColor]}`}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="mt-3">
                <p className="text-[10px] font-bold tracking-widest text-[#8C6E85] uppercase mb-1.5">
                  Indicado para
                </p>
                <div className="flex flex-wrap gap-1">
                  {cat.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[#8C6E85]/30 px-2 py-0.5 text-[10px] text-[#8C6E85]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Count + expand toggle */}
              <div className="mt-4 border-t border-zinc-100 pt-4 flex items-end justify-between">
                <div>
                  <span className="block text-[22px] font-bold leading-tight text-[#5E2D53]">
                    {cat.count}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-400">
                    procedimentos disponíveis
                  </span>
                </div>
                <button
                  onClick={() => setExpandedId(isExpanded ? null : cat.id)}
                  className="flex items-center gap-1.5 text-[11px] font-medium text-[#8C6E85] hover:text-[#5E2D53] transition-colors pb-0.5"
                >
                  {isExpanded ? 'Fechar' : 'Ver todos'}
                  <ChevronIcon open={isExpanded} />
                </button>
              </div>

              {/* Expandable full list */}
              <div className={`grid transition-all duration-300 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <div className="overflow-hidden">
                  <div className="pt-4">
                    <div className="h-px w-full bg-zinc-100 mb-3" />
                    <p className="text-[10px] font-bold tracking-widest text-[#8C6E85] uppercase mb-2">
                      Todos os procedimentos
                    </p>
                    <ul className="grid grid-cols-1 gap-y-1.5 sm:grid-cols-2">
                      {allItems.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-[12px] text-zinc-600">
                          <span className={`mt-0.5 flex-shrink-0 ${dotStyles[cat.badgeColor]}`}>·</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-4">
                <Button href={waHref(cat.title)} variant="outline" className="w-full text-[13px] py-2 px-4">
                  Agendar consulta
                </Button>
              </div>
            </div>
          </AnimateOnView>
        );
      })}
    </div>
  );
}

