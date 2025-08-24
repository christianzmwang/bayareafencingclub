'use client'

import { useState } from 'react'
import OptimizedImage from '@/components/OptimizedImage'

interface GalleryImageProps {
  localSrc: string
  externalSrc: string
  alt: string
  width: number
  height: number
  className?: string
  sizes?: string
  priority?: boolean
  onLoad?: (width: number, height: number) => void
}

export default function GalleryImage({
  localSrc,
  externalSrc,
  alt,
  width,
  height,
  className = '',
  sizes,
  priority = false,
  onLoad
}: GalleryImageProps) {
  const [useExternal, setUseExternal] = useState(false)

  const handleError = () => {
    if (!useExternal) {
      setUseExternal(true)
    }
  }

  const handleImageLoad = (event: React.SyntheticEvent<HTMLImageElement>) => {
    const img = event.target as HTMLImageElement
    if (onLoad) {
      onLoad(img.naturalWidth, img.naturalHeight)
    }
  }

  return (
    <img
      src={useExternal ? externalSrc : localSrc}
      alt={alt}
      className={className}
      onLoad={handleImageLoad}
      onError={handleError}
      loading={priority ? 'eager' : 'lazy'}
    />
  )
}
