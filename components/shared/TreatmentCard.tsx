import { Treatment } from '@/types/treatment';

interface TreatmentCardProps {
  treatment: Treatment;
}

export default function TreatmentCard({ treatment }: TreatmentCardProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl p-6 text-center">
      <div className="text-4xl text-[#7B2D8B]">✦</div>
      <h3 className="text-lg font-semibold text-[#2C2C2C]">
        {treatment.title}
      </h3>
      <p className="text-sm text-zinc-500">{treatment.description}</p>
    </div>
  );
}
