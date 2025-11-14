import { teamMembers } from "../data/mock";
import { Mail, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The passionate individuals behind AI Marketplace, dedicated to making AI accessible to everyone
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 overflow-hidden"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-400 h-24"></div>
              <CardHeader className="relative pt-0">
                <div className="flex flex-col items-center -mt-12">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-white"
                  />
                  <CardTitle className="text-2xl font-bold text-gray-900 mt-4 text-center">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="flex items-center mt-2 text-center">
                    <Award className="h-4 w-4 mr-1 text-blue-600" />
                    <span className="font-semibold text-blue-600">{member.role}</span>
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="text-center px-6 pb-8">
                <p className="text-gray-700 leading-relaxed">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-blue-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Get in Touch?
            </h2>
            <p className="text-gray-600 mb-6">
              We'd love to hear from you! Share your feedback or ask questions.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
