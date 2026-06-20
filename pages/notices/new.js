import { useState } from 'react'
import { useRouter } from 'next/router'

export default function NewNotice() {
  const router = useRouter()
  const [form, setForm] = useState({
    title: '', body: '', category: 'General', priority: 'Normal', publishDate: ''
  })
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    setError('')
    const res = await fetch('/api/notices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    if (res.ok) {
      router.push('/notices')
    } else {
      const data = await res.json()
      setError(data.error)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Notice</h1>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <div className="flex flex-col gap-4">
          <input
            className="border rounded-lg p-2 w-full text-gray-900"
            placeholder="Title *"
            value={form.title}
            onChange={e => setForm({ ...form, title: e.target.value })}
          />
          <textarea
            className="border rounded-lg p-2 w-full h-28 text-gray-900"
            placeholder="Body *"
            value={form.body}
            onChange={e => setForm({ ...form, body: e.target.value })}
          />
          <select
            className="border rounded-lg p-2 w-full text-gray-900"
            value={form.category}
            onChange={e => setForm({ ...form, category: e.target.value })}
          >
            <option>General</option>
            <option>Exam</option>
            <option>Event</option>
          </select>
          <select
            className="border rounded-lg p-2 w-full text-gray-900"
            value={form.priority}
            onChange={e => setForm({ ...form, priority: e.target.value })}
          >
            <option>Normal</option>
            <option>Urgent</option>
          </select>
          <input
            type="date"
            className="border rounded-lg p-2 w-full text-gray-900"
            value={form.publishDate}
            onChange={e => setForm({ ...form, publishDate: e.target.value })}
          />
          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 w-full"
            >Create Notice</button>
            <button
              onClick={() => router.push('/notices')}
              className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 w-full"
            >Cancel</button>
          </div>
        </div>
      </div>
    </div>
  )
}