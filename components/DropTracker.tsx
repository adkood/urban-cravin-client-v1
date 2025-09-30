'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Eye, Package } from 'lucide-react';

export default function DropTracker() {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-neutral-900 rounded-2xl p-6 border border-white/5 hover:border-[#9B1E22]/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#9B1E22]/10 flex items-center justify-center">
                    <TrendingUp className="text-[#9B1E22]" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Latest Activity</div>
                    <div className="text-white/50 text-sm">234 orders today</div>
                  </div>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '78%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full bg-[#9B1E22]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-neutral-900 rounded-2xl p-6 border border-white/5 hover:border-[#9B1E22]/30 transition-colors"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-[#9B1E22]/10 flex items-center justify-center">
                    <Package className="text-[#9B1E22]" size={24} />
                  </div>
                  <div>
                    <div className="text-white font-semibold">In Transit</div>
                    <div className="text-white/50 text-sm">1,847 packages</div>
                  </div>
                </div>
                <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="h-full bg-[#9B1E22]"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-[#9B1E22]/20 to-[#9B1E22]/5 rounded-2xl p-6 border border-[#9B1E22]/30"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#9B1E22] flex items-center justify-center">
                    <Eye className="text-black" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-1">Most Viewed</div>
                    <div className="text-white/70 text-sm">Heavyweight Oversized Tee</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[#9B1E22] font-bold text-xl">5.2k</div>
                    <div className="text-white/50 text-xs">views today</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Always in stock,
              <br />
              <span className="text-[#9B1E22]">always on time</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Real-time inventory tracking and lightning-fast dispatch ensure your order ships within 24 hours. No surprises, no delays.
            </p>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-[#9B1E22] text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(155,30,34,0.4)] transition-shadow duration-300"
            >
              Shop New Drop
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}