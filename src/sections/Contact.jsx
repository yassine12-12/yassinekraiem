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
        <div className="shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 rounded-lg bg-black-200 border border-black-300 bg-opacity-20 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-600/50 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Email</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Whether you have inquiries, want to collaborate on a project, or just have a question, feel free to get in touch!
          </p>

          <p className="text-xl font-semibold text-gray-100 mb-4">{email}</p>
          <button
            onClick={handleCopy}
            className="bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            {copied ? 'Email Copied!' : 'Copy Email'}
          </button>
        </div>

        {/* Social Media */}
        <div className="shadow-lg p-6 transform transition-transform duration-300 hover:scale-105 rounded-lg bg-black-200 border border-black-300 bg-opacity-20 backdrop-blur-md hover:shadow-2xl hover:shadow-purple-600/50 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold text-gray-100 mb-4">Connect on Social Media</h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            Prefer to reach out on social media? I'm available on these platforms:
          </p>

          <div className="flex space-x-6">
            <a
              href="https://github.com/yassine12-12"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50 bg-gray-700 p-3 rounded-full"
            >
              <img src="/assets/github.svg" alt="GitHub" className="w-6 h-6" />
            </a>
            
            <a
              href="https://www.linkedin.com/in/kraiemyassine/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50 bg-gray-700 p-3 rounded-full"
            >
              <img src="/assets/linkedIn.svg" alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/kraiemyassin/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-600/50 bg-gray-700 p-3 rounded-full"
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
