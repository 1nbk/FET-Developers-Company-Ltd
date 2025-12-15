"use client";

import { motion } from 'framer-motion';
import { HardHat, Droplet, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function Sectors() {
    const sectors = [
        {
            id: 'construction',
            title: 'Construction',
            icon: <HardHat className="w-6 h-6" />,
            description: 'Civil engineering, residential development, and infrastructure projects delivered with precision.',
            link: '/services#construction'
        },
        {
            id: 'oil-gas',
            title: 'Oil & Gas',
            icon: <Droplet className="w-6 h-6" />,
            description: 'Expert maintenance, upstream/downstream support, and operational excellence for the energy sector.',
            link: '/services#oil-gas'
        },
        {
            id: 'merchandise',
            title: 'General Merchandise',
            icon: <Truck className="w-6 h-6" />,
            description: 'Global procurement, logistics, and supply chain management solutions.',
            link: '/services#merchandise'
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="sectors" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Our Sectors</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Delivering excellence across multiple industries with a commitment to quality and innovation.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {sectors.map((sector) => (
                    <motion.div
                        key={sector.id}
                        variants={itemVariants}
                        whileHover={{ y: -10, transition: { duration: 0.2 } }}
                        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                    >
                        <div className="h-12 w-12 bg-primary/10 rounded-lg mb-6 flex items-center justify-center text-primary">
                            {sector.icon}
                        </div>
                        <h3 className="text-xl font-bold text-secondary mb-3">{sector.title}</h3>
                        <p className="text-gray-600 mb-6">
                            {sector.description}
                        </p>
                        <Link href={sector.link} className="text-primary font-medium hover:underline inline-flex items-center group-hover:text-primary/80 transition-colors">
                            Learn more
                            <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
