import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function NoticesPage() {
  const [notices, setNotices] = useState([])
  const router = useRouter()

  const fetchNotices = async () => {
    const res = await fetch('/api/notices')
    const data = await res.json()
    setNotices(data)
  }

  useEffect(() => { fetchNotices() }, [])

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this notice?')) return
    await fetch(`/api/notices/${id}`, { method: 'DELETE' })
    fetchNotices()
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Notice Board</h1>
          <button
            onClick={() => router.push('/notices/new')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            + Add Notice
          </button>
        </div>

        {notices.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No notices yet. Add one!</p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {notices.map((notice) => (
            <div key={notice.id} className={`bg-white rounded-xl shadow p-5 border-l-4 ${notice.priority === 'Urgent' ? 'border-red-500' : 'border-blue-400'}`}>
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-gray-800">{notice.title}</h2>
                {notice.priority === 'Urgent' && (
                  <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">URGENT</span>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-3">{notice.body}</p>
              <div className="flex gap-2 text-xs text-gray-500 mb-3">
                <span className="bg-gray-100 px-2 py-1 rounded">{notice.category}</span>
                <span className="bg-gray-100 px-2 py-1 rounded">
                  {new Date(notice.publishDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/notices/${notice.id}/edit`)}
                  className="text-sm bg-yellow-100 text-yellow-700 px-3 py-1 rounded hover:bg-yellow-200"
                >Edit</button>
                <button
                  onClick={() => handleDelete(notice.id)}
                  className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded hover:bg-red-200"
                >Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}