import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                            <img src="/fet-logo.png" alt="FET Logo" className="h-10 w-auto object-contain brightness-0 invert" />
                            <div className="flex items-center gap-2">
                                <span className="text-3xl font-black text-white">FET</span>
                                <span className="text-primary font-light">Developers</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Crafting innovation and solutions across construction, energy, and commerce. Building a sustainable future together.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Sectors Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">Sectors</h3>
                        <ul className="space-y-4">
                            <li><Link href="/services#construction" className="text-gray-400 hover:text-white transition-colors">Construction & Engineering</Link></li>
                            <li><Link href="/services#oil-gas" className="text-gray-400 hover:text-white transition-colors">Oil & Gas</Link></li>
                            <li><Link href="/services#merchandise" className="text-gray-400 hover:text-white transition-colors">General Merchandise</Link></li>
                            <li><Link href="/consultancy" className="text-gray-400 hover:text-white transition-colors">Consultancy Services</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/projects" className="text-gray-400 hover:text-white transition-colors">Our Projects</Link></li>
                            <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
                            <li><Link href="/news" className="text-gray-400 hover:text-white transition-colors">News & Insights</Link></li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-primary">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                                <span>Accra, Ghana</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                                <div className="flex flex-col gap-1">
                                    <span>+233 25 799 2196</span>
                                    <span>+233 54 062 4388</span>
                                    <span>+233 24 348 1375</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail size={20} className="text-primary flex-shrink-0" />
                                <span>info@fetdevelopers.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} FET Developers Company Ltd. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm text-gray-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
