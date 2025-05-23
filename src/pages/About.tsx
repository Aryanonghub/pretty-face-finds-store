
import { Heart, Award, Users, Sparkles, ArrowRight, Smile, Code, Palette, Star, Zap, Coffee } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We believe beauty comes from within and our products help you express your unique self.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every product is carefully tested and crafted with the finest ingredients for exceptional results.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'We listen to our customers and create products that meet your real beauty needs.'
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Constantly evolving with the latest beauty trends and breakthrough formulations.'
    }
  ];

  const team = [
    {
      name: 'Saurav Raj',
      role: 'Founder & CEO',
      emoji: '😎',
      description: 'Visionary leader with a passion for beauty innovation.'
    },
    {
      name: 'Rakshit Sharma',
      role: 'CTO',
      emoji: '🧠',
      description: 'Tech genius behind our digital beauty experience.'
    },
    {
      name: 'Riya Singh',
      role: 'Marketing Director',
      emoji: '✨',
      description: 'Creative strategist driving our brand growth.'
    },
    {
      name: 'Rohan Sahu',
      role: 'Product Development',
      emoji: '🔬',
      description: 'Expert formulator creating our signature products.'
    },
    {
      name: 'Sachin Bhati',
      role: 'Operations Manager',
      emoji: '📊',
      description: 'Ensuring everything runs smoothly behind the scenes.'
    },
    {
      name: 'Saurab Singh',
      role: 'Creative Director',
      emoji: '🎨',
      description: 'Artistic mind shaping our visual identity.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 bg-clip-text text-transparent">
                Our Beauty
              </span>
              <br />
              <span className="text-gray-800">Story</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Founded in 2020 with a simple mission: to create premium beauty products that celebrate 
              your natural beauty and empower you to feel confident every day.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
                Beauty That Empowers
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                BeautyBloom was born from a simple belief: everyone deserves to feel beautiful 
                in their own skin. Our founder, Saurav Raj, started this journey after years 
                as a professional makeup artist, witnessing how the right products could transform 
                not just appearance, but confidence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're committed to creating products that are not only effective but also 
                ethically sourced, cruelty-free, and environmentally conscious. Every formula 
                is carefully crafted in small batches to ensure the highest quality.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">50K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">4.9★</div>
                  <div className="text-gray-600">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=700&fit=crop"
                alt="Beauty products workspace"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Made with Love</div>
                    <div className="text-sm text-gray-600">Since 2020</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at BeautyBloom
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind BeautyBloom's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="relative mb-6">
                  <Avatar className="w-24 h-24 mx-auto bg-gradient-to-r from-pink-200 to-rose-200">
                    <AvatarFallback className="text-4xl">{member.emoji}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-pink-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-500 to-rose-500">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Join Our Beauty Journey
            </h2>
            <p className="text-pink-100 text-lg mb-8">
              Discover products that celebrate your unique beauty and boost your confidence
            </p>
            <a
              href="/products"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-lg group"
            >
              Explore Our Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
