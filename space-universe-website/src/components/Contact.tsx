import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="relative py-20 px-6 bg-cosmic-gradient overflow-hidden">
      {/* Animated Stars */}
      <div className="absolute inset-0 animate-stars-slow"></div>
      <div className="absolute inset-0 animate-stars-fast opacity-30"></div>
      
      {/* Nebula Effects */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-nebula-purple/20 rounded-full blur-3xl animate-nebula"></div>
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-nebula-blue/20 rounded-full blur-3xl animate-nebula-delayed"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 text-glow">
            <span className="gradient-text-gold">Get in Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about space? We'd love to hear from you
          </p>
        </div>
        
        <div className="glass-dark p-8 md:p-12 rounded-3xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold text-lg hover:scale-[1.02] transition-transform duration-300 hover:shadow-glow-purple"
            >
              Send Message
            </button>
          </form>
        </div>
        
        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="text-white font-semibold mb-2">Email</h3>
            <p className="text-gray-400">hello@spaceuniverse.com</p>
          </div>
          
          <div className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="text-white font-semibold mb-2">Location</h3>
            <p className="text-gray-400">Stellar City, Space</p>
          </div>
          
          <div className="glass p-6 rounded-2xl text-center">
            <div className="text-3xl mb-3">🌐</div>
            <h3 className="text-white font-semibold mb-2">Social</h3>
            <p className="text-gray-400">@spaceuniverse</p>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent"></div>
    </section>
  )
}

export default Contact
