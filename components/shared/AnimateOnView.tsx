'use client';

import { ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';

const EASING = 'cubic-bezier(0.25, 0.46, 0.45, 0.94)';
const DURATION = 700;

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimateOnView({
  children,
  delay = 0,
  className = '',
}: Props) {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: [
          `opacity ${DURATION}ms ${EASING} ${delay}ms`,
          `transform ${DURATION}ms ${EASING} ${delay}ms`,
        ].join(', '),
      }}
    >
      {children}
    </div>
  );
}
