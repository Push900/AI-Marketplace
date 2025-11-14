import { useState } from "react";
import { Send, CheckCircle, Mail, User, Briefcase } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { toast } from "../hooks/use-toast";
import { Toaster } from "../components/ui/toaster";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Mock email submission (frontend only for now)
    console.log("Form submitted:", formData);
    
    // Show success message
    setIsSubmitted(true);
    toast({
      title: "Feedback submitted!",
      description: "Thank you for your message. We'll get back to you soon!",
    });
    
    // Reset form after 2 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        role: "",
        message: ""
      });
      setIsSubmitted(false);
    }, 2000);
  };

  const isFormValid = formData.name && formData.email && formData.role && formData.message;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <Toaster />
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or feedback? We'd love to hear from you!
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-gray-100">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <Label htmlFor="name" className="text-gray-700 font-medium mb-2 flex items-center">
                  <User className="h-4 w-4 mr-2 text-blue-600" />
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium mb-2 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-blue-600" />
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Role */}
              <div>
                <Label htmlFor="role" className="text-gray-700 font-medium mb-2 flex items-center">
                  <Briefcase className="h-4 w-4 mr-2 text-blue-600" />
                  Role
                </Label>
                <Input
                  id="role"
                  name="role"
                  type="text"
                  placeholder="e.g., Developer, Researcher, Student"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="mt-1 border-2 border-gray-200 focus:border-blue-500 transition-colors"
                />
              </div>

              {/* Message */}
              <div>
                <Label htmlFor="message" className="text-gray-700 font-medium mb-2 flex items-center">
                  <Send className="h-4 w-4 mr-2 text-blue-600" />
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us what's on your mind..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mt-1 border-2 border-gray-200 focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={!isFormValid}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Message Sent!
              </h3>
              <p className="text-gray-600">
                Thank you for your feedback. We'll get back to you soon!
              </p>
            </div>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Prefer email? Reach us directly at{" "}
            <a
              href="mailto:contact@aimarketplace.com"
              className="text-blue-600 hover:text-blue-700 font-medium underline"
            >
              contact@aimarketplace.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
