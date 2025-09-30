'use client';

import { useState } from 'react';
import USPBar from '@/components/USPBar';
import Navigation from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import FeaturedCollection from '@/components/FeaturedCollection';
import NewArrivals from '@/components/NewArrivals';
// import Lookbook from '@/components/Lookbook';
import StatsBand from '@/components/StatsBand';
import DropTracker from '@/components/DropTracker';
import FeatureBlock from '@/components/FeatureBlock';
import ShoppingSection from '@/components/ShoppingSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import { CTABanner } from '@/components/BannerCTA';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';

export default function Home() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <USPBar />
      <Navigation />
      <Hero />
      <FeaturedCollection />
      <NewArrivals />
      {/* <Lookbook /> */}
      <StatsBand />
      <DropTracker />
      <FeatureBlock />
      {/* <ShoppingSection /> */}
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </main>
  );
}