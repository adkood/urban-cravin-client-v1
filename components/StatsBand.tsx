'use client';

import { motion } from 'framer-motion';
import { Package, Clock, TrendingDown, Truck } from 'lucide-react';

const stats = [
  {
    icon: Package,
    value: '10k+',
    label: 'Orders',
  },
  {
    icon: Clock,
    value: '24h',
    label: 'Dispatch',
  },
  {
    icon: TrendingDown,
    value: '<2%',
    label: 'Return Rate',
  },
  {
    icon: Truck,
    value: '2-4 days',
    label: 'Avg Delivery',
  },
];

export default function StatsBand() {
  return (
    <section className="py-16 px-4 bg-[#141414]">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-left"
            >
              <stat.icon className="w-8 h-8 md:w-10 md:h-10 text-[#9B1E22] mb-4" />
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
