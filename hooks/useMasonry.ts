'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'

interface MasonryItem {
  id: number
  element: HTMLElement
  width: number
  height: number
}

export function useMasonry<T extends { id: number }>(
  items: T[],
  columnCount: { mobile: number; tablet: number; desktop: number },
  gap: number = 16
) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemPositions, setItemPositions] = useState<{[key: number]: {x: number, y: number, width: number}}>({})
  const [containerHeight, setContainerHeight] = useState(0)

  const getColumnCount = () => {
    if (typeof window === 'undefined') return columnCount.mobile
    
    const width = window.innerWidth
    if (width >= 1024) return columnCount.desktop
    if (width >= 640) return columnCount.tablet
    return columnCount.mobile
  }

  const calculateLayout = () => {
    if (!containerRef.current) return

    const container = containerRef.current
    const cols = getColumnCount()
    const containerWidth = container.offsetWidth
    const itemWidth = (containerWidth - gap * (cols - 1)) / cols
    
    const columnHeights = new Array(cols).fill(0)
    const positions: {[key: number]: {x: number, y: number, width: number}} = {}

    items.forEach((item) => {
      const element = container.querySelector(`[data-masonry-id="${item.id}"]`) as HTMLElement
      if (!element) return

      // Find the shortest column
      let shortestColumn = 0
      for (let i = 1; i < cols; i++) {
        if (columnHeights[i] < columnHeights[shortestColumn]) {
          shortestColumn = i
        }
      }

      // Get the actual height of the element
      const elementHeight = element.offsetHeight

      // Calculate position
      const x = shortestColumn * (itemWidth + gap)
      const y = columnHeights[shortestColumn]

      positions[item.id] = { x, y, width: itemWidth }
      columnHeights[shortestColumn] += elementHeight + gap
    })

    setItemPositions(positions)
    setContainerHeight(Math.max(...columnHeights) - gap)
  }

  useLayoutEffect(() => {
    calculateLayout()
  }, [items])

  useEffect(() => {
    const handleResize = () => {
      setTimeout(calculateLayout, 100) // Debounce resize
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [items])

  return {
    containerRef,
    itemPositions,
    containerHeight,
    recalculate: calculateLayout
  }
}
