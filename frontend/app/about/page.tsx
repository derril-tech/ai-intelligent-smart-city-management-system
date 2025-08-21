import Link from 'next/link';
import { CheckCircle, Shield, Zap, Globe, Users, BarChart3 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About CivitasIQ
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The next generation of intelligent city management, powered by AI and designed for the modern urban landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard" className="btn-primary">
                Try Demo
              </Link>
              <Link href="#features" className="btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Mission</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-xl leading-relaxed mb-6">
                CivitasIQ is built on the belief that cities should be intelligent, responsive, and sustainable. 
                We combine cutting-edge AI technology with comprehensive urban data to create a unified platform 
                that transforms how cities operate, respond, and evolve.
              </p>
              <p className="text-lg leading-relaxed">
                From traffic management to energy optimization, from public safety to environmental monitoring, 
                CivitasIQ provides city officials and operators with the tools they need to make data-driven 
                decisions in real-time, ensuring better outcomes for citizens and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Intelligence</h3>
              <p className="text-gray-600">
                Advanced machine learning algorithms analyze patterns, predict trends, and provide 
                intelligent recommendations for optimal city operations.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-success-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
              <p className="text-gray-600">
                Live data streams from sensors, cameras, and IoT devices provide instant visibility 
                into city operations and conditions.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-warning-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Public Safety</h3>
              <p className="text-gray-600">
                Comprehensive incident management, emergency response coordination, and 
                predictive policing capabilities for enhanced public safety.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-info-100 rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-info-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
              <p className="text-gray-600">
                Deep insights into urban patterns, performance metrics, and optimization 
                opportunities across all city systems.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Citizen Engagement</h3>
              <p className="text-gray-600">
                Multi-channel communication platforms that connect citizens with city services 
                and enable participatory governance.
              </p>
            </div>

            <div className="card">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability Focus</h3>
              <p className="text-gray-600">
                Environmental monitoring, resource optimization, and sustainability metrics 
                to support green city initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Technology Stack</h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Frontend</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Next.js 14 with App Router
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  TypeScript for type safety
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Tailwind CSS for styling
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Mapbox GL JS for mapping
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  React Query for data fetching
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Backend</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  FastAPI with async support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  PostgreSQL with PostGIS
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  Redis for caching & queues
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  LangGraph for AI agents
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                  WebSocket for real-time data
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your City?</h2>
          <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
            Join the future of urban management with CivitasIQ. 
            Experience the power of AI-driven city operations.
          </p>
          <Link href="/dashboard" className="btn-primary bg-white text-primary-700 hover:bg-gray-100">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
