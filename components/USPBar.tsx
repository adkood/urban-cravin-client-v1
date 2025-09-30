"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Truck, CreditCard, RefreshCcw } from 'lucide-react';

export default function USPBar() {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const y = window.scrollY || 0;
        const delta = y - lastY.current;

        // Always show near the very top
        if (y < 40) {
          setVisible(true);
        } else {
          // Hide on downward scroll beyond a small threshold; show on upward scroll
          if (delta > 6) setVisible(false);
          if (delta < -6) setVisible(true);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          key="usp"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 inset-x-0 z-50 bg-[#9B1E22] text-white py-2 px-4"
        >
          <div className="container mx-auto">
            <div className="flex items-center justify-center gap-6 md:gap-8 text-xs md:text-sm font-medium">
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
      )}
    </AnimatePresence>
  );
}
