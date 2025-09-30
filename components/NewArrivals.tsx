'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Urban Oversized Tee',
    price: '₹1,199',
    image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80',
    colors: ['#000000', '#FFFFFF', '#808080'],
    badge: 'New',
  },
  {
    id: 2,
    name: 'Street Essential Vest',
    price: '₹1,599',
    image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400&q=80',
    colors: ['#000000', '#1a365d', '#2d3748'],
    badge: 'Limited',
  },
  {
    id: 3,
    name: 'Boxy Fit Oversized Tee',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=400&q=80',
    colors: ['#FFFFFF', '#f7fafc', '#e2e8f0'],
  },
  {
    id: 4,
    name: 'Premium Drop Shoulder',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80',
    colors: ['#000000', '#2d3748', '#4a5568'],
    badge: 'Back in Stock',
  },
  {
    id: 5,
    name: 'Relaxed Oversized Vest',
    price: '₹1,799',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&q=80',
    colors: ['#000000', '#1a202c'],
  },
  {
    id: 6,
    name: 'Classic Streetwear Tee',
    price: '₹1,149',
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&q=80',
    colors: ['#FFFFFF', '#000000', '#808080'],
    badge: 'New',
  },
];

export default function NewArrivals() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]" id="tees">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">New Arrivals</h2>
          <p className="text-gray-400 text-lg">Fresh drops every week</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="group relative bg-[#141414] rounded-lg overflow-hidden hover:ring-2 hover:ring-[#9B1E22] transition-all"
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 z-10 bg-[#9B1E22] text-white px-2 py-1 rounded text-xs font-bold">
                  {product.badge}
                </div>
              )}

              {/* Wishlist Button */}
              <button
                className="absolute top-3 right-3 z-10 w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#9B1E22] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#9B1E22]"
                aria-label="Add to wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>

              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-bold mb-1 text-sm md:text-base">{product.name}</h3>
                <p className="text-lg font-bold text-[#9B1E22] mb-3">{product.price}</p>

                {/* Color Swatches */}
                <div className="flex gap-2">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      className="w-6 h-6 rounded-full border-2 border-gray-600 hover:border-[#9B1E22] transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22]"
                      style={{ backgroundColor: color }}
                      aria-label={`Color option ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
