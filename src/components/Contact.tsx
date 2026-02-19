export default function Contact() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
        Contact
      </h2>

      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 max-w-md">
        <p className="text-gray-300 text-lg mb-6">
          <span className="text-cyan-400 font-semibold">Email:</span>{" "}
          <a href="mailto:sperni@gmu.edu" className="text-white hover:text-cyan-400 transition-colors">
            sperni@gmu.edu
          </a>
        </p>

        <div className="flex gap-4">
          <a 
            href="https://github.com/HARSVARDH" 
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/50"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/sri-harshavardhan-perni/" 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-purple-500/50"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}