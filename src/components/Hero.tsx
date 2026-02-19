import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative">
      <motion.h1
        className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Sri Harshavardhan Perni
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-cyan-400 font-semibold">Machine Learning Engineer</span> focused on production ML systems, MLOps,
        FastAPI inference, Dockerized deployments, and monitoring with
        Prometheus & Grafana.
      </motion.p>

      <motion.div 
        className="mt-6 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <a 
          href="https://github.com/HARSVARDH" 
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/sri-harshavardhan-perni/" 
          className="border-2 border-purple-500 text-purple-400 px-6 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transform hover:scale-105 transition-all duration-300"
        >
          LinkedIn
        </a>
      </motion.div>
    </section>
  )
}