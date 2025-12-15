import { getJobOpenings } from '@/app/actions';
import { JobOpeningsList } from '@/components/careers/JobOpeningsList';
import { Button } from '@/components/ui/Button';
import { Briefcase, Users, GraduationCap } from 'lucide-react';

export default async function CareersPage() {
    const openings = await getJobOpenings();

    const benefits = [
        {
            icon: <Briefcase className="w-8 h-8 text-primary" />,
            title: "Professional Growth",
            description: "Continuous learning opportunities and clear career progression paths."
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Inclusive Culture",
            description: "A diverse and supportive work environment where every voice matters."
        },
        {
            icon: <GraduationCap className="w-8 h-8 text-primary" />,
            title: "Training & Development",
            description: "Regular workshops and certifications to keep you at the top of your field."
        }
    ];

    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Join Our Team</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Build your career with a company that is shaping the future of infrastructure and energy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary mb-4">Why Work With Us?</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We invest in our people because we believe that our team is our greatest asset.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {benefits.map((benefit, index) => (
                            <div
                                key={benefit.title}
                                className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-3">{benefit.title}</h3>
                                <p className="text-gray-600">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Openings */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-secondary mb-10 text-center">Current Openings</h2>
                    <JobOpeningsList openings={openings} />
                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">Don't see a role that fits? We are always looking for talent.</p>
                        <Button variant="primary" href="/contact">Contact HR</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
