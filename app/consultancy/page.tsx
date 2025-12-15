"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { CheckCircle, BarChart, Users, Globe } from 'lucide-react';

export default function ConsultancyPage() {
    const services = [
        {
            icon: <BarChart className="w-8 h-8 text-primary" />,
            title: "Project Feasibility Studies",
            description: "In-depth analysis of technical, economic, and legal factors to determine project viability."
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Technical Advisory",
            description: "Expert guidance on engineering challenges, regulatory compliance, and best practices."
        },
        {
            icon: <Globe className="w-8 h-8 text-primary" />,
            title: "Market Entry Strategy",
            description: "Strategic planning for international firms looking to enter the Nigerian construction and energy markets."
        },
        {
            icon: <CheckCircle className="w-8 h-8 text-primary" />,
            title: "Quality Assurance",
            description: "Rigorous monitoring and evaluation to ensure projects meet international standards."
        }
    ];

    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Consultancy Services</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Leveraging decades of industry experience to provide strategic insights and technical expertise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-6"
                            >
                                <div className="flex-shrink-0 p-3 bg-primary/10 rounded-xl">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-6">Need Expert Advice?</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Our consultants are ready to help you navigate complex challenges and achieve your project goals.
                    </p>
                    <Button variant="primary" href="/contact" className="px-10 py-4 text-lg">
                        Schedule a Consultation
                    </Button>
                </div>
            </section>
        </div>
    );
}
