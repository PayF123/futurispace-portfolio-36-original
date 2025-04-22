
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// This is a placeholder page. You may later fetch real article data here.
const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <Link to="/insights" className="text-techpurple-600 text-sm mb-4 inline-block hover:underline">
            &larr; Back to Insights
          </Link>
          <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-8 mt-6">
            <h1 className="text-3xl font-bold mb-4">Insight: {slug && slug.replace(/-/g, ' ')}</h1>
            <div className="text-gray-600">This is a placeholder for the detailed insight article: <strong>{slug}</strong></div>
            <div className="mt-6 text-gray-500 italic">Full content will appear here in the future.</div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsightDetail;
