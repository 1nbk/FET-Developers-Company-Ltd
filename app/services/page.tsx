"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, HardHat, Droplet, Truck } from 'lucide-react';

export default function ServicesPage() {
    const sectors = [
        {
            id: 'construction',
            title: 'Construction',
            icon: <HardHat className="w-12 h-12 text-primary" />,
            description: 'We deliver world-class construction services, ranging from residential developments to complex industrial infrastructure.',
            details: [
                'Civil Engineering & Infrastructure',
                'Residential & Commercial Development',
                'Project Management & Consultancy',
                'Sustainable Building Practices'
            ],
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'oil-gas',
            title: 'Oil & Gas',
            icon: <Droplet className="w-12 h-12 text-primary" />,
            description: 'Our Oil & Gas division provides critical support services, maintenance, and operational excellence to the energy sector.',
            details: [
                'Upstream & Downstream Support',
                'Pipeline Maintenance & Inspection',
                'Equipment Procurement & Leasing',
                'Safety & Environmental Compliance'
            ],
            image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 'merchandise',
            title: 'General Merchandise',
            icon: <Truck className="w-12 h-12 text-primary" />,
            description: 'We streamline supply chains with our robust logistics and general merchandise procurement services.',
            details: [
                'Global Procurement & Sourcing',
                'Logistics & Supply Chain Management',
                'Import/Export Services',
                'Warehousing & Distribution'
            ],
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Expertise</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Delivering excellence across Construction, Energy, and Logistics.
                            We are committed to innovation and sustainable growth in every project we undertake.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Sectors Detail */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
                    {sectors.map((sector, index) => (
                        <motion.div
                            key={sector.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 items-center`}
                        >
                            {/* Content */}
                            <div className="flex-1 space-y-6">
                                <div className="inline-block p-3 bg-primary/10 rounded-xl mb-2">
                                    {sector.icon}
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold text-secondary">{sector.title}</h2>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    {sector.description}
                                </p>
                                <ul className="space-y-3 pt-4">
                                    {sector.details.map((detail, i) => (
                                        <li key={i} className="flex items-center text-gray-700 font-medium">
                                            <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Image */}
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                    <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                    <img
                                        src={sector.image}
                                        alt={sector.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-6">Ready to Start Your Project?</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Whether it's a complex construction build, energy support, or logistics management,
                        FET Developers has the expertise to deliver.
                    </p>
                    <Button variant="primary" href="/#contact" className="px-10 py-4 text-lg">
                        Partner With Us
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
