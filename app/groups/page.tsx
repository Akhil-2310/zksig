"use client"

import { useState } from "react"
import Link from "next/link"
import { Shield, Users, Calendar, ArrowLeft, Plus } from "lucide-react"

interface Group {
  id: string
  name: string
  description: string
  criteria: "age" | "gender"
  requirement: string
  memberCount: number
  createdAt: string
  isJoined: boolean
}

const mockGroups: Group[] = [
  {
    id: "1",
    name: "Young Professionals Feedback",
    description: "Anonymous feedback platform for workplace issues and career development discussions.",
    criteria: "age",
    requirement: "18+",
    memberCount: 234,
    createdAt: "2024-01-15",
    isJoined: false,
  },
  {
    id: "2",
    name: "Women in Tech Survey",
    description: "Safe space for women to share experiences and challenges in the technology industry.",
    criteria: "gender",
    requirement: "Female",
    memberCount: 156,
    createdAt: "2024-01-10",
    isJoined: true,
  },
  {
    id: "3",
    name: "Senior Citizens Voice",
    description: "Platform for senior citizens to voice concerns about healthcare and social services.",
    criteria: "age",
    requirement: "65+",
    memberCount: 89,
    createdAt: "2024-01-08",
    isJoined: false,
  },
]

export default function AllGroupsPage() {
  const [groups] = useState<Group[]>(mockGroups)

  const handleJoinGroup = (groupId: string) => {
    // Navigate to verification page with group ID
    window.location.href = `/verify?groupId=${groupId}`
  }

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
            <Link
              href="/create-groups"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
            >
              <Plus className="h-4 w-4" />
              <span>Create Group</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">All Groups</h1>
            <p className="text-gray-400">Join anonymous voting groups that match your criteria</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {groups.map((group) => (
              <div
                key={group.id}
                className="bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl">{group.criteria === "age" ? "🎂" : "👥"}</div>
                    <span className="text-sm text-cyan-400 font-medium bg-cyan-500/10 px-2 py-1 rounded-full">
                      {group.requirement}
                    </span>
                  </div>
                  {group.isJoined && (
                    <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium">
                      Joined
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{group.name}</h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-3 leading-relaxed">{group.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{group.memberCount} members</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(group.createdAt).toLocaleDateString()}</span>
                  </div>
                </div>

                {group.isJoined ? (
                  <Link
                    href={`/groups/${group.id}`}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 text-center block shadow-lg hover:shadow-green-500/25"
                  >
                    View Group
                  </Link>
                ) : (
                  <button
                    onClick={() => handleJoinGroup(group.id)}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Join Group
                  </button>
                )}
              </div>
            ))}
          </div>

          {groups.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-4">No Groups Found</h3>
              <p className="text-gray-400 mb-6">Be the first to create a group and start anonymous discussions</p>
              <Link
                href="/create-groups"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 inline-flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
              >
                <Plus className="h-5 w-5" />
                <span>Create First Group</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
