'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: 'Finally found oversized tees that actually fit right',
    body: 'The fabric quality is insane. 280 GSM feels premium and the fit is exactly what I wanted - boxy but not sloppy.',
    name: 'Arjun M.',
    role: 'Mumbai',
  },
  {
    id: 2,
    quote: 'Best streetwear purchase this year',
    body: 'Pre-shrunk is a game changer. No more worrying about sizing after wash. The drop shoulder vest is fire.',
    name: 'Priya K.',
    role: 'Bangalore',
  },
  {
    id: 3,
    quote: 'Quality over hype, every time',
    body: 'Urban Cravin delivers on the promise. Fast shipping, great packaging, and the tee feels expensive.',
    name: 'Rohan S.',
    role: 'Delhi',
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-black">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What they say</h2>
          <p className="text-gray-400 text-lg">Real feedback from real customers</p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Cards Stack */}
          <div className="relative h-96 flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
              const isActive = index === activeIndex;
              const offset = index - activeIndex;

              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    scale: isActive ? 1 : 0.85,
                    x: offset * 30,
                    y: Math.abs(offset) * 20,
                    rotate: offset * 3,
                    zIndex: testimonials.length - Math.abs(offset),
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute w-full max-w-2xl bg-[#141414] p-8 md:p-12 rounded-lg border border-gray-800"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#9B1E22] text-[#9B1E22]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{testimonial.quote}</h3>

                  {/* Body */}
                  <p className="text-gray-400 text-lg mb-6">{testimonial.body}</p>

                  {/* Author */}
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#9B1E22] ${
                  index === activeIndex ? 'bg-[#9B1E22] w-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
