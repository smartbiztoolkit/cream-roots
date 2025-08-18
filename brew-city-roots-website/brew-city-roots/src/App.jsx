import { useState } from 'react'
import './App.css'
import brewLogo from './assets/brewLOGOprimary.jpeg'

function App() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    
    setIsLoading(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
      setIsLoading(false)
      setEmail('')
    }, 1000)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with lush green plants */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-green-800 to-emerald-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-20 w-48 h-48 bg-emerald-300 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-500 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/3 w-36 h-36 bg-emerald-400 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Organic shapes overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge> 
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            <path d="M200,300 Q400,100 600,300 T1000,300 L1000,1000 L0,1000 Z" fill="rgba(34,197,94,0.3)" filter="url(#glow)"/>
            <path d="M0,600 Q300,400 600,600 T1000,600 L1000,1000 L0,1000 Z" fill="rgba(16,185,129,0.2)" filter="url(#glow)"/>
          </svg>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-8">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={brewLogo} 
            alt="Brew City Roots Logo" 
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Coming Soon Text */}
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 tracking-wide">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-green-100 font-light max-w-2xl mx-auto leading-relaxed">
            Luxury plant experiences in Milwaukee
          </p>
        </div>

        {/* Glassmorphic Email Signup Form */}
        <div className="w-full max-w-md mb-8 animate-fade-in-up delay-300">
          <div className="glassmorphic-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-green-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent backdrop-blur-sm transition-all duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 px-6 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 text-white font-medium rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Subscribing...
                    </div>
                  ) : (
                    'Get Updates'
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="text-green-200 text-lg mb-2">✓ Thank you!</div>
                <p className="text-green-100 text-sm">We'll keep you updated on our launch.</p>
              </div>
            )}
          </div>
        </div>

        {/* Address */}
        <div className="text-center animate-fade-in-up delay-500">
          <p className="text-green-100 text-lg font-light">
            615 W Historic Mitchell Street, Milwaukee WI
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full opacity-60 animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-16 w-3 h-3 bg-green-300 rounded-full opacity-50 animate-bounce delay-2000"></div>
        <div className="absolute bottom-32 left-20 w-5 h-5 bg-emerald-300 rounded-full opacity-40 animate-bounce delay-500"></div>
      </div>
    </div>
  )
}

export default App
