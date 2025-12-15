"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Target, Eye, Award, Leaf, ShieldCheck, Lightbulb } from 'lucide-react';

export default function AboutPage() {
    const values = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-primary" />,
            title: "Integrity",
            description: "We conduct our business with the highest standards of honesty and transparency."
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-primary" />,
            title: "Innovation",
            description: "We constantly seek new and better ways to deliver value to our clients."
        },
        {
            icon: <Award className="w-8 h-8 text-primary" />,
            title: "Excellence",
            description: "We are committed to superior quality in every project we undertake."
        },
        {
            icon: <Leaf className="w-8 h-8 text-primary" />,
            title: "Sustainability",
            description: "We prioritize environmentally responsible practices in all our operations."
        }
    ];

    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-24 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Who We Are</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            FET Developers is a premier multi-sector company dedicated to crafting innovative solutions
                            in Construction, Oil & Gas, and General Merchandise.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-10 rounded-3xl border border-gray-100"
                        >
                            <div className="inline-block p-3 bg-primary/10 rounded-xl mb-6">
                                <Target className="w-10 h-10 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-secondary mb-4">Our Mission</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To provide exceptional services and sustainable solutions that drive growth and
                                improve the quality of life for our communities, while maintaining the highest
                                standards of safety and operational excellence.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-10 rounded-3xl border border-gray-100"
                        >
                            <div className="inline-block p-3 bg-primary/10 rounded-xl mb-6">
                                <Eye className="w-10 h-10 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold text-secondary mb-4">Our Vision</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                To be the leading partner of choice in the development and energy sectors,
                                recognized globally for our innovation, reliability, and commitment to
                                sustainable progress.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-secondary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            The principles that guide our decisions and define our culture.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center p-6 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* History / Story */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-8">Our Journey</h2>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p className="mb-6">
                            Founded with a vision to bridge the gap between quality construction and sustainable energy solutions,
                            FET Developers has grown from a specialized consultancy into a multi-faceted powerhouse.
                        </p>
                        <p className="mb-6">
                            Over the years, we have successfully delivered complex projects across challenging environments,
                            earning a reputation for reliability and technical expertise. Our expansion into General Merchandise
                            was a natural evolution, leveraging our robust logistics network to serve a broader range of client needs.
                        </p>
                        <p>
                            Today, we stand proud of our legacy and excited for the future, continuing to build, power, and supply
                            the world around us.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-6">Join Us in Building the Future</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Whether you are looking for a partner for your next big project or want to learn more about our work,
                        we would love to hear from you.
                    </p>
                    <Button variant="primary" href="/#contact" className="px-10 py-4 text-lg">
                        Contact Us Today
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </section>
        </div>
    );
}
