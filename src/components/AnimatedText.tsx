import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  children: string;
  className?: string;
}

export function AnimatedText({ children, className = '' }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = children.split('');

  return (
    <p ref={containerRef} className={className}>
      {characters.map((char, index) => {
        const start = index / characters.length;
        const end = start + 1 / characters.length;

        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

        return (
          <span key={index} className="relative inline-block">
            <span className="invisible">{char === ' ' ? '\u00A0' : char}</span>
            <motion.span
              className="absolute inset-0"
              style={{ opacity }}
            >
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
