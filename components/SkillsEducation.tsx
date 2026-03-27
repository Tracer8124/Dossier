"use client";

import { motion } from "framer-motion";

export default function SkillsEducation() {
  return (
    <section className="relative z-20 bg-[#121212] py-32 px-4 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">
        
        {/* Skills Section */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white"
          >
            Core Skills
          </motion.h2>

          <div className="space-y-6">
            {[
              { name: "Python", prof: "80%" },
              { name: "Model Development", prof: "60%" },
              { name: "ML Frameworks", prof: "60%" },
              { name: "NLP and LLM", prof: "40%" },
              { name: "AWS", prof: "40%" },
              { name: "Git", prof: "40%" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between text-gray-300 font-mono text-sm mb-2">
                  <span>{skill.name}</span>
                  <span>{skill.prof}</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.prof }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl">
            <h4 className="text-white font-semibold mb-4 text-xl">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {['English (Professional)', 'Marathi (Native)', 'Hindi (Professional)', 'Kannada (Basic)', 'German (Basic)'].map((lang, i) => (
                <span key={i} className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-xs font-mono uppercase tracking-wider">{lang}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="flex-1">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-12 tracking-tighter text-white"
          >
            Education
          </motion.h2>

          <div className="space-y-12">
            {[
              {
                year: "2022",
                degree: "M.Tech - Artificial Intelligence And Robotics",
                college: "College Of Engineering Pune (COEP)",
                grade: "7.57 CGPA",
              },
              {
                year: "2020",
                degree: "B.E - Electronic and Telecommunications",
                college: "Walchand Institution of Technology",
                grade: "",
              },
            ].map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-6 border-l-2 border-purple-500/30"
              >
                <div className="absolute -left-[5px] top-2 w-2 h-2 bg-purple-500 rounded-full" />
                <div className="text-purple-400 font-mono text-sm mb-2">{edu.year}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-gray-400 mb-2">{edu.college}</h4>
                {edu.grade && <p className="text-gray-500 font-mono">Score: {edu.grade}</p>}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
