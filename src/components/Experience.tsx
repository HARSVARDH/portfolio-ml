export default function Experience() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Experience
      </h2>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-cyan-400">AI Engineer — O2Labs</h3>
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            <li>Built <span className="text-emerald-400">XGBoost churn model</span> improving retention decisions</li>
            <li>Automated <span className="text-blue-400">ETL pipelines</span> processing 20GB/day</li>
            <li>Feature selection reduced overfitting and improved generalization</li>
            <li>Deployed ML models using <span className="text-purple-400">FastAPI</span> in production</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">Web Developer — ClearExam</h3>
          <ul className="list-disc ml-6 text-gray-300 space-y-2">
            <li>Built dynamic <span className="text-cyan-400">React-based</span> quiz platform</li>
            <li>Created reusable UI components</li>
            <li>Optimized performance for low-bandwidth users</li>
          </ul>
        </div>
      </div>
    </section>
  )
}