import { ExternalLink, Tag, DollarSign, Zap } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const AICard = ({ model }) => {
  const { name, developer, url, description, category, pricing, tags, free_alternative } = model;

  const pricingColors = {
    Free: "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
    Freemium: "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700",
    Paid: "bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-700"
  };

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 border-gray-100 dark:border-gray-700 h-full flex flex-col bg-white dark:bg-card">
      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
            {name}
          </CardTitle>
          <Badge className={`${pricingColors[pricing]} border`}>
            {pricing}
          </Badge>
        </div>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
          by {developer}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3">{description}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md text-xs text-gray-700 dark:text-gray-300"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </div>
          ))}
        </div>

        {/* Category Badge */}
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">{category}</span>
        </div>

        {/* Free Alternative */}
        {pricing === "Paid" && free_alternative && (
          <div className="mt-4 p-3 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-start">
              <Zap className="h-4 w-4 text-green-600 dark:text-green-400 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold text-green-800 dark:text-green-300">Free Alternative</p>
                <p className="text-xs text-green-700 dark:text-green-400 mt-1">{free_alternative}</p>
              </div>
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter>
        <Button
          asChild
          className="w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white group-hover:shadow-lg transition-all"
        >
          <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
            Visit Website
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AICard;
