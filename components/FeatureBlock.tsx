'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const features = [
  '250-280 GSM cotton',
  'Pre-shrunk and bio-washed',
  'Boxy, relaxed fits',
];

export default function FeatureBlock() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fabric & Fit that lasts
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Quality you can feel. Every piece is engineered for comfort, durability, 
              and that perfect oversized silhouette.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-[#9B1E22] flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Mock */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80"
                alt="Premium fabric close-up"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-sm px-6 py-4 rounded-lg">
                <p className="text-[#9B1E22] text-sm font-bold mb-1">PREMIUM QUALITY</p>
                <p className="text-2xl font-bold">280 GSM</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
