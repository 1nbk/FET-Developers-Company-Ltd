"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowLeft, Calendar, MapPin, Building, DollarSign } from 'lucide-react';
import Link from 'next/link';

interface ProjectDetailProps {
    project: any; // We'll type this properly later or import from Prisma
}

export default function ProjectDetailView({ project }: ProjectDetailProps) {
    if (!project) return null;

    const gallery = project.gallery ? JSON.parse(project.gallery) : [];

    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative h-[70vh] bg-secondary text-white overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${project.heroImage}')` }}
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Link href="/projects" className="inline-flex items-center text-white/80 hover:text-primary mb-8 transition-colors">
                                <ArrowLeft className="mr-2 w-5 h-5" /> Back to Projects
                            </Link>
                            <span className="block text-primary font-bold tracking-wider uppercase mb-4">{project.category}</span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">{project.title}</h1>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 border-t border-white/20 pt-8">
                                <div>
                                    <span className="block text-gray-400 text-sm mb-1">Client</span>
                                    <span className="text-lg font-semibold flex items-center"><Building className="w-4 h-4 mr-2 text-primary" /> {project.client}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-400 text-sm mb-1">Location</span>
                                    <span className="text-lg font-semibold flex items-center"><MapPin className="w-4 h-4 mr-2 text-primary" /> {project.location}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-400 text-sm mb-1">Duration</span>
                                    <span className="text-lg font-semibold flex items-center"><Calendar className="w-4 h-4 mr-2 text-primary" /> {project.duration}</span>
                                </div>
                                <div>
                                    <span className="block text-gray-400 text-sm mb-1">Value</span>
                                    <span className="text-lg font-semibold flex items-center"><DollarSign className="w-4 h-4 mr-2 text-primary" /> {project.value}</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Documentary Content */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* The Story */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-6 border-l-4 border-primary pl-4">The Story</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            {project.story}
                        </p>
                    </motion.div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-red-50 p-8 rounded-2xl border border-red-100"
                        >
                            <h3 className="text-2xl font-bold text-red-900 mb-4">The Challenge</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {project.challenge}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-green-50 p-8 rounded-2xl border border-green-100"
                        >
                            <h3 className="text-2xl font-bold text-green-900 mb-4">The Solution</h3>
                            <p className="text-gray-700 leading-relaxed">
                                {project.solution}
                            </p>
                        </motion.div>
                    </div>

                    {/* The Impact */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 text-center bg-secondary text-white p-12 rounded-3xl"
                    >
                        <h2 className="text-3xl font-bold mb-6">The Impact</h2>
                        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                            "{project.impact}"
                        </p>
                    </motion.div>

                    {/* Gallery */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-secondary mb-8 text-center">Project Gallery</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            {gallery.map((img: string, index: number) => (
                                <div key={index} className="h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                    <img
                                        src={img}
                                        alt={`Project gallery ${index + 1}`}
                                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-secondary mb-6">Have a Similar Project?</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                        Let's discuss how we can bring your vision to life with the same level of expertise and dedication.
                    </p>
                    <Button variant="primary" href="/contact" className="px-10 py-4 text-lg">
                        Start a Conversation
                    </Button>
                </div>
            </section>
        </div>
    );
}
