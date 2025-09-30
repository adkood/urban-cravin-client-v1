'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Truck, CreditCard, RefreshCcw } from 'lucide-react';

export default function USPBar() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100, 200], [1, 0, 0]);
  const y = useTransform(scrollY, [0, 100], [0, -50]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="bg-[#9B1E22] text-white py-2 px-4 overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-8 text-xs md:text-sm font-medium">
          <div className="flex items-center gap-2">
            <Truck className="w-4 h-4" />
            <span>Free shipping over ₹999</span>
          </div>
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4" />
            <span>COD available</span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCcw className="w-4 h-4" />
            <span>7-day easy returns</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
