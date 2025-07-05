import React, { useRef, useState } from 'react'
import BusinessCard from './BusinessCard'

export default function BusinessForm() {
  const nameRef = useRef()
  const locationRef = useRef()
  const cardRef = useRef()
  const [error, setError] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')

    const name = nameRef.current.value.trim()
    const location = locationRef.current.value.trim()

    if (!name || !location) {
      setError('❗ Please enter both name and location')
      return
    }

    try {
      const res = await fetch('http://localhost:5000/business-data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, location }),
      })

      if (!res.ok) throw new Error('API request failed')

      const data = await res.json()
      cardRef.current.setData({ ...data, name, location })
    } catch (err) {
      console.error(err)
      setError('❌ Failed to fetch data. Is your backend running?')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white p-8 rounded-lg shadow-lg">

        

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Business Name
            </label>
            <input
              ref={nameRef}
              type="text"
              placeholder="e.g. Cool Cafe"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Location
            </label>
            <input
              ref={locationRef}
              type="text"
              placeholder="e.g. Mumbai"
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 rounded-md transition duration-200"
          >
            Submit
          </button>

          {error && (
            <p className="text-red-600 text-center font-medium">{error}</p>
          )}
        </form>

        {/* Business Card Display */}
        <div className="mt-10">
          <BusinessCard ref={cardRef} />
        </div>
      </div>
    </div>
  )
}
