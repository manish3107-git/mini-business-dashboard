import React, { forwardRef, useImperativeHandle, useState } from 'react'

const BusinessCard = forwardRef((props, ref) => {
  const [cardData, setCardData] = useState(null)

  useImperativeHandle(ref, () => ({
    setData: (data) => {
      setCardData(data)
    },
  }))

  const regenerateHeadline = async () => {
    if (!cardData) return
    const { name, location } = cardData

    try {
      const res = await fetch(
        `http://localhost:5000/regenerate-headline?name=${encodeURIComponent(name)}&location=${encodeURIComponent(location)}`
      )
      const result = await res.json()
      setCardData({ ...cardData, headline: result.headline })
    } catch (error) {
      console.error('Failed to regenerate headline', error)
    }
  }

  if (!cardData) return null

  const { name, location, rating, reviews, headline } = cardData

  return (
    <div className="mt-6 border border-gray-300 bg-gray-50 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold text-indigo-700">
        {name} ({location})
      </h2>
      <p className="mt-2">⭐ <strong>Rating:</strong> {rating}</p>
      <p>🗣 <strong>Reviews:</strong> {reviews}</p>
      <p className="italic text-gray-600 mt-3">"{headline}"</p>
      <button
        onClick={regenerateHeadline}
        className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded transition"
      >
        Regenerate SEO Headline
      </button>
    </div>
  )
})

export default BusinessCard
