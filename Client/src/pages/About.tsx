import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  socials: {
    linkedin: string;
    github: string;
    twitter: string;
    [key: string]: string;
  };
}

interface CoreValue {
  icon: string;
  title: string;
  description: string;
  color: string;
}

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  type: "Student" | "Parent" | "Teacher" | "Client"; 
}

const About = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Tanveer",
      role: "Co-Founder, Full-Stack Developer",
      bio: "Passionate about building robust and scalable web applications. My expertise lies in creating seamless user experiences and efficient backend systems.",
      imageUrl: "https://placehold.co/400x400/1F2937/D1D5DB?text=Tanveer",
      socials: {
        linkedin: "https://www.linkedin.com/in/tanveer-example", 
        github: "https://github.com/malik-tanveer",
        twitter: "https://twitter.com/tanveer-example", 
      },
    },
    {
      name: "Maroof",
      role: "Co-Founder, AI & Data Enthusiast",
      bio: "Driven by the potential of data and artificial intelligence to solve complex problems. I focus on integrating intelligent solutions to enhance application functionality.",
      imageUrl: "https://placehold.co/400x400/1F2937/D1D5DB?text=Maroof",
      socials: {
        linkedin: "https://www.linkedin.com/in/maroof-example",
        github: "https://github.com/maroof2424",
        twitter: "https://twitter.com/maroof-example", 
      },
    },
  ];

  // Core values data
  const values: CoreValue[] = [
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "We constantly explore the latest technologies and creative solutions to stay ahead.",
      color: "text-purple-400",
    },
    {
      icon: "fas fa-book-reader",
      title: "Continuous Learning",
      description: "In the fast-paced world of technology, we are committed to continuous learning and skill enhancement.",
      color: "text-teal-400",
    },
    {
      icon: "fas fa-check-circle",
      title: "Quality & Excellence",
      description: "Our unwavering focus is on delivering high-quality code and outstanding performance in every project.",
      color: "text-orange-400",
    },
    {
      icon: "fas fa-users",
      title: "User-Centric",
      description: "The user is at the heart of our design process. We craft solutions with the end-user experience in mind.",
      color: "text-blue-400",
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "Working with Tanveer and Maroof was an incredible experience. Their technical expertise and collaborative spirit made our project a huge success!",
      name: "Aisha Khan",
      title: "Lead Developer, Tech Solutions Inc.",
      type: "Client",
    },
    {
      quote: "They really listened to our needs and delivered a product that exceeded our expectations. Their attention to detail and dedication are commendable.",
      name: "Usman Ali",
      title: "CEO, Innovate Startups",
      type: "Client",
    },
    {
      quote: "I learned so much from their approach to problem-solving. Their passion for technology is truly inspiring!",
      name: "Fatima Zahra",
      title: "Junior Developer Intern",
      type: "Student",
    },
    {
      quote: "Their commitment to educational technology is outstanding. The tools they developed have significantly enhanced our teaching methods.",
      name: "Dr. Aliya Ahmed",
      title: "Head of Computer Science Department",
      type: "Teacher",
    },
    {
      quote: "As a parent, I appreciate how their platform simplified complex concepts for my child, making learning engaging and effective.",
      name: "Sara Khan",
      title: "Parent of a Student",
      type: "Parent",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 to-slate-900 text-slate-100 font-sans antialiased selection:bg-purple-600 selection:text-white">
      <main className="container mx-auto py-16 px-4">
        {/* --- Section 1: Hero --- */}
        <section
          id="about-hero"
          className="text-center py-20 lg:py-32"
          data-aos="zoom-in"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-shadow-glow">
            Who We Are
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto text-slate-300 leading-relaxed font-['Lato']">
            We transform ideas into reality through technology. Our mission is to bridge the gap between data and development.
          </p>
        </section>

        <hr className="border-slate-700 my-12" />

        {/* --- Section 2: Vision & Mission --- */}
        <section id="vision-mission" className="py-16">
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500"
            data-aos="fade-up"
          >
            Our Vision & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision Card */}
            <div
              className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 text-center hover:border-green-500 hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="fas fa-eye text-5xl mb-6 text-green-400"></i>
              <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-slate-400 leading-relaxed">
                To be at the forefront of technological innovation, creating impactful and intelligent solutions that empower businesses and individuals globally.
              </p>
            </div>
            {/* Mission Card */}
            <div
              className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 text-center hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="fas fa-bullseye text-5xl mb-6 text-cyan-400"></i>
              <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                To deliver cutting-edge full-stack development and AI-driven solutions, focusing on quality, user experience, and continuous learning, while fostering a culture of collaboration and excellence.
              </p>
            </div>
          </div>
        </section>

        <hr className="border-slate-700 my-12" />

        {/* --- Section 3: Meet Our Team --- */}
        <section id="team" className="py-16">
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
            data-aos="fade-up"
          >
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {teamMembers.map((member, index) => (
              <div
                key={member.name} // Using name as key, assuming unique names
                className="flex flex-col md:flex-row items-center gap-8 bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 hover:border-teal-500 transition-all duration-300"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                data-aos-delay={index * 200}
              >
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="rounded-full w-48 h-48 object-cover shadow-lg border-4 border-slate-700"
                  />
                </div>
                {/* Content */}
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-xl font-semibold text-teal-400 mb-4">{member.role}</p>
                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    {member.bio}
                  </p>
                  <div className="flex justify-center md:justify-start space-x-6">
                    {/* Dynamically render social media links */}
                    {Object.entries(member.socials).map(([platform, url]) => {
                      let iconClass = "";
                      switch (platform) {
                        case "linkedin":
                          iconClass = "fab fa-linkedin";
                          break;
                        case "github":
                          iconClass = "fab fa-github";
                          break;
                        case "twitter":
                          iconClass = "fab fa-twitter";
                          break;
                        // Add more cases for other social platforms if added to the data
                        default:
                          return null; // Don't render if no icon is defined
                      }
                      return (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer" // Security best practice
                          className="text-slate-400 hover:text-teal-400 transition-colors text-2xl"
                          aria-label={`${member.name}'s ${platform} profile`}
                        >
                          <i className={iconClass}></i>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-slate-700 my-12" />

        {/* --- Section 4: Our Core Values --- */}
        <section id="values" className="py-16">
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500"
            data-aos="fade-up"
          >
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 text-center hover:border-purple-500 hover:-translate-y-2 transition-all duration-300"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <i className={`${value.icon} ${value.color} text-5xl mb-6`}></i>
                <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-slate-700 my-12" />

        {/* --- Section 5: Why Choose Us? --- */}
        <section id="why-choose-us" className="py-16">
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            data-aos="fade-up"
          >
            Why Choose Us?
          </h2>
          <div className="max-w-4xl mx-auto text-center text-slate-300 text-lg leading-relaxed">
            <p className="mb-6" data-aos="fade-up" data-aos-delay="100">
              Choosing the right partners for your projects is crucial. Here's why Tanveer and Maroof stand out:
            </p>
            <ul className="list-disc list-inside space-y-4 text-left mx-auto max-w-2xl">
              <li data-aos="fade-up" data-aos-delay="200">
                <strong className="text-white">Dual Expertise:</strong> We combine strong **full-stack development** skills with deep knowledge in **AI and data**, offering comprehensive and intelligent solutions.
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <strong className="text-white">Collaborative Approach:</strong> We believe in working closely with our clients, ensuring your vision is brought to life with precision and creativity.
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <strong className="text-white">Commitment to Quality:</strong> From clean code to robust architectures, we prioritize delivering high-quality, maintainable, and scalable products.
              </li>
              <li data-aos="fade-up" data-aos-delay="500">
                <strong className="text-white">Innovative Solutions:</strong> We are always on the lookout for the latest trends and technologies to provide you with modern, future-proof solutions.
              </li>
              <li data-aos="fade-up" data-aos-delay="600">
                <strong className="text-white">Client-Centric Focus:</strong> Your success is our success. We are dedicated to understanding your unique needs and delivering tailored solutions.
              </li>
            </ul>
          </div>
        </section>

        <hr className="border-slate-700 my-12" />

        {/* --- Section 6: Testimonials --- */}
        <section id="testimonials" className="py-16">
          <h2
            className="text-4xl lg:text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-500"
            data-aos="fade-up"
          >
            What People Say About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-slate-800 p-8 rounded-2xl shadow-xl border border-slate-700 flex flex-col justify-between hover:border-pink-500 hover:-translate-y-2 transition-all duration-300"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div>
                  <i className="fas fa-quote-left text-4xl text-slate-600 mb-4"></i>
                  <p className="text-slate-300 text-lg leading-relaxed italic mb-6">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-white font-bold text-xl">{testimonial.name}</p>
                  <p className="text-slate-400 text-md">{testimonial.title}</p>
                  <span className={`inline-block mt-2 px-3 py-1 text-sm font-semibold rounded-full ${testimonial.type === "Student" ? "bg-blue-600" : testimonial.type === "Parent" ? "bg-green-600" : testimonial.type === "Teacher" ? "bg-purple-600" : "bg-orange-600"} text-white`}>
                    {testimonial.type}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
};

export default About;
