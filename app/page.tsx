import Link from "next/link"
import { ArrowRight, Shield, Users, Vote, Eye, Lock, Globe } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Navbar */}
      <nav className="border-b border-cyan-500/20 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="text-2xl font-bold text-white">ZK Signals</span>
            </div>
            <Link
              href="/create-groups"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
            >
              <span>Launch App</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Anonymous Signals
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Zero Knowledge
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Vote and provide feedback anonymously without revealing your identity. Powered by Semaphore and Self
            protocols for ultimate privacy.
          </p>
          <Link
            href="/create-groups"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-flex items-center space-x-2 shadow-xl hover:shadow-cyan-500/25 hover:scale-105"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-black/40 to-slate-900/40">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Powerful Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Zero Knowledge Proofs</h3>
              <p className="text-gray-400 leading-relaxed">
                Prove your eligibility without revealing personal information using advanced cryptographic protocols.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Group-Based Voting</h3>
              <p className="text-gray-400 leading-relaxed">
                Create and join groups based on verified criteria like age, gender, or nationality for targeted
                feedback.
              </p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">Complete Anonymity</h3>
              <p className="text-gray-400 leading-relaxed">
                Your votes and feedback remain completely anonymous while maintaining verifiable authenticity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">Why Anonymous Signals Matter</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Vote className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Honest Feedback</h3>
                    <p className="text-gray-400 leading-relaxed">
                      People share more honest opinions when they know their identity is protected.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Shield className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Protection from Retaliation</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Whistleblowers and critics can speak up without fear of consequences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Democratic Participation</h3>
                    <p className="text-gray-400 leading-relaxed">
                      Enable true democratic participation in sensitive topics and decisions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🗳️</div>
                <h3 className="text-2xl font-semibold text-white mb-4">Your Voice, Your Privacy</h3>
                <p className="text-gray-400 leading-relaxed">
                  Join thousands of users who are already participating in anonymous governance and feedback systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyan-500/20 py-12 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-cyan-400" />
              <span className="text-xl font-bold text-white">ZK Signals</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>Powered by Semaphore & Self Protocol</p>
              <p className="text-sm mt-1">© 2024 ZK Signals. Privacy-first anonymous voting.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
