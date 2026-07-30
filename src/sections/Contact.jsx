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
        {/* Email Card */}
        <div className="card-glow shadow-lg p-6 transform transition-all duration-500 hover:scale-105 rounded-xl bg-gradient-to-br from-black-200/30 to-gray-900/20 border border-gray-500/30 backdrop-blur-md hover:shadow-2xl hover:shadow-gray-600/50 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Email</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Whether you have inquiries, want to collaborate on a project, or just have a question, feel free to get in touch!
          </p>

          <div className="bg-black-300/50 rounded-lg p-3 mb-4 border border-gray-600/30">
            <p className="text-lg font-mono text-gray-200">{email}</p>
          </div>
          
          <button
            onClick={handleCopy}
            className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white py-3 px-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg font-medium"
          >
            {copied ? 'Email Copied!' : 'Copy Email'}
          </button>
        </div>

        {/* Social Media Card */}
        <div className="card-glow shadow-lg p-6 transform transition-all duration-500 hover:scale-105 rounded-xl bg-gradient-to-br from-black-200/30 to-gray-900/20 border border-gray-500/30 backdrop-blur-md hover:shadow-2xl hover:shadow-gray-600/50 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Connect on Social Media</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Prefer to reach out on social media? I'm available on these platforms:
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/Yassine-Kraiem"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:shadow-lg bg-gray-800/60 hover:bg-gray-700/80 p-3 rounded-lg border border-gray-600/40 hover:border-gray-500/60"
            >
              <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/kraiemyassine/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:shadow-lg bg-gray-800/60 hover:bg-gray-700/80 p-3 rounded-lg border border-gray-600/40 hover:border-gray-500/60"
            >
              <img src="/assets/linkedIn.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.instagram.com/kraiemyassin/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-300 hover:scale-110 hover:shadow-lg bg-gray-800/60 hover:bg-gray-700/80 p-3 rounded-lg border border-gray-600/40 hover:border-gray-500/60"
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
