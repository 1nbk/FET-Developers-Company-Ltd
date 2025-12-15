"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        // Construction (Current)
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
        // Company Logo
        "/FET_LogoActual.png",
        // Oil & Gas
        "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop",
        // General Merchandise / Logistics
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
            {/* Background Slideshow */}
            <div className="absolute inset-0 z-0">
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <div
                            className={`absolute inset-0 bg-cover bg-center ${src === "/FET_LogoActual.png" ? "bg-contain bg-no-repeat bg-white" : "bg-cover"
                                }`}
                            style={{ backgroundImage: `url('${src}')` }}
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-white/60" /> {/* Light overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-background" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6"
                    >
                        Excellence in Development
                    </motion.div>

                    <motion.h1
                        variants={{
                            hidden: { opacity: 0 },
                            show: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.2,
                                    delayChildren: 0.2,
                                },
                            },
                        }}
                        initial="hidden"
                        animate="show"
                        className="text-5xl md:text-7xl font-bold text-secondary leading-tight mb-8 tracking-tight"
                    >
                        <motion.span variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="inline-block">Crafting,</motion.span>{' '}
                        <motion.span variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="text-primary inline-block">Innovation</motion.span> <br />
                        <motion.span variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="inline-block">and</motion.span>{' '}
                        <motion.span variants={{ hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } }} className="inline-block">Solutions.</motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed"
                    >
                        Leading the way in Construction, Oil & Gas, and General Merchandise.
                        We deliver premium quality and sustainable growth across all sectors.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Button variant="primary" href="#sectors" className="group">
                            Explore Our Sectors
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" href="/contact">
                            Contact Us
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-tl-full -z-10" />
        </section>
    );
}
