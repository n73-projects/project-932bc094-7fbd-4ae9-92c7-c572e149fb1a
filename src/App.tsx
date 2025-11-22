import { Button } from "./components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Input } from "./components/ui/input";
import { BookOpen, FileText, Youtube, Headphones, Video, Zap, Brain, Volume2, Eye } from "lucide-react";
import toast from "react-hot-toast";

function App() {
  const handleEmailSignup = () => {
    toast.success("Thanks for your interest! We'll keep you updated.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Studen</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-blue-100 text-blue-700 hover:bg-blue-200">
            AI-Powered Study Assistant
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Study Smarter with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"> AI</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform any content into personalized study materials. Upload PDFs, videos, audio files, or YouTube links and get instant summaries, flashcards, and audio guides powered by AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="flex gap-2 w-full sm:w-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 min-w-[250px]"
                type="email"
              />
              <Button
                onClick={handleEmailSignup}
                className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
              >
                Get Early Access
              </Button>
            </div>
          </div>
          <div className="flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>Instant Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>Multiple Formats</span>
            </div>
          </div>
        </div>
      </section>

      {/* Supported Formats */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support for Any Content Format
            </h2>
            <p className="text-lg text-gray-600">
              Upload your study materials in any format and let AI do the heavy lifting
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
            {[
              { icon: FileText, label: "PDF Documents", color: "text-red-600" },
              { icon: FileText, label: "DOCX Files", color: "text-blue-600" },
              { icon: Youtube, label: "YouTube Videos", color: "text-red-500" },
              { icon: Video, label: "Video Files", color: "text-purple-600" },
              { icon: Headphones, label: "Audio Files", color: "text-green-600" }
            ].map((format, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <format.icon className={`w-12 h-12 ${format.color} mx-auto mb-3`} />
                <p className="text-sm font-medium text-gray-700">{format.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Study Effectively
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From content analysis to personalized study materials, Studen provides comprehensive AI-powered tools for modern learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Smart Summaries</CardTitle>
                <CardDescription>
                  AI-generated summaries that capture key concepts and important details from any content source.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Interactive Flashcards</CardTitle>
                <CardDescription>
                  Automatically generated flashcards with spaced repetition algorithms to maximize retention.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Volume2 className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Audio Learning</CardTitle>
                <CardDescription>
                  Convert any text content to high-quality audio for learning on-the-go with natural-sounding voices.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Visual Learning</CardTitle>
                <CardDescription>
                  Read summaries and flashcards with customizable text formatting and visual aids.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Youtube className="w-6 h-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">YouTube Integration</CardTitle>
                <CardDescription>
                  Paste any YouTube link and instantly get summaries and study materials from video content.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-xl">Instant Processing</CardTitle>
                <CardDescription>
                  Lightning-fast AI processing that generates study materials in seconds, not minutes.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Studen Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to transform any content into personalized study materials
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Content</h3>
              <p className="text-gray-600">
                Upload PDFs, DOCX files, videos, audio, or paste YouTube links. Our AI supports multiple formats.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI Processing</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your content and extracts key concepts, creating intelligent summaries.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Study & Learn</h3>
              <p className="text-gray-600">
                Get personalized flashcards, summaries, and audio guides. Study visually or listen on-the-go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Revolutionize Your Study Routine?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already studying smarter with AI-powered tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <Input
              placeholder="Enter your email"
              className="flex-1 bg-white"
              type="email"
            />
            <Button
              onClick={handleEmailSignup}
              className="bg-white text-blue-600 hover:bg-gray-100 whitespace-nowrap"
            >
              Get Started Free
            </Button>
          </div>
          <p className="text-blue-200 text-sm mt-4">
            No credit card required • Free tier available • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Studen</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Empowering students worldwide with AI-powered study tools for more effective learning.
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
              © 2024 Studen. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
