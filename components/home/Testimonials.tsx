import Image from 'next/image';
import AnimateOnView from '@/components/shared/AnimateOnView';

export default function Testimonials() {
  return (
    <section className="bg-[#F4F0EE] py-20">
      <div className="mx-auto max-w-6xl px-8">
        {/* Section title */}
        <AnimateOnView className="mb-12 text-center">
          <h2 className="text-2xl font-semibold text-zinc-700">
            Depoimentos sobre os{' '}
            <span className="font-display font-bold italic text-[#8C6E85]">tratamentos</span>
          </h2>
        </AnimateOnView>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Esquerda: depoimento */}
          <AnimateOnView delay={100}>
            <div className="flex flex-col">
              <span
                aria-hidden="true"
                className="font-serif text-[6rem] leading-none text-[#5E2D53] opacity-40 select-none"
              >
                &#8220;
              </span>
              <p className="-mt-4 text-[15px] leading-loose text-zinc-600">
                Fui atendida com muito cuidado e atenção. Os tratamentos estéticos da
                Perfil da Beleza superaram todas as minhas expectativas. Me sinto mais
                confiante e radiante após cada sessão.
              </p>
              <p className="mt-4 text-[15px] leading-loose text-zinc-600">
                Recomendo de coração a todos que buscam tratamentos personalizados e de
                alta qualidade. A equipe é extremamente dedicada e o ambiente é
                acolhedor e profissional.
              </p>
              <footer className="mt-6">
                <p className="text-sm font-bold text-zinc-800">— Bf da Balera</p>
                <p className="text-sm text-zinc-500">Clínica de Estética</p>
              </footer>
            </div>
          </AnimateOnView>

          {/* Direita: imagens com entrada escalonada */}
          <div className="grid h-[340px] grid-cols-2 gap-2">
            <AnimateOnView delay={200} className="relative row-span-2 overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80"
                alt="Interior da clínica"
                fill
                className="object-cover"
              />
            </AnimateOnView>
            <AnimateOnView delay={350} className="relative overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80"
                alt="Tratamento estético"
                fill
                className="object-cover"
              />
            </AnimateOnView>
            <AnimateOnView delay={500} className="relative overflow-hidden rounded-xl">
              <Image
                src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=400&q=80"
                alt="Ambiente da clínica"
                fill
                className="object-cover"
              />
            </AnimateOnView>
          </div>
        </div>
      </div>
    </section>
  );
}
