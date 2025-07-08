import React from "react";
import { Target, Users, Award, Globe, Heart, Leaf } from "lucide-react";

const About = () => {
  const stats = [
    { number: "1972", label: "Founded" },
    { number: "150+", label: "Countries" },
    { number: "75K+", label: "Employees" },
    { number: "1B+", label: "Athletes Served" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We constantly push the boundaries of athletic performance through cutting-edge technology and design.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Authenticity",
      description:
        "We stay true to our roots while embracing change and growth in the athletic world.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from products to customer service.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description:
        "We aim to make a positive impact on communities and athletes worldwide.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Diversity",
      description:
        "We celebrate diversity and inclusion in sports and in our workplace.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "We are committed to protecting the planet for future generations of athletes.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1200)",
          }}
        ></div>

        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Nike</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Bringing inspiration and innovation to every athlete in the world
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded in 1972 by Bill Bowerman and Phil Knight, Nike began as
                Blue Ribbon Sports, a distributor for Japanese shoe maker
                Onitsuka Tiger. The company officially became Nike, Inc. in
                1971, named after the Greek goddess of victory.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From our humble beginnings in Oregon, we've grown to become the
                world's leading supplier of athletic shoes and apparel. Our
                mission remains the same: to bring inspiration and innovation to
                every athlete in the world.
              </p>
              <p className="text-lg text-gray-700">
                Today, Nike continues to push the boundaries of athletic
                performance through cutting-edge design, sustainable practices,
                and a commitment to empowering athletes at every level.
              </p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Nike Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6 text-white">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            To bring inspiration and innovation to every athlete in the world.
            If you have a body, you are an athlete.
          </p>
          <div className="text-6xl font-bold mb-4">JUST DO IT</div>
          <p className="text-lg text-gray-300">
            More than a slogan - it's a call to action for athletes everywhere
          </p>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sustainability"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Sustainability
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We believe in using the power of sport to move the world
                forward. That's why we're committed to protecting the future of
                sport and our planet.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">Carbon neutral by 2030</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    100% renewable energy in owned facilities
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Sustainable materials in 50% of products
                  </span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700">
                    Zero waste to landfill manufacturing
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
