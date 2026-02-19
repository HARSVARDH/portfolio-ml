export default function About() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        About Me
      </h2>
      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-4xl">
        <p className="text-gray-300 text-lg leading-relaxed">
          I am a <span className="text-cyan-400 font-semibold">Computer Science graduate</span> from George Mason University specializing in
          building end-to-end machine learning systems. I design <span className="text-purple-400 font-semibold">scalable ML pipelines</span>,
          deploy <span className="text-blue-400 font-semibold">FastAPI inference services</span>, containerize with Docker, and monitor
          production models using <span className="text-emerald-400 font-semibold">Prometheus and Grafana</span>.
        </p>
      </div>
    </section>
  )
}