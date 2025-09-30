'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const looks = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
    title: 'Urban Essential',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1492447166138-50c3889fccb1?w=600&q=80',
    title: 'Street Ready',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
    title: 'Minimalist Vibe',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?w=600&q=80',
    title: 'Bold Statement',
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    title: 'Classic Style',
  },
];

export default function Lookbook() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section ref={containerRef} className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Lifestyle Lookbook</h2>
          <p className="text-gray-400 text-lg">See the attitude in action</p>
        </motion.div>
      </div>

      <motion.div style={{ x }} className="flex gap-6 pl-4">
        {looks.map((look, index) => (
          <motion.div
            key={look.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex-shrink-0 w-80 md:w-96 group"
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
              <motion.img
                src={look.image}
                alt={look.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold">{look.title}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
