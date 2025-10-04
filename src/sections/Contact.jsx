import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = 'kraiem_y@hotmail.fr'; // Replace with your email address

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <section className="c-space my-20" id="contact">
      <p className="text-white text-2xl font-semibold mb-8">Contact Me</p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 h-full">
        {/* Contact Details */}
        <div className="card-glow shadow-lg p-6 transform transition-all duration-500 hover:scale-105 rounded-xl bg-gradient-to-br from-black-200/30 to-cyan-900/20 border border-cyan-500/30 backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-600/50 flex flex-col items-center text-center pulse-glow">
          <h3 className="text-2xl font-bold text-neon_gradient mb-4">Email</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Whether you have inquiries, want to collaborate on a project, or just have a question, feel free to get in touch!
          </p>

          <p className="text-xl font-semibold text-cyan-300 mb-4">{email}</p>
          <button
            onClick={handleCopy}
            className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-3 px-8 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 font-semibold"
          >
            {copied ? '✅ Email Copied!' : '📧 Copy Email'}
          </button>
        </div>

        {/* Social Media */}
        <div className="card-glow shadow-lg p-6 transform transition-all duration-500 hover:scale-105 rounded-xl bg-gradient-to-br from-black-200/30 to-purple-900/20 border border-purple-500/30 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-600/50 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-neon_gradient mb-4">Connect on Social Media</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Prefer to reach out on social media? I'm available on these platforms:
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yassine12-12"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-gray-400/50 bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-full border border-gray-600 hover:border-gray-400"
            >
              <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/kraiemyassine/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-blue-400/50 bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-full border border-blue-500 hover:border-blue-300"
            >
              <img src="/assets/linkedIn.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/kraiemyassin/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-pink-400/50 bg-gradient-to-br from-pink-600 to-purple-600 p-4 rounded-full border border-pink-500 hover:border-pink-300"
            >
              <img src="/assets/instagram.svg" alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
