import { useState, useEffect, useMemo } from "react";
import { aiModels, categories, pricingOptions } from "../data/mock";
import AICard from "../components/AICard";
import { Search, Filter, X } from "lucide-react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const Explore = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPricing, setSelectedPricing] = useState("All");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Listen to category filter events from Sidebar
  useEffect(() => {
    const handleCategoryFilter = (event) => {
      setSelectedCategory(event.detail);
    };

    window.addEventListener("categoryFilter", handleCategoryFilter);
    return () => {
      window.removeEventListener("categoryFilter", handleCategoryFilter);
    };
  }, []);

  // Filter models
  const filteredModels = useMemo(() => {
    return aiModels.filter((model) => {
      const matchesSearch = 
        model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        model.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === "All" || model.category === selectedCategory;
      const matchesPricing = selectedPricing === "All" || model.pricing === selectedPricing;
      
      return matchesSearch && matchesCategory && matchesPricing;
    });
  }, [searchQuery, selectedCategory, selectedPricing]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSelectedPricing("All");
  };

  const hasActiveFilters = searchQuery || selectedCategory !== "All" || selectedPricing !== "All";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950 py-8 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Explore AI Models
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Discover the perfect AI tool for your needs from our collection of {aiModels.length}+ models
          </p>
        </div>

        {/* Filters Section */}
        <div className="bg-white dark:bg-card rounded-xl shadow-md p-6 mb-8 transition-colors">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search AI models, developers, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-6 w-full border-2 border-gray-200 dark:border-gray-700 focus:border-blue-700 dark:focus:border-blue-500 transition-colors bg-white dark:bg-background"
                />
              </div>
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden lg:block w-48">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="py-6 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-700 dark:focus:border-blue-500 bg-white dark:bg-background">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Pricing Filter */}
            <div className="w-full lg:w-48">
              <Select value={selectedPricing} onValueChange={setSelectedPricing}>
                <SelectTrigger className="py-6 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-700 dark:focus:border-blue-500 bg-white dark:bg-background">
                  <SelectValue placeholder="Pricing" />
                </SelectTrigger>
                <SelectContent>
                  {pricingOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Mobile Category Filter */}
            <div className="lg:hidden w-full">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="py-6 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-700 dark:focus:border-blue-500 bg-white dark:bg-background">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
              <Button
                variant="outline"
                onClick={clearFilters}
                className="border-2 border-gray-200 hover:bg-gray-100 py-6"
              >
                <X className="h-4 w-4 mr-2" />
                Clear
              </Button>
            )}
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategory !== "All" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {selectedCategory}
                  <button
                    onClick={() => setSelectedCategory("All")}
                    className="ml-2 hover:text-blue-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedPricing !== "All" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  {selectedPricing}
                  <button
                    onClick={() => setSelectedPricing("All")}
                    className="ml-2 hover:text-green-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                  Search: "{searchQuery}"
                  <button
                    onClick={() => setSearchQuery("")}
                    className="ml-2 hover:text-purple-600"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 dark:text-gray-400">
            Showing <span className="font-bold text-gray-900 dark:text-white">{filteredModels.length}</span> AI model
            {filteredModels.length !== 1 ? "s" : ""}
          </p>
        </div>

        {/* AI Models Grid */}
        {filteredModels.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModels.map((model, index) => (
              <AICard key={index} model={model} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <Search className="h-8 w-8 text-gray-400 dark:text-gray-500" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No models found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your filters or search query
            </p>
            <Button onClick={clearFilters} variant="outline">
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Explore;
