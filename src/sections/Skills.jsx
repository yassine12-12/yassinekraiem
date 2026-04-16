const Skills = () => {
  const skillCategories = [
    {
      title: "Generative AI & LLMs",
      icon: "🧠",
      skills: [
        { name: "LLM Integration", level: 88, color: "from-violet-500 to-purple-600" },
        { name: "Prompt Engineering", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "Google Gemini", level: 85, color: "from-blue-400 to-indigo-500" },
        { name: "Multimodal AI (CLIP)", level: 82, color: "from-pink-500 to-rose-500" }
      ]
    },
    {
      title: "Computer Vision & ML",
      icon: "👁️",
      skills: [
        { name: "YOLOv8", level: 90, color: "from-green-400 to-emerald-500" },
        { name: "OpenCV", level: 88, color: "from-green-500 to-blue-500" },
        { name: "Scikit-learn / XGBoost", level: 92, color: "from-blue-400 to-indigo-500" },
        { name: "TensorFlow / PyTorch", level: 85, color: "from-orange-400 to-red-500" }
      ]
    },
    {
      title: "Data & Backend",
      icon: "📊",
      skills: [
        { name: "Python / FastAPI", level: 95, color: "from-blue-500 to-yellow-500" },
        { name: "Pandas / NumPy", level: 93, color: "from-purple-500 to-pink-500" },
        { name: "Plotly / Dash", level: 88, color: "from-indigo-500 to-purple-600" },
        { name: "Apache Kafka", level: 78, color: "from-gray-500 to-gray-700" }
      ]
    },
    {
      title: "MLOps & Infrastructure",
      icon: "⚙️",
      skills: [
        { name: "Docker", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "PostgreSQL / OPC UA", level: 80, color: "from-blue-600 to-indigo-600" },
        { name: "Git / CI", level: 90, color: "from-orange-500 to-red-600" },
        { name: "React / Node.js", level: 82, color: "from-cyan-400 to-blue-500" }
      ]
    }
  ];

  return (
    <section className="c-space my-20" id="skills">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-neon_gradient mb-4">Technical Skills</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Expertise across AI/ML, data science, and engineering technologies
        </p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div
            key={categoryIndex}
            className="card-glow p-6 rounded-xl bg-gradient-to-br from-black-200/30 to-gray-900/20 border border-gray-500/30 backdrop-blur-md hover:shadow-2xl hover:shadow-cyan-600/30 transition-all duration-500"
          >
            <div className="flex items-center mb-6">
              <span className="text-2xl mr-3">{category.icon}</span>
              <h3 className="text-xl font-bold text-white">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-cyan-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;