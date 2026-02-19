const skills = {
  "ML & NLP": ["Scikit-Learn", "XGBoost", "Random Forest", "NLP", "Feature Engineering"],
  "MLOps & Backend": ["FastAPI", "Docker", "REST APIs", "CI/CD", "Prometheus", "Grafana"],
  "Data Engineering": ["SQL", "Pandas", "ETL Pipelines"],
  "Frontend": ["React", "Streamlit"],
}

const skillColors = [
  "bg-gradient-to-r from-blue-500/20 to-blue-600/20 border-blue-500/50 text-blue-300",
  "bg-gradient-to-r from-purple-500/20 to-purple-600/20 border-purple-500/50 text-purple-300",
  "bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 border-cyan-500/50 text-cyan-300",
  "bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 border-emerald-500/50 text-emerald-300",
]

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-cyan-400">{category}</h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill, index) => {
                const colorIndex = index % skillColors.length
                return (
                  <span 
                    key={skill} 
                    className={`${skillColors[colorIndex]} border px-4 py-2 rounded-lg text-sm font-medium hover:scale-110 transition-transform duration-200`}
                  >
                    {skill}
                  </span>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}