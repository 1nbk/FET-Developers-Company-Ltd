"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';

interface JobOpening {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
}

export function JobOpeningsList({ openings }: { openings: JobOpening[] }) {
    return (
        <div className="space-y-4">
            {openings.map((job, index) => (
                <motion.div
                    key={job.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col md:flex-row md:items-center justify-between hover:border-primary/50 transition-colors"
                >
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold text-secondary">{job.title}</h3>
                        <div className="text-gray-500 text-sm mt-1 space-x-4">
                            <span>{job.department}</span>
                            <span>•</span>
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.type}</span>
                        </div>
                    </div>
                    <Button variant="outline">Apply Now</Button>
                </motion.div>
            ))}
        </div>
    );
}
