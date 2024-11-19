import React, { useRef } from "react"
import { motion, useAnimationFrame } from "framer-motion"

export default function MovingCard() {
  const images = [
    "https://img.youtube.com/vi/Nv2DERaMx-4/sddefault.jpg",
    "https://img.youtube.com/vi/ZxKM3DCV2kE/sddefault.jpg",
    "https://img.youtube.com/vi/UrsmFxEIp5k/sddefault.jpg",
  ]

  const baseVelocity = -15 // Increased speed
  const containerRef = useRef(null)
  const baseX = useRef(0)

  useAnimationFrame((t, delta) => {
    if (!containerRef.current) return

    baseX.current += baseVelocity * (delta / 1000)

    // Reset baseX when it's moved by the width of the container
    if (containerRef.current && baseX.current <= -containerRef.current.clientWidth / 2) {
      baseX.current = 0
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${baseX.current}px)`
    }
  })

  return (
    <div className="w-full overflow-hidden bg-black p-4">
      <div className="relative h-[220px]">
        <motion.div
          ref={containerRef}
          className="absolute flex gap-4 will-change-transform"
          style={{ width: "fit-content" }}
        >
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-5 shrink-0">
              {images.map((src, imgIndex) => (
                <img
                  key={`set${setIndex}-${imgIndex}`}
                  src={src}
                  alt={`Flowing image ${imgIndex + 1}`}
                  width={350}
                  height={200}
                  className="rounded-lg shadow-md object-cover ml-10 h-60"
                  loading="lazy"
                />
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}