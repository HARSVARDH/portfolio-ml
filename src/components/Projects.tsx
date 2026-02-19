import { projects } from "../data/projects"

const gradientColors = [
  "from-blue-600/20 via-purple-600/20 to-cyan-600/20 border-blue-500/30",
  "from-purple-600/20 via-pink-600/20 to-blue-600/20 border-purple-500/30",
  "from-cyan-600/20 via-blue-600/20 to-emerald-600/20 border-cyan-500/30",
]

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className={`bg-gradient-to-br ${gradientColors[index % gradientColors.length]} border rounded-xl p-6 hover:scale-105 transition-all duration-300 shadow-lg backdrop-blur-sm`}
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
            <p className="text-sm text-cyan-400 mb-4 font-medium">{project.stack}</p>

            <ul className="list-disc ml-6 text-gray-300 space-y-2">
              {project.points.map((point, i) => (
                <li key={i} className="text-gray-300">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}