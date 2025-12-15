"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Send } from 'lucide-react';
import { submitContactForm } from '@/app/actions';

export function ContactForm() {
    const [pending, setPending] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    async function handleSubmit(formData: FormData) {
        setPending(true);
        setMessage(null);

        const result = await submitContactForm(formData);

        if (result.success) {
            setMessage({ type: 'success', text: result.message });
            // Optional: Reset form here if needed, but FormData handles inputs
            const form = document.querySelector('form') as HTMLFormElement;
            if (form) form.reset();
        } else {
            setMessage({ type: 'error', text: result.message });
        }

        setPending(false);
    }

    return (
        <form action={handleSubmit} className="space-y-6">
            {message && (
                <div className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                    {message.text}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="Your Name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                        placeholder="your@email.com"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Project Inquiry"
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            <Button variant="primary" className="w-full py-4 text-lg" disabled={pending}>
                {pending ? 'Sending...' : 'Send Message'}
                {!pending && <Send className="ml-2 h-5 w-5" />}
            </Button>
        </form>
    );
}
