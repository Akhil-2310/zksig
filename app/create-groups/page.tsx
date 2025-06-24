"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Plus, ArrowLeft, Wallet, Check } from "lucide-react"

interface GroupFormData {
  name: string
  description: string
  criteria: "age" | "gender" | null
  ageLimit: string
  gender: "male" | "female" | null
}

export default function CreateGroupsPage() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [formData, setFormData] = useState<GroupFormData>({
    name: "",
    description: "",
    criteria: null,
    ageLimit: "",
    gender: null,
  })
  const [isCreating, setIsCreating] = useState(false)

  const handleConnectWallet = () => {
    // Wallet connection logic would go here
    setIsWalletConnected(true)
  }

  const handleCreateGroup = async () => {
    if (!formData.name || !formData.description || !formData.criteria) return

    setIsCreating(true)
    // Simulate group creation
    setTimeout(() => {
      setIsCreating(false)
      // Navigate to verification or groups page
      window.location.href = "/verify"
    }, 2000)
  }

  const isFormValid =
    formData.name &&
    formData.description &&
    formData.criteria &&
    (formData.criteria === "age" ? formData.ageLimit : formData.gender)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Navbar */}
      <nav className="border-b border-cyan-500/20 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </Link>
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold text-white">ZK Signals</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/groups" className="text-gray-400 hover:text-cyan-400 transition-colors">
                All Groups
              </Link>
              <button
                onClick={handleConnectWallet}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg ${
                  isWalletConnected
                    ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:shadow-green-500/25"
                    : "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white hover:shadow-cyan-500/25"
                }`}
              >
                {isWalletConnected ? (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Connected</span>
                  </>
                ) : (
                  <>
                    <Wallet className="h-4 w-4" />
                    <span>Connect Wallet</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">Create a Group</h1>
            <p className="text-gray-400">Set up a new anonymous voting group with specific criteria</p>
          </div>

          {!isWalletConnected ? (
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 text-center shadow-xl">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-semibold text-white mb-4">Connect Your Wallet</h2>
              <p className="text-gray-400 mb-6">You need to connect your wallet to create and manage groups</p>
              <button
                onClick={handleConnectWallet}
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
              >
                Connect Wallet
              </button>
            </div>
          ) : (
            <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 shadow-xl">
              <div className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Group Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="Enter group name"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Description</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                    placeholder="Describe the purpose of this group"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-4">Membership Criteria</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setFormData({ ...formData, criteria: "age", gender: null })}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.criteria === "age"
                          ? "border-cyan-500 bg-cyan-500/10 text-white shadow-lg shadow-cyan-500/20"
                          : "border-gray-600 bg-slate-800/30 text-gray-300 hover:border-cyan-500/50 hover:bg-cyan-500/5"
                      }`}
                    >
                      <div className="text-2xl mb-2">🎂</div>
                      <div className="font-medium">Age</div>
                    </button>
                    <button
                      onClick={() => setFormData({ ...formData, criteria: "gender", ageLimit: "" })}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                        formData.criteria === "gender"
                          ? "border-cyan-500 bg-cyan-500/10 text-white shadow-lg shadow-cyan-500/20"
                          : "border-gray-600 bg-slate-800/30 text-gray-300 hover:border-cyan-500/50 hover:bg-cyan-500/5"
                      }`}
                    >
                      <div className="text-2xl mb-2">👥</div>
                      <div className="font-medium">Gender</div>
                    </button>
                  </div>
                </div>

                {formData.criteria === "age" && (
                  <div>
                    <label className="block text-white font-medium mb-2">Minimum Age</label>
                    <input
                      type="number"
                      value={formData.ageLimit}
                      onChange={(e) => setFormData({ ...formData, ageLimit: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="Enter minimum age"
                      min="1"
                      max="100"
                    />
                  </div>
                )}

                {formData.criteria === "gender" && (
                  <div>
                    <label className="block text-white font-medium mb-2">Gender</label>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setFormData({ ...formData, gender: "male" })}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          formData.gender === "male"
                            ? "border-cyan-500 bg-cyan-500/10 text-white"
                            : "border-gray-600 bg-slate-800/30 text-gray-300 hover:border-cyan-500/50"
                        }`}
                      >
                        Male
                      </button>
                      <button
                        onClick={() => setFormData({ ...formData, gender: "female" })}
                        className={`p-3 rounded-lg border transition-all duration-200 ${
                          formData.gender === "female"
                            ? "border-cyan-500 bg-cyan-500/10 text-white"
                            : "border-gray-600 bg-slate-800/30 text-gray-300 hover:border-cyan-500/50"
                        }`}
                      >
                        Female
                      </button>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleCreateGroup}
                  disabled={!isFormValid || isCreating}
                  className={`w-full py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isFormValid && !isCreating
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isCreating ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Creating Group...</span>
                    </>
                  ) : (
                    <>
                      <Plus className="h-5 w-5" />
                      <span>Create Group</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
