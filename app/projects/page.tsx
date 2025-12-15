import { getProjects } from '@/app/actions';
import { ProjectGrid } from '@/components/projects/ProjectGrid';

export default async function ProjectsPage() {
    const projects = await getProjects();

    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2031&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            A showcase of our commitment to excellence, innovation, and sustainable development across all sectors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ProjectGrid projects={projects} />
                </div>
            </section>
        </div>
    );
}
