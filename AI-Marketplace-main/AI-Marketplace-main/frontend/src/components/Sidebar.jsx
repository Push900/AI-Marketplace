import { useLocation, useNavigate } from "react-router-dom";
import { categories } from "../data/mock";
import { Home, Search, Users, MessageSquare, Code, Image, Music, Video, Brain, Database, Palette, BookOpen, Gamepad2 } from "lucide-react";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Only show sidebar on Explore page
  if (location.pathname !== "/explore") return null;

  const categoryIcons = {
    "All": Home,
    "Text / NLP": MessageSquare,
    "Code": Code,
    "Image": Image,
    "Audio": Music,
    "Video": Video,
    "Multimodal": Brain,
    "Data": Database,
    "Design": Palette,
    "Research": BookOpen,
    "Game": Gamepad2
  };

  const handleCategoryClick = (category) => {
    // Trigger category filter (handled by Explore page)
    const event = new CustomEvent("categoryFilter", { detail: category });
    window.dispatchEvent(event);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 bg-white dark:bg-card shadow-lg border-r border-gray-200 dark:border-border sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto transition-colors">
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center">
            <Search className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400" />
            Categories
          </h2>
          <nav className="space-y-1">
            {categories.map((category) => {
              const Icon = categoryIcons[category] || Search;
              return (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className="w-full flex items-center px-4 py-3 text-left rounded-lg text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:text-blue-700 dark:hover:text-blue-400 transition-all duration-200 group"
                >
                  <Icon className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{category}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
