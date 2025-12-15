"use client";

import { motion } from 'framer-motion';
import { Calendar, User } from 'lucide-react';
import Link from 'next/link';

interface NewsArticle {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
}

export function NewsList({ articles }: { articles: NewsArticle[] }) {
    return (
        <div className="grid md:grid-cols-3 gap-10">
            {articles.map((article, index) => (
                <motion.article
                    key={article.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col"
                >
                    <div className="h-48 overflow-hidden">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
                            <span className="flex items-center"><Calendar className="w-3 h-3 mr-1" /> {article.date}</span>
                            <span className="flex items-center"><User className="w-3 h-3 mr-1" /> {article.author}</span>
                        </div>
                        <h2 className="text-xl font-bold text-secondary mb-3 hover:text-primary transition-colors cursor-pointer">
                            {article.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-6 flex-1">
                            {article.excerpt}
                        </p>
                        <Link href="#" className="text-primary font-medium hover:underline mt-auto">
                            Read Full Story &rarr;
                        </Link>
                    </div>
                </motion.article>
            ))}
        </div>
    );
}
