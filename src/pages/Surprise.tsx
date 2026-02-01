import { PageWrapper } from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Heart, RotateCcw } from 'lucide-react'

export default function Surprise() {
  const [reveal, setReveal] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([])

  const surpriseMessages = [
    "You make my heart skip a beat ❤️",
    "Forever with you 💕",
    "You're my greatest love 💫",
    "Thank you for being you 🌟",
    "I choose you, always 👑",
  ]

  useEffect(() => {
    if (reveal) {
      setParticles(
        Array.from({ length: 30 }, (_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
        }))
      )
    }
  }, [reveal])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
  }

  const messageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <PageWrapper className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <motion.span
            className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span>✨</span> Special Surprise <span>✨</span>
          </motion.span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
          Something magical is waiting for you. Are you ready to find out?
        </p>
      </motion.div>

      {!reveal ? (
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative mb-16"
        >
          {/* Outer rings */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-pink-600/30 dark:border-pink-500/30"
            style={{ width: 320, height: 320, top: -40, left: -40 }}
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-rose-600/30 dark:border-rose-500/30"
            style={{ width: 280, height: 280, top: -20, left: -20 }}
          />

          {/* Main Gift Box */}
          <motion.button
            onClick={() => setReveal(true)}
            whileHover={{ scale: 1.08, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-40 h-40 mx-auto"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-full h-full bg-gradient-to-br from-pink-500 via-rose-500 to-red-500 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-white/20 relative overflow-hidden"
            >
              {/* Shine effect */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent"
              />

              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative text-7xl z-10"
              >
                🎁
              </motion.div>
            </motion.div>
          </motion.button>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-12 text-lg font-semibold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent"
          >
            Click the gift to reveal your surprise
          </motion.p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
          className="w-full max-w-3xl px-4"
        >
          {/* Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              initial={{ scale: 1, opacity: 1 }}
              animate={{ scale: 0, opacity: 0, y: -500 }}
              transition={{ duration: 2.5, ease: 'easeOut' }}
              className="fixed pointer-events-none"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                zIndex: 1,
              }}
            >
              <Heart className="w-8 h-8 text-pink-600 fill-pink-600 drop-shadow-lg" />
            </motion.div>
          ))}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative z-10 space-y-12"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-8 inline-block"
              >
                💕
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-6">
                You're Amazing!
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Here's something special just for you...
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-4"
            >
              {surpriseMessages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  variants={messageVariants}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/15 to-rose-400/15 dark:from-pink-500/10 dark:to-rose-500/10 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative p-6 bg-gradient-to-br from-pink-50/60 to-rose-50/40 dark:from-pink-950/20 dark:to-rose-950/10 rounded-2xl border border-pink-300/50 dark:border-pink-600/30 hover:border-pink-500/70 dark:hover:border-pink-500/50 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">✨</span>
                      <p className="text-xl leading-relaxed text-foreground flex-1">
                        {msg}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="bg-gradient-to-r from-pink-100/50 to-rose-100/50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-3xl p-12 border border-pink-300/50 dark:border-pink-600/30 text-center"
            >
              <Heart className="w-12 h-12 text-pink-600 fill-pink-600 dark:text-pink-500 dark:fill-pink-500 mx-auto mb-6" />
              <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent">
                You Mean Everything To Me
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From the first moment to forever, you've made my life beautiful.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setReveal(false)}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white rounded-full font-bold hover:shadow-xl hover:shadow-pink-500/30 transition-all"
              >
                <RotateCcw className="w-5 h-5" />
                See Again 🎁
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </PageWrapper>
  )
}
