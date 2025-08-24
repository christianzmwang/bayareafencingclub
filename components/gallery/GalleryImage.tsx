'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'

interface GalleryImageProps {
  localSrc: string
  externalSrc: string
  alt: string
  width?: number // kept for API compatibility, not used when using fill
  height?: number // kept for API compatibility, not used when using fill
  className?: string
  sizes?: string
  priority?: boolean
  quality?: number
  onLoad?: (width: number, height: number) => void
}

export default function GalleryImage({
  localSrc,
  externalSrc,
  alt,
  className = '',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  quality = 75, // Increased from 70 for better quality-performance balance
  onLoad
}: GalleryImageProps) {
  const [src, setSrc] = useState<string>(localSrc)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = useCallback(() => {
    // Fallback to external CDN image if local fails
    if (src !== externalSrc) {
      setSrc(externalSrc)
      setIsLoading(true)
      setHasError(false)
    } else {
      setHasError(true)
      setIsLoading(false)
    }
  }, [src, externalSrc])

  const handleImageLoad = useCallback((event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement
    setIsLoading(false)
    setHasError(false)
    if (onLoad) {
      onLoad(img.naturalWidth, img.naturalHeight)
    }
  }, [onLoad])

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        className={`transition-opacity duration-300 ${className} ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        onError={handleError}
        onLoad={handleImageLoad}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse" />
      )}
      {hasError && (
        <div className="absolute inset-0 bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400 text-sm">Failed to load image</span>
        </div>
      )}
    </>
  )
}
