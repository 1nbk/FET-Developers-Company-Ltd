import { getNewsArticles } from '@/app/actions';
import { NewsList } from '@/components/news/NewsList';

export default async function NewsPage() {
    const articles = await getNewsArticles();

    return (
        <div className="bg-background min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-secondary text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">News & Insights</h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Stay updated with the latest developments, industry trends, and company news from FET Developers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Articles List */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <NewsList articles={articles} />
                </div>
            </section>
        </div>
    );
}
