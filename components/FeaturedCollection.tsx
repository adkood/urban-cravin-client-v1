'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Oversized Essential Tee',
    price: '₹1,299',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=600&q=80',
    badge: 'New',
  },
  {
    id: 2,
    name: 'Vintage Wash Oversized Tee',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=600&q=80',
    badge: 'Limited',
  },
  {
    id: 3,
    name: 'Heavyweight Drop Shoulder Vest',
    price: '₹1,799',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=600&q=80',
    hoverImage: 'https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=600&q=80',
    badge: 'Best Seller',
  },
];

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

export default function FeaturedCollection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<{ [key: number]: string }>({});

  return (
    <section className="py-20 px-4 bg-black" id="new">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Collection</h2>
          <p className="text-gray-400 text-lg">The newest drop, ready to ship</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#141414] rounded-lg overflow-hidden"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 bg-[#9B1E22] text-white px-3 py-1 rounded-full text-xs font-bold">
                  {product.badge}
                </div>
              )}

              {/* Product Image */}
              <div className="relative aspect-square overflow-hidden">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  animate={{ opacity: hoveredId === product.id ? 0 : 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.img
                  src={product.hoverImage}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-[#9B1E22] mb-4">{product.price}</p>

                {/* Size Selection */}
                <div className="mb-4">
                  <p className="text-sm text-gray-400 mb-2">Select Size</p>
                  <div className="flex gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() =>
                          setSelectedSizes((prev) => ({ ...prev, [product.id]: size }))
                        }
                        className={`w-10 h-10 border rounded flex items-center justify-center text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[#9B1E22] ${
                          selectedSizes[product.id] === size
                            ? 'bg-[#9B1E22] text-white border-[#9B1E22]'
                            : 'border-gray-600 hover:border-[#9B1E22]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#9B1E22] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#9B1E22]"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
