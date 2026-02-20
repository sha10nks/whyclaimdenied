import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Insurance Claim Denial Blog | Expert Guides by State</title>
        <meta name="description" content="Expert guides and real case studies for appealing insurance claim denials in California, Florida, Texas, and New York. Learn your rights and success strategies." />
        <link rel="canonical" href="https://whyclaimdenied.com/blog" />
      </Helmet>

      <Breadcrumbs />

      <article className="max-w-6xl mx-auto px-4 py-8">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Insurance Claim Denial Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert guides, state-specific appeal processes, and real success stories to help you overturn insurance claim denials
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* California */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600 font-bold text-lg">CA</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">California</h2>
            </div>
            <div className="space-y-3">
              <Link to="/blog/california/why-auto-claims-denied" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                Why Auto Claims Get Denied in CA
              </Link>
              <Link to="/blog/california/how-appeal-auto-claim" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                How to Appeal Auto Denial in CA
              </Link>
              <Link to="/blog/california/case-auto-success" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                CA Auto Success Case Study
              </Link>
              <Link to="/blog/california/why-health-claims-denied" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                Why Health Claims Get Denied in CA
              </Link>
              <Link to="/blog/california/how-appeal-health-claim" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                How to Appeal Health Denial in CA
              </Link>
              <Link to="/blog/california/case-health-success" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                CA Health Success Case Study
              </Link>
            </div>
          </div>

          {/* Florida */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-orange-600 font-bold text-lg">FL</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Florida</h2>
            </div>
            <div className="space-y-3">
              <Link to="/blog/florida/why-auto-claims-denied" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                Why Auto Claims Get Denied in FL
              </Link>
              <Link to="/blog/florida/how-appeal-auto-claim" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                How to Appeal Auto Denial in FL
              </Link>
              <Link to="/blog/florida/case-auto-success" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                FL Auto Success Case Study
              </Link>
              <Link to="/blog/florida/why-health-claims-denied" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                Why Health Claims Get Denied in FL
              </Link>
              <Link to="/blog/florida/how-appeal-health-claim" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                How to Appeal Health Denial in FL
              </Link>
              <Link to="/blog/florida/case-health-success" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                FL Health Success Case Study
              </Link>
            </div>
          </div>

          {/* Texas */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-red-600 font-bold text-lg">TX</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">Texas</h2>
            </div>
            <div className="space-y-3">
              <Link to="/blog/texas/why-auto-claims-denied" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                Why Auto Claims Get Denied in TX
              </Link>
              <Link to="/blog/texas/how-appeal-auto-claim" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                How to Appeal Auto Denial in TX
              </Link>
              <Link to="/blog/texas/case-auto-success" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                TX Auto Success Case Study
              </Link>
              <Link to="/blog/texas/why-health-claims-denied" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                Why Health Claims Get Denied in TX
              </Link>
              <Link to="/blog/texas/how-appeal-health-claim" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                How to Appeal Health Denial in TX
              </Link>
              <Link to="/blog/texas/case-health-success" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                TX Health Success Case Study
              </Link>
            </div>
          </div>

          {/* New York */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600 font-bold text-lg">NY</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900">New York</h2>
            </div>
            <div className="space-y-3">
              <Link to="/blog/new-york/why-auto-claims-denied" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                Why Auto Claims Get Denied in NY
              </Link>
              <Link to="/blog/new-york/how-appeal-auto-claim" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                How to Appeal Auto Denial in NY
              </Link>
              <Link to="/blog/new-york/case-auto-success" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                NY Auto Success Case Study
              </Link>
              <Link to="/blog/new-york/why-health-claims-denied" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                Why Health Claims Get Denied in NY
              </Link>
              <Link to="/blog/new-york/how-appeal-health-claim" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                How to Appeal Health Denial in NY
              </Link>
              <Link to="/blog/new-york/case-health-success" className="block text-blue-600 hover:text-blue-800 underline text-sm">
                NY Health Success Case Study
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">What You'll Find in Our Blog</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">State-Specific Guides</h3>
              <p className="text-gray-600 text-sm">Detailed explanations of insurance laws and common denial reasons specific to each state's regulations.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Appeal Processes</h3>
              <p className="text-gray-600 text-sm">Step-by-step instructions for appealing denials, including sample letters and required documentation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">✅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Success Stories</h3>
              <p className="text-gray-600 text-sm">Real case studies showing how others successfully overturned their insurance claim denials.</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Need Help with Your Denial?</h2>
          <p className="text-gray-700 mb-6">
            Browse our comprehensive guides by state or contact us for personalized assistance with your insurance claim denial.
          </p>
          <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Help Now
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Blog;
