import { Heart, Code, Github, Linkedin, Mail, Globe, MapPin, ExternalLink, PhoneIcon } from "lucide-react";

const DeveloperPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-500 via-red-500 to-pink-600 text-white pt-20 pb-12">
        <div className="container mx-auto px-4 text-center">
          <Code className="h-16 w-16 mx-auto mb-6 animate-bounce" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Meet <span className="text-pink-100">Aakash Jaiswal</span>
          </h1>
          <p className="text-xl text-pink-100 max-w-2xl mx-auto">
            Full Stack Developer crafting beautiful, interactive web experiences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Profile Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 mb-12 overflow-hidden">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar */}
              <div className="w-40 h-40 rounded-2xl bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                <span className="text-6xl font-bold text-white">AJ</span>
              </div>

              {/* Info */}
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-2 text-gray-900">Aakash Jaiswal</h2>
                <p className="text-2xl text-pink-600 font-semibold mb-4">Full Stack Developer</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  4+ years of experience building scalable, high-performance web applications using JavaScript and TypeScript.
                  Specialized in modern frontends with React.js, Next.js, and Angular, plus robust backend systems with Node.js and NestJS.
                </p>

                {/* Contact Info */}
                <div className="space-y-2 mb-6">
                  <a href="tel:+919580974395" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
                    <PhoneIcon className="h-4 w-4" />
                    +91 9580974395
                  </a>
                  <a href="mailto:aakash123564@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
                    <Mail className="h-4 w-4" />
                    aakash123564@gmail.com
                  </a>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-4 w-4" />
                    India 🇮🇳
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-2">
                  <a
                    href="https://github.com/Aakash-Ja"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 rounded-full transition"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aakash-jaiswal-1982b6198/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 rounded-full transition"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href="https://x.com/aakash123564"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-pink-100 text-gray-700 hover:text-pink-600 rounded-full transition"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Twitter
                  </a>
                  <a
                    href="https://aakash-ja.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-pink-100 text-pink-600 hover:bg-pink-200 rounded-full transition font-semibold"
                  >
                    <Globe className="h-4 w-4" />
                    Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-red-600">Skills & Technologies</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Frontend", skills: ["React", "Next.js", "Angular", "TypeScript", "Tailwind CSS"] },
                { title: "Backend", skills: ["Node.js", "Express.js", "NestJS", "REST APIs", "Microservices"] },
                { title: "Database", skills: ["MongoDB", "MySQL", "Firebase", "Redis"] },
                { title: "DevOps", skills: ["Docker", "AWS", "GitHub Actions", "CI/CD", "Git"] }
              ].map((category) => (
                <div key={category.title} className="bg-white rounded-lg shadow p-6">
                  <h4 className="font-semibold text-pink-600 mb-3 text-lg">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Experience</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-pink-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">Software Developer</h4>
                <p className="text-pink-600 font-medium mb-2">Cyber Infrastructure (P) Ltd</p>
                <p className="text-gray-600">Building scalable web applications and leading frontend development</p>
              </div>
              <div className="bg-white rounded-lg shadow p-6 border-l-4 border-red-500">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">Software Developer Trainee</h4>
                <p className="text-pink-600 font-medium mb-2">Cyber Infrastructure (P) Ltd</p>
                <p className="text-gray-600">Jan 2022 – Aug 2022 | Learned industry best practices</p>
              </div>
            </div>
          </div>

          {/* About Valentine Wish */}
          <div className="bg-gradient-to-r from-pink-50 to-red-50 rounded-lg p-8 border border-pink-200">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">About Valentine Wish</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Valentine Wish is a beautiful, interactive web application built to celebrate love and create unforgettable moments.
              It showcases modern web development capabilities including interactive greeting cards, love story features, and beautiful animations.
            </p>
            <ul className="grid md:grid-cols-2 gap-3 text-gray-700 mb-6">
              {[
                "React & TypeScript",
                "Responsive Design",
                "Beautiful Animations",
                "Interactive Features",
                "Dark & Light Modes",
                "SEO Optimized"
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-pink-600 fill-pink-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href="https://aakash-ja.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-full hover:shadow-lg transition"
            >
              <Globe className="h-4 w-4" />
              Visit Full Portfolio
            </a>
          </div>

          {/* Footer */}
          <div className="text-center mt-16 pt-8 border-t border-gray-200">
            <p className="text-gray-600 mb-4">
              © 2026 <span className="font-semibold text-gray-900">Aakash Jaiswal</span>. All rights reserved.
            </p>
            <p className="text-gray-500">
              Made with <Heart className="h-4 w-4 text-pink-600 fill-pink-600 inline mx-1" /> for Valentine Wish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;
