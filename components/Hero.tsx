import { motion } from 'framer-motion';
import { WaterRipple } from './WaterRipple';
import { Button } from './ui/button';
import WaterRippleEffect from "@/components/ui/water-ripple-effect";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      {/* <div className="absolute inset-0 z-0">
        <img
          src="/hero-image.jpg"
          alt="Urban Cravin Hero"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      </div> */}

      <div className="absolute inset-0 z-10">
        <WaterRippleEffect
          imageSrc='/hero-image.jpg'
          fitToContainer
          className='w-full h-full'
          containerClassName='w-full h-full'
          scale={1.2}
        />
      </div>

      {/* Water Ripple Effect */}
      {/* <WaterRipple
        image="/hero-image.jpg"
        hoverEffectEnabled={true}
        hoverRippleRadius={3}
        clickToRipple={true}
        clickRippleRadius={8}
        clickRippleStrength={512}
        damping={5}
        frameRate={30}
        className="absolute inset-0 z-10"
      /> */}


      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-[#9B1E22] mb-6 tracking-tighter font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {['Streetwear', 'that', 'actually', 'fits'].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-zinc-800 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Oversized tees and vests made for comfort and attitude
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,255,0.5)] transition-all duration-300 px-8 py-6 text-lg font-bold"
            >
              Shop the Drop
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="border-zinc-800/20 hover:border-accent transition-all duration-300 px-8 py-6 text-lg font-bold text-white "
            >
              View Best Sellers
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1.5 h-1.5 bg-accent rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div> */}
    </section>
  );
};