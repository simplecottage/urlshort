// app/page.tsx
"use client"
import { useState } from 'react'

export default function Home() {
  const [url, setUrl] = useState('')
  const [shortUrl, setShortUrl] = useState('')

  const shortenUrl = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/urls/shorten`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ originalUrl: url })
    })
    const data = await res.json()
    setShortUrl(data.shortUrl)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <input 
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="border p-2 rounded mb-4 w-96"
        placeholder="Enter URL to shorten"
      />
      <button 
        onClick={shortenUrl}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Shorten URL
      </button>
      {shortUrl && (
        <div className="mt-4">
          Short URL: <a href={shortUrl} className="text-blue-500">{shortUrl}</a>
        </div>
      )}
    </main>
  )
}
