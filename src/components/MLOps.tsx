export default function MLOps() {
  const steps = [
    "Data", "ETL Pipelines", "Feature Engineering", "Model Training",
    "FastAPI Inference", "Docker Containers", "CI/CD Deployment",
    "Prometheus Metrics", "Grafana Dashboards", "Drift Monitoring"
  ]

  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Production ML Stack
      </h2>

      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 overflow-x-auto">
        <div className="flex items-center gap-3 flex-wrap justify-center">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/50 rounded-lg px-4 py-2 text-sm font-medium text-cyan-300 whitespace-nowrap">
                {step}
              </div>
              {index < steps.length - 1 && (
                <span className="mx-2 text-purple-400 text-xl">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}