"use client";

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Project {
    id: string;
    title: string;
    category: string;
    image?: string;
    heroImage?: string;
    description?: string;
    story?: string;
}

export function ProjectGrid({ projects }: { projects: Project[] }) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                    <div className="relative h-64 overflow-hidden">
                        <div
                            className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
                            style={{ backgroundImage: `url('${project.heroImage || project.image}')` }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded-full">
                                {project.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                            {project.description || project.story}
                        </p>
                        <Link href={`/projects/${project.id}`} className="inline-flex items-center text-primary font-medium hover:underline">
                            View Details <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
