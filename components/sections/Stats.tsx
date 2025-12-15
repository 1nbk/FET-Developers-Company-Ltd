"use client";

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

function Counter({ value }: { value: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    const numberValue = parseInt(value.replace(/\D/g, ''));
    const suffix = value.replace(/\d/g, '');

    useEffect(() => {
        if (isInView) {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const stepTime = duration / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += numberValue / steps;
                if (current >= numberValue) {
                    setCount(numberValue);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(current));
                }
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [isInView, numberValue]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export function Stats() {
    const stats = [
        { label: 'Years of Experience', value: '15+' },
        { label: 'Projects Completed', value: '200+' },
        { label: 'Satisfied Clients', value: '500+' },
        { label: 'Sectors Covered', value: '4' },
    ];

    return (
        <section className="py-20 bg-secondary text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/10">
                    {stats.map((stat, index) => (
                        <div key={index} className="px-4">
                            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                                <Counter value={stat.value} />
                            </div>
                            <div className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-wider">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
