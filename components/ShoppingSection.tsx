'use client';

import { motion } from 'framer-motion';
import { CreditCard, Smartphone, Wallet, Banknote } from 'lucide-react';

const paymentMethods = [
  { icon: CreditCard, label: 'Cards' },
  { icon: Smartphone, label: 'UPI' },
  { icon: Wallet, label: 'Wallets' },
  { icon: Banknote, label: 'COD' },
];

export default function ShoppingSection() {
  return (
    <section className="py-20 px-4 bg-[#141414]">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Effortless Shopping Everywhere
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Multiple payment options, secure checkout, and hassle-free delivery to your doorstep
          </p>
        </motion.div>

        {/* Payment Methods Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative max-w-md mx-auto mb-12"
        >
          {/* Center Card Stack */}
          <div className="relative h-64 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: -5 }}
              whileInView={{ opacity: 0.6, y: 10, rotate: -8 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute w-48 h-32 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 5 }}
              whileInView={{ opacity: 0.8, y: 5, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute w-48 h-32 bg-gradient-to-br from-gray-600 to-gray-700 rounded-lg shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative w-48 h-32 bg-gradient-to-br from-[#9B1E22] to-[#7f181b] rounded-lg shadow-2xl flex items-center justify-center z-10"
            >
              <CreditCard className="w-12 h-12 text-black" />
            </motion.div>

            {/* Payment Icons Ring */}
            {paymentMethods.map((method, index) => {
              const angle = (index * 360) / paymentMethods.length;
              const radius = 140;
              const x = Math.cos((angle * Math.PI) / 180) * radius;
              const y = Math.sin((angle * Math.PI) / 180) * radius;

              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="absolute w-16 h-16 bg-black rounded-full border-2 border-[#9B1E22] flex items-center justify-center"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <method.icon className="w-6 h-6 text-[#9B1E22]" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Payment Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="flex justify-center gap-6 flex-wrap"
        >
          {paymentMethods.map((method) => (
            <div key={method.label} className="text-gray-400">
              {method.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
