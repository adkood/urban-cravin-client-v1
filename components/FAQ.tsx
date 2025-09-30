'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'Sizing & fit',
    answer: 'Our oversized tees are designed to be boxy and relaxed. We recommend going with your usual size for the perfect oversized look. Check our size chart for detailed measurements.',
  },
  {
    question: 'Washing instructions',
    answer: 'Machine wash cold with like colors. Tumble dry low or hang dry. Do not bleach. All our garments are pre-shrunk and bio-washed for minimal shrinkage.',
  },
  {
    question: 'Shipping & delivery',
    answer: 'We dispatch within 24 hours. Most orders arrive within 2-4 days. Free shipping on orders over ₹999. Track your order with the link sent to your email.',
  },
  {
    question: 'Returns & exchanges',
    answer: '7-day easy returns. Items must be unworn, unwashed, and in original packaging. We offer full refund or exchange. Return shipping is free for defective items.',
  },
  {
    question: 'COD details',
    answer: 'Cash on Delivery is available for all orders. No extra charges. Simply select COD at checkout and pay when your order arrives.',
  },
  {
    question: 'Order tracking',
    answer: 'You will receive a tracking link via email and SMS once your order ships. You can also track your order from your account dashboard.',
  },
  {
    question: 'Fabric quality',
    answer: 'We use premium 250-280 GSM cotton that is heavyweight, breathable, and durable. All fabrics are pre-shrunk and bio-washed for a soft, lived-in feel from day one.',
  },
  {
    question: 'Bulk orders',
    answer: 'For bulk orders or custom designs, please contact us at hello@urbancravin.com. We offer special pricing for orders above 10 pieces.',
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-[#0a0a0a]" id="about">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Questions?</h2>
          <p className="text-gray-400 text-lg">Everything you need to know</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#141414] rounded-lg overflow-hidden border border-gray-800"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#1a1a1a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22] focus:ring-inset"
                aria-expanded={expandedIndex === index}
              >
                <span className="font-bold text-lg pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-6 h-6 text-[#9B1E22] flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
