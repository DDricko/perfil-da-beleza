import AnimateOnView from '@/components/shared/AnimateOnView';
import Button from '@/components/shared/Button';

interface Promo {
  badge: string;
  badgeColor: 'purple' | 'gold' | 'rose' | 'teal';
  title: string;
  includes: string[];
  benefits: string[];
  price: string;
  priceNote?: string;
}

const PROMOS: Promo[] = [
  {
    badge: 'FACIAL',
    badgeColor: 'purple',
    title: 'Rejuvenescimento Facial Completo',
    includes: ['5 aplicações de colágeno'],
    benefits: ['Estimula colágeno', 'Reduz rugas', 'Hidratação profunda'],
    price: 'R$ 599,00',
  },
  {
    badge: 'RELAX',
    badgeColor: 'gold',
    title: 'Pacote Relax Day',
    includes: [
      'Banho de ofurô',
      'Máscara facial de ouro',
      'Massagem relaxante',
      'Café da tarde especial',
    ],
    benefits: ['Reduz estresse', 'Relaxamento profundo'],
    price: '5x de R$ 122,31',
    priceNote: 'sem juros',
  },
  {
    badge: 'EXCLUSIVO',
    badgeColor: 'rose',
    title: 'Rejuvenescimento Facial Exclusivo',
    includes: [
      '5 sessões de colágeno',
      'Bronzeamento artificial',
      '1 aplicação de cílios',
    ],
    benefits: ['Pele firme', 'Efeito iluminado', 'Olhar realçado'],
    price: '4x de R$ 194,32',
    priceNote: 'sem juros',
  },
  {
    badge: 'CORPORAL',
    badgeColor: 'teal',
    title: 'Pacote Corpo a Corpo',
    includes: [
      '5 sessões de drenagem',
      '5 sessões de enzima',
      '5 sessões de eletro',
    ],
    benefits: ['Modelagem corporal', 'Redução de medidas', 'Resultados visíveis'],
    price: '10x de R$ 159,25',
    priceNote: 'sem juros',
  },
];

const badgeStyles: Record<Promo['badgeColor'], string> = {
  purple: 'bg-[#5E2D53] text-white',
  gold:   'bg-[#D4AF37] text-white',
  rose:   'bg-rose-500 text-white',
  teal:   'bg-teal-600 text-white',
};

export default function Promotions() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-8">
        <AnimateOnView className="mb-12 text-center">
          <p className="text-xs font-bold tracking-widest text-[#8C6E85] uppercase mb-2">
            Ofertas Especiais
          </p>
          <h2 className="text-3xl font-semibold text-[#2C2C2C]">
            Promoções{' '}
            <span className="font-display font-bold italic text-[#8C6E85]">da Semana</span>
          </h2>
          <p className="mt-3 text-[15px] text-zinc-500">
            Aproveite nossas condições exclusivas por tempo limitado.
          </p>
        </AnimateOnView>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROMOS.map((promo, i) => (
            <AnimateOnView key={promo.title} delay={i * 100}>
              <div className="relative flex flex-col h-full rounded-2xl border border-zinc-100 bg-[#FAF8F9] p-6 shadow-sm transition-shadow hover:shadow-md">
                {/* Badge */}
                <span
                  className={`absolute -top-3 left-5 rounded-full px-3 py-0.5 text-[10px] font-bold tracking-widest uppercase ${badgeStyles[promo.badgeColor]}`}
                >
                  {promo.badge}
                </span>

                <h3 className="mt-3 text-[15px] font-semibold leading-snug text-zinc-800">
                  {promo.title}
                </h3>

                {/* Incluso */}
                <div className="mt-3 flex-1">
                  <p className="text-[10px] font-bold tracking-widest text-[#8C6E85] uppercase mb-1.5">
                    Incluso
                  </p>
                  <ul className="space-y-1">
                    {promo.includes.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-[12px] text-zinc-600">
                        <span className="mt-0.5 text-[#5E2D53]">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefícios */}
                <div className="mt-3">
                  <p className="text-[10px] font-bold tracking-widest text-[#8C6E85] uppercase mb-1.5">
                    Benefícios
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {promo.benefits.map((b) => (
                      <span
                        key={b}
                        className="rounded-full border border-[#8C6E85]/30 px-2 py-0.5 text-[10px] text-[#8C6E85]"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Preço */}
                <div className="mt-4 border-t border-zinc-100 pt-4">
                  <span className="block text-[20px] font-bold text-[#5E2D53] leading-tight">
                    {promo.price}
                  </span>
                  {promo.priceNote && (
                    <span className="text-[11px] font-medium text-emerald-600">
                      {promo.priceNote}
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="mt-4">
                  <Button href="/contato" variant="outline" className="w-full text-[13px] py-2 px-4">
                    Quero aproveitar
                  </Button>
                </div>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  );
}
