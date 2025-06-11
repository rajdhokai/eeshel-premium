import React, { useState } from 'react';
import { ArrowLeft, Leaf, Users, Package, Sparkles, Coffee, Utensils } from 'lucide-react';

type Page = 'home' | 'matcha' | 'service';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-emerald-900">eeshel</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-emerald-900 mb-6 leading-tight">
            Elevate Your <span className="text-emerald-600">Wellness</span> Journey
          </h2>
          <p className="text-xl text-emerald-700 mb-12 leading-relaxed max-w-2xl mx-auto">
            Discover premium matcha and personalized wellness services crafted to transform your daily rituals into moments of pure mindfulness.
          </p>
          
          {/* Action Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div 
              onClick={() => setCurrentPage('matcha')}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors">
                <Coffee className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Eeshel Matcha</h3>
              <p className="text-emerald-700 leading-relaxed">
                Premium ceremonial grade matcha and traditional accessories for the ultimate tea experience.
              </p>
              <div className="mt-6 text-emerald-600 font-semibold group-hover:text-emerald-700 transition-colors">
                Explore Products →
              </div>
            </div>

            <div 
              onClick={() => setCurrentPage('service')}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                <Users className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-900 mb-4">Eeshel Service</h3>
              <p className="text-emerald-700 leading-relaxed">
                Personalized wellness coaching and consultation services tailored to your unique lifestyle.
              </p>
              <div className="mt-6 text-amber-600 font-semibold group-hover:text-amber-700 transition-colors">
                View Services →
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const MatchaPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-green-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-2 text-emerald-700 hover:text-emerald-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-emerald-900">eeshel</h1>
          </div>
        </div>
      </header>

      {/* Matcha Products */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Premium Matcha Collection</h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Carefully sourced ceremonial grade matcha and traditional accessories for the perfect tea ceremony.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Ceremonial Matcha */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 bg-gradient-to-br from-emerald-200 to-emerald-300 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/5946623/pexels-photo-5946623.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Ceremonial Matcha" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Ceremonial Grade Matcha</h3>
              <p className="text-emerald-700 mb-4">Premium stone-ground matcha from Uji, Japan. Perfect for traditional tea ceremonies and daily mindfulness.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-600">$48</span>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Daily Matcha */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/5947082/pexels-photo-5947082.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Daily Matcha" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Daily Blend Matcha</h3>
              <p className="text-emerald-700 mb-4">Smooth, versatile matcha perfect for lattes, smoothies, and everyday enjoyment. Great for beginners.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-600">$28</span>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Bamboo Whisk */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-300 flex items-center justify-center">
              <img 
                src="https://images.pexels.com/photos/6120213/pexels-photo-6120213.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Bamboo Whisk" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-emerald-900 mb-2">Handcrafted Bamboo Whisk</h3>
              <p className="text-emerald-700 mb-4">Traditional chasen whisk made from high-quality bamboo. Essential for creating the perfect matcha foam.</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-emerald-600">$35</span>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const ServicePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Header */}
      <header className="container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => setCurrentPage('home')}
            className="flex items-center space-x-2 text-amber-700 hover:text-amber-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-emerald-900">eeshel</h1>
          </div>
        </div>
      </header>

      {/* Services */}
      <section className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-900 mb-4">Wellness Services</h2>
          <p className="text-xl text-emerald-700 max-w-2xl mx-auto">
            Personalized coaching and consultation services designed to support your wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {/* Individual Services */}
          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Personal Coaching</h3>
            <p className="text-emerald-700 mb-4 text-sm leading-relaxed">One-on-one wellness coaching tailored to your goals and lifestyle.</p>
            <div className="text-2xl font-bold text-blue-600 mb-4">$120</div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Book Session
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Nutrition Planning</h3>
            <p className="text-emerald-700 mb-4 text-sm leading-relaxed">Custom meal plans and nutritional guidance for optimal health.</p>
            <div className="text-2xl font-bold text-green-600 mb-4">$85</div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
              Get Started
            </button>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-emerald-900 mb-3">Mindfulness Training</h3>
            <p className="text-emerald-700 mb-4 text-sm leading-relaxed">Learn meditation and mindfulness practices for daily stress relief.</p>
            <div className="text-2xl font-bold text-purple-600 mb-4">$95</div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
              Start Journey
            </button>
          </div>

          {/* Bundled Package */}
          <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-white relative overflow-hidden">
            <div className="absolute top-2 right-2 bg-amber-400 text-emerald-900 px-3 py-1 rounded-full text-xs font-bold">
              BEST VALUE
            </div>
            <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-4">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">Complete Wellness</h3>
            <p className="mb-4 text-sm leading-relaxed opacity-90">All three services bundled together for comprehensive wellness support.</p>
            <div className="mb-2">
              <span className="text-sm opacity-75 line-through">$300</span>
              <div className="text-2xl font-bold">$225</div>
              <span className="text-xs opacity-75">Save $75</span>
            </div>
            <button className="w-full bg-white text-emerald-700 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Choose Package
            </button>
          </div>
        </div>
      </section>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'matcha':
        return <MatchaPage />;
      case 'service':
        return <ServicePage />;
      default:
        return <HomePage />;
    }
  };

  return renderPage();
}

export default App;