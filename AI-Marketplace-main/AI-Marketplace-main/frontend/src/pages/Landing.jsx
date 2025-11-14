import { Link } from "react-router-dom";
import { Sparkles, Search, Zap, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

const Landing = () => {
  const features = [
    {
      icon: Search,
      title: "Discover 100+ AI Models",
      description: "Explore a curated collection of cutting-edge AI tools across all categories"
    },
    {
      icon: Zap,
      title: "Free Alternatives",
      description: "Find free alternatives to paid AI models without compromising quality"
    },
    {
      icon: TrendingUp,
      title: "Stay Updated",
      description: "Access the latest and most powerful AI models in the market"
    },
    {
      icon: Shield,
      title: "Verified Information",
      description: "Reliable links and accurate descriptions for every AI model"
    }
  ];

  const stats = [
    { number: "100+", label: "AI Models" },
    { number: "11", label: "Categories" },
    { number: "50+", label: "Free Tools" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 dark:from-blue-900 dark:via-blue-800 dark:to-blue-700 text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center justify-center p-3 bg-white bg-opacity-20 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="h-8 w-8" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Find Your Perfect
            <span className="block mt-2 text-blue-100">AI Model</span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-blue-50 max-w-2xl mx-auto">
            Discover, compare, and choose from 100+ AI models across all categories. Your gateway to the AI revolution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200 shadow-lg text-lg px-8 py-6 group"
            >
              <Link to="/explore" className="flex items-center">
                Find Your Fit
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 transition-all duration-200 text-lg px-8 py-6"
            >
              <Link to="/team">Meet the Team</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose AI Marketplace?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Your one-stop destination for discovering and exploring the best AI tools available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-white dark:from-blue-950 dark:to-gray-900 border-2 border-blue-100 dark:border-blue-800 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-700 dark:bg-blue-600 text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-700 to-blue-600 dark:from-blue-900 dark:to-blue-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Explore AI Models?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your journey into the world of artificial intelligence today
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 hover:scale-105 transform transition-all duration-200 shadow-lg text-lg px-8 py-6"
          >
            <Link to="/explore" className="flex items-center">
              Browse AI Models
              <Search className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
