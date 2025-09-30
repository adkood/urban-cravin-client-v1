"use client";

import { motion } from 'framer-motion';
import { Button } from './ui/button';

export const CTABanner = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-dark-panel">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Oversized done right
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Premium cotton, clean silhouettes, zero fuss
          </p>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,255,255,0.5)] transition-all duration-300 px-12 py-6 text-lg font-bold"
          >
            Shop Best Sellers
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
