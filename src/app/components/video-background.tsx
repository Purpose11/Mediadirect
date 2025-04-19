"use client"

import { useEffect, useRef, useState } from "react"

interface VideoBackgroundProps {
  fallbackImageSrc?: string
}

export function VideoBackground({ fallbackImageSrc }: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [playbackError, setPlaybackError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Handle video loading
    const handleCanPlay = () => {
      setIsLoading(false)

      // Try to play the video
      video
        .play()
        .then(() => {
          console.log("Video playing successfully")
          video.style.opacity = "1"
        })
        .catch((error) => {
          console.error("Video autoplay was prevented:", error)
          setPlaybackError(true)
        })
    }

    video.addEventListener("canplay", handleCanPlay)

    // Handle errors
    const handleError = (e: Event) => {
      console.error("Video error:", e)
      setPlaybackError(true)
      setIsLoading(false)
    }

    video.addEventListener("error", handleError)

    return () => {
      video.removeEventListener("canplay", handleCanPlay)
      video.removeEventListener("error", handleError)
    }
  }, [])

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-black">
      {/* Semi-transparent overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 z-10" aria-hidden="true" />

      {/* Loading indicator */}
      {isLoading && !playbackError && (
        <div className="absolute inset-0 flex items-center justify-center z-5">
          <div
            className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
            style={{ animation: "spin 1s linear infinite" }}
          ></div>
        </div>
      )}

      {/* Fallback image if video fails */}
      {playbackError && fallbackImageSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center z-5"
          style={{ backgroundImage: `url(${fallbackImageSrc})` }}
          aria-hidden="true"
        />
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
        aria-hidden="true"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}
