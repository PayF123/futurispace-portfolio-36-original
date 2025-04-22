
import React from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const articlesData = [
  {
    title: "The Future of AI in Business Transformation",
    slug: "the-future-of-ai-in-business-transformation",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AI",
    date: "June 12, 2023",
    readTime: "5 min read",
    content: (
      <>
        <p>
          Artificial Intelligence (AI) is rapidly transforming industries across the globe. From automating mundane tasks to creating new business models, AI's impact goes beyond simple efficiency. Today, organizations leverage AI to drive decision making, enhance customer experiences, and unlock new revenue streams.
        </p>
        <p className="mt-4">
          The future of business will see AI becoming increasingly embedded in every facet of operations. Personalized marketing, predictive maintenance, intelligent automation, and advanced data analysis are just a snippet of what AI brings to the table. Companies that embrace AI today will gain a significant competitive advantage tomorrow.
        </p>
        <p className="mt-4">
          However, it's vital for leaders to remember that AI is not a one-size-fits-all solution. Successful adoption relies on a clear strategy, team buy-in, strong data governance, and continuous learning.
        </p>
      </>
    ),
  },
  {
    title: "How AR and VR are Changing the Retail Experience",
    slug: "how-ar-and-vr-are-changing-the-retail-experience",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AR/VR",
    date: "May 28, 2023",
    readTime: "7 min read",
    content: (
      <>
        <p>
          Augmented Reality (AR) and Virtual Reality (VR) are revolutionizing retail by bridging the gap between online and in-store shopping. Retailers increasingly use AR to let customers virtually 'try on' products, visualize furniture in their homes, and access rich product information.
        </p>
        <p className="mt-4">
          VR, meanwhile, creates immersive store environments, offering virtual shopping experiences previously unimaginable. From digital showrooms to interactive product demos, AR and VR boost customer engagement and drive sales.
        </p>
        <p className="mt-4">
          As technology matures and becomes more accessible, expect AR and VR to become standard tools in every forward-thinking retailer's arsenal.
        </p>
      </>
    ),
  },
  {
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    slug: "blockchain-beyond-cryptocurrency-real-world-applications",
    image: "https://images.unsplash.com/photo-1642403711604-3908e90960ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
    category: "Blockchain",
    date: "April 15, 2023",
    readTime: "6 min read",
    content: (
      <>
        <p>
          While blockchain's roots lie in cryptocurrency, its real-world applications stretch far beyond. Today, industries use blockchain for supply chain transparency, secure digital identities, tamper-proof medical records, and even to streamline international trade.
        </p>
        <p className="mt-4">
          Blockchain's decentralized nature ensures greater security and trust. Companies that harness blockchain open new doors to innovation—ensuring data integrity, improving processes, and reducing fraud.
        </p>
        <p className="mt-4">
          As adoption spreads, the technology promises to transform how we conduct business in the digital era.
        </p>
      </>
    ),
  },
  {
    title: "The Psychology of User Experience Design",
    slug: "the-psychology-of-user-experience-design",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "UI/UX",
    date: "March 3, 2023",
    readTime: "8 min read",
    content: (
      <>
        <p>
          Great user experience (UX) design is rooted in psychology. Understanding human behavior, motivation, and cognitive patterns equips designers to build products that delight users and drive engagement.
        </p>
        <p className="mt-4">
          Techniques such as color psychology, visual hierarchy, and intuitive navigation tap into the user's subconscious, subtly guiding behavior while meeting their goals. Emotion-driven design leads to memorable, positive interactions.
        </p>
        <p className="mt-4">
          By seamlessly blending psychological principles and creativity, UX designers can turn ordinary interfaces into exceptional digital experiences.
        </p>
      </>
    ),
  },
  {
    title: "The Role of Machine Learning in Predictive Maintenance",
    slug: "the-role-of-machine-learning-in-predictive-maintenance",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AI",
    date: "February 19, 2023",
    readTime: "5 min read",
    content: (
      <>
        <p>
          Predictive maintenance uses machine learning (ML) to identify potential equipment failures before they happen. By analyzing large volumes of sensor data, ML algorithms can detect patterns and anomalies that signal impending issues.
        </p>
        <p className="mt-4">
          This proactive approach helps organizations lower maintenance costs, reduce downtime, and extend equipment life. As ML techniques continue to advance, predictive maintenance systems are becoming even more accurate and reliable.
        </p>
        <p className="mt-4">
          The future will see ML-driven insights empowering companies to shift from reactive repairs to truly predictive strategies.
        </p>
      </>
    ),
  },
  {
    title: "Creating Immersive Virtual Training Environments",
    slug: "creating-immersive-virtual-training-environments",
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    category: "AR/VR",
    date: "January 7, 2023",
    readTime: "6 min read",
    content: (
      <>
        <p>
          Virtual Reality (VR) training is transforming the way organizations instruct and upskill employees. Immersive environments allow for hands-on practice in scenarios that are too costly, dangerous, or impractical in the real world.
        </p>
        <p className="mt-4">
          From healthcare and manufacturing to customer service, VR training improves retention, engagement, and confidence. Organizations are investing in VR to accelerate learning and make training more efficient.
        </p>
        <p className="mt-4">
          Expect the scope and quality of virtual training programs to rapidly expand as technology matures and adoption grows.
        </p>
      </>
    ),
  },
];

const InsightDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articlesData.find((a) => a.slug === slug);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16 bg-gray-50 animate-fade-in">
        <div className="container mx-auto px-4 md:px-6">
          <Link
            to="/insights"
            className="text-techpurple-600 text-sm mb-4 inline-block hover:underline"
          >
            &larr; Back to Insights
          </Link>
          <div className="max-w-3xl mx-auto bg-white shadow rounded-xl p-8 mt-6 animate-fade-in">
            {article ? (
              <>
                <img
                  src={article.image}
                  alt={article.title}
                  className="rounded-lg w-full mb-6 max-h-80 object-cover"
                />
                <div className="flex items-center mb-3">
                  <span className="text-xs font-semibold px-2 py-1 rounded-full bg-techpurple-100 text-techpurple-800">
                    {article.category}
                  </span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
                <div className="prose prose-lg text-gray-700 max-w-none">
                  {article.content}
                </div>
              </>
            ) : (
              <div>
                <h1 className="text-2xl font-bold mb-4">Insight Not Found</h1>
                <p className="text-gray-600 mb-2">
                  We couldn't find the article you're looking for.
                </p>
                <Link
                  to="/insights"
                  className="text-techpurple-600 font-medium hover:underline"
                >
                  Browse Insights
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsightDetail;
