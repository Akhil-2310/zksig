"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, ArrowLeft, Plus, Vote, MessageSquare, Calendar, Users } from "lucide-react"

interface Proposal {
  id: string
  title: string
  description: string
  createdAt: string
  votesFor: number
  votesAgainst: number
  totalVotes: number
  hasVoted: boolean
  isActive: boolean
}

const mockProposals: Proposal[] = [
  {
    id: "1",
    title: "Should we implement flexible working hours?",
    description:
      "Proposal to allow employees to choose their working hours between 7 AM - 7 PM with core hours from 10 AM - 3 PM.",
    createdAt: "2024-01-20",
    votesFor: 45,
    votesAgainst: 12,
    totalVotes: 57,
    hasVoted: false,
    isActive: true,
  },
  {
    id: "2",
    title: "Remote work policy update",
    description:
      "Update the current remote work policy to allow 3 days remote work per week instead of current 2 days.",
    createdAt: "2024-01-18",
    votesFor: 38,
    votesAgainst: 25,
    totalVotes: 63,
    hasVoted: true,
    isActive: true,
  },
]

export default function GroupDashboard({ params }: { params: { id: string } }) {
  const [proposals, setProposals] = useState<Proposal[]>(mockProposals)
  const [showCreateProposal, setShowCreateProposal] = useState(false)
  const [newProposal, setNewProposal] = useState({ title: "", description: "" })

  const handleVote = (proposalId: string, vote: "for" | "against") => {
    setProposals(
      proposals.map((proposal) => {
        if (proposal.id === proposalId && !proposal.hasVoted) {
          return {
            ...proposal,
            votesFor: vote === "for" ? proposal.votesFor + 1 : proposal.votesFor,
            votesAgainst: vote === "against" ? proposal.votesAgainst + 1 : proposal.votesAgainst,
            totalVotes: proposal.totalVotes + 1,
            hasVoted: true,
          }
        }
        return proposal
      }),
    )
  }

  const handleCreateProposal = () => {
    if (!newProposal.title || !newProposal.description) return

    const proposal: Proposal = {
      id: Date.now().toString(),
      title: newProposal.title,
      description: newProposal.description,
      createdAt: new Date().toISOString().split("T")[0],
      votesFor: 0,
      votesAgainst: 0,
      totalVotes: 0,
      hasVoted: false,
      isActive: true,
    }

    setProposals([proposal, ...proposals])
    setNewProposal({ title: "", description: "" })
    setShowCreateProposal(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      {/* Navbar */}
      <nav className="border-b border-cyan-500/20 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/groups" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5 text-gray-400 hover:text-cyan-400 transition-colors" />
              </Link>
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-cyan-400" />
                <span className="text-2xl font-bold text-white">ZK Signals</span>
              </div>
            </div>
            <button
              onClick={() => setShowCreateProposal(true)}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
            >
              <Plus className="h-4 w-4" />
              <span>Create Proposal</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Group Header */}
          <div className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 mb-8 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Young Professionals Feedback</h1>
                <p className="text-gray-400">Anonymous feedback platform for workplace issues</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-1 text-gray-500 mb-1">
                  <Users className="h-4 w-4" />
                  <span>234 members</span>
                </div>
                <div className="text-sm text-cyan-400 bg-cyan-500/10 px-2 py-1 rounded-full">Age: 18+</div>
              </div>
            </div>
          </div>

          {/* Create Proposal Modal */}
          {showCreateProposal && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="bg-gradient-to-br from-slate-800 to-gray-900 border border-cyan-500/20 rounded-xl p-6 w-full max-w-2xl shadow-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Create New Proposal</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={newProposal.title}
                      onChange={(e) => setNewProposal({ ...newProposal, title: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="Enter proposal title"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">Description</label>
                    <textarea
                      value={newProposal.description}
                      onChange={(e) => setNewProposal({ ...newProposal, description: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                      placeholder="Describe your proposal in detail"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setShowCreateProposal(false)}
                      className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCreateProposal}
                      disabled={!newProposal.title || !newProposal.description}
                      className={`flex-1 py-3 rounded-lg font-medium transition-all duration-200 ${
                        newProposal.title && newProposal.description
                          ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-cyan-500/25"
                          : "bg-gray-700 text-gray-400 cursor-not-allowed"
                      }`}
                    >
                      Create Proposal
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Proposals List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Active Proposals</h2>

            {proposals.map((proposal) => (
              <div
                key={proposal.id}
                className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 shadow-lg hover:border-cyan-400/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">{proposal.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{proposal.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(proposal.createdAt).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Vote className="h-4 w-4" />
                        <span>{proposal.totalVotes} votes</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Voting Results */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-2">
                    <span>For: {proposal.votesFor}</span>
                    <span>Against: {proposal.votesAgainst}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
                      style={{
                        width: proposal.totalVotes > 0 ? `${(proposal.votesFor / proposal.totalVotes) * 100}%` : "0%",
                      }}
                    />
                  </div>
                </div>

                {/* Voting Buttons */}
                {proposal.hasVoted ? (
                  <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg text-center font-medium border border-green-500/30">
                    ✓ You have voted on this proposal
                  </div>
                ) : (
                  <div className="flex space-x-4">
                    <button
                      onClick={() => handleVote(proposal.id, "for")}
                      className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-green-500/25"
                    >
                      Vote For
                    </button>
                    <button
                      onClick={() => handleVote(proposal.id, "against")}
                      className="flex-1 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-2 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-red-500/25"
                    >
                      Vote Against
                    </button>
                  </div>
                )}
              </div>
            ))}

            {proposals.length === 0 && (
              <div className="text-center py-12">
                <MessageSquare className="h-16 w-16 text-gray-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">No Proposals Yet</h3>
                <p className="text-gray-400 mb-6">Be the first to create a proposal for this group</p>
                <button
                  onClick={() => setShowCreateProposal(true)}
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                >
                  <Plus className="h-5 w-5" />
                  <span>Create First Proposal</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
