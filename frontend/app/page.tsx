import Link from 'next/link';
import { ArrowRight, MapPin, Zap, Shield, BarChart3, Users, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CivitasIQ
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Intelligent Smart City Management System
            </p>
            <p className="text-lg mb-12 text-primary-200 max-w-3xl mx-auto">
              Unified AI-driven command platform for modern cities. Fuse live sensor data, 
              geospatial feeds, and citizen inputs into a real-time city twin that forecasts 
              demand, flags anomalies, and coordinates response across all urban systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/dashboard" 
                className="btn-primary bg-white text-primary-700 hover:bg-gray-100 flex items-center justify-center gap-2"
              >
                Launch Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="/about" 
                className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-primary-700"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              One Platform, Complete City Control
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From traffic management to utility optimization, CivitasIQ provides 
              comprehensive oversight and intelligent automation for every aspect of urban operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Geospatial Intelligence</h3>
              <p className="text-gray-600">
                Real-time mapping with live sensor data, incident tracking, and 
                predictive analytics for location-based decision making.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-success-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Automation</h3>
              <p className="text-gray-600">
                Intelligent agents that monitor, analyze, and recommend actions 
                across mobility, energy, water, waste, and public safety systems.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-warning-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Public Safety</h3>
              <p className="text-gray-600">
                Incident response coordination, emergency management, and 
                predictive policing with real-time alerts and automated workflows.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-info-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-info-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Analytics & Forecasting</h3>
              <p className="text-gray-600">
                Advanced analytics with demand forecasting, trend analysis, 
                and scenario modeling for data-driven urban planning.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Citizen Engagement</h3>
              <p className="text-gray-600">
                Multi-channel citizen feedback, transparent reporting, and 
                participatory governance tools for inclusive city management.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental monitoring, resource optimization, and 
                sustainability metrics for greener, more efficient cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your City?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the future of urban management with CivitasIQ. 
            Experience the power of AI-driven city operations.
          </p>
          <Link 
            href="/dashboard" 
            className="btn-primary text-lg px-8 py-3"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
