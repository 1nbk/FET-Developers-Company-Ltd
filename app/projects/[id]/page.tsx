import { getProject } from '@/app/actions';
import ProjectDetailView from '@/components/projects/ProjectDetailView';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = await getProject(id);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-secondary mb-4">Project Not Found</h1>
                    <Link href="/projects">
                        <Button variant="primary">Return to Projects</Button>
                    </Link>
                </div>
            </div>
        );
    }

    return <ProjectDetailView project={project} />;
}
