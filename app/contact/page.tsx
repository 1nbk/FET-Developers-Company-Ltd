"use client";

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ContactForm } from '@/components/contact/ContactForm';

export default function ContactPage() {
    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1423666639041-f142fcb9631f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Have a project in mind or want to learn more about our services?
                            We are here to help you build the future.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">

                        {/* Contact Information */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div>
                                <h2 className="text-3xl font-bold text-secondary mb-6">Contact Information</h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    Reach out to us directly through any of the following channels.
                                    Our team is ready to assist you with your inquiries.
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                                        <MapPin className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary mb-2">Our Office</h3>
                                        <p className="text-gray-600">
                                            Accra, Ghana
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                                        <Phone className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary mb-2">Phone</h3>
                                        <p className="text-gray-600">
                                            +233 25 799 2196<br />
                                            +233 54 062 4388<br />
                                            +233 24 348 1375
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mr-6">
                                        <Mail className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-secondary mb-2">Email</h3>
                                        <p className="text-gray-600">
                                            info@fetdevelopers.com<br />
                                            projects@fetdevelopers.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                        >
                            <h2 className="text-2xl font-bold text-secondary mb-6">Send us a Message</h2>
                            <ContactForm />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="h-96 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-4 opacity-50" />
                        <p className="text-xl font-medium">Map Location Placeholder</p>
                    </div>
                </div>
                {/* In a real app, you would embed a Google Map iframe here */}
            </section>
        </div>
    );
}
