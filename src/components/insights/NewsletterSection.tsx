
import React from 'react';
import { Mail } from 'lucide-react';

interface Props {
  email: string;
  isSubmitting: boolean;
  isSubscribed: boolean;
  setEmail: (e: string) => void;
  handleSubscribe: (e: React.FormEvent) => void;
}

const NewsletterSection: React.FC<Props> = ({
  email,
  isSubmitting,
  isSubscribed,
  setEmail,
  handleSubscribe,
}) => (
  <section className="py-20">
    <div className="container mx-auto px-4 md:px-6">
      <div className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Technology Trends</h2>
          <p className="text-gray-600">
            Subscribe to our newsletter to receive the latest insights, news, and updates on emerging technologies.
          </p>
        </div>
        {isSubscribed ? (
          <div className="bg-green-50 text-green-800 p-4 rounded-lg text-center">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-1">You'll receive our next newsletter in your inbox.</p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Mail className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                type="email" 
                className="block w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-techpurple-500 focus:border-transparent"
                placeholder="Enter your email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <button 
              type="submit" 
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-techblue-600 text-white hover:bg-techblue-700 transition-all shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>
    </div>
  </section>
);

export default NewsletterSection;
