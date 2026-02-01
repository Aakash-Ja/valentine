import { useEffect, useState } from 'react'
import { Heart } from 'lucide-react'

interface FloatingHeart {
  id: number
  left: number
  delay: number
  duration: number
  size: number
}

export function FloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([])

  useEffect(() => {
    const newHearts: FloatingHeart[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 4 + Math.random() * 3,
      size: 8 + Math.random() * 16,
    }))
    setHearts(newHearts)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-30px',
            animation: `float ${heart.duration}s linear ${heart.delay}s infinite`,
          }}
        >
          <Heart
            className="text-pink-500/60 fill-pink-500"
            style={{
              width: `${heart.size}px`,
              height: `${heart.size}px`,
              filter: 'drop-shadow(0 0 8px rgba(236, 72, 153, 0.4))',
            }}
          />
        </div>
      ))}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-50vh) translateX(${Math.random() > 0.5 ? 100 : -100}px) rotate(180deg);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-100vh) translateX(0) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  )
}
