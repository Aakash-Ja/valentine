import { PageWrapper } from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import { Heart, X } from 'lucide-react'
import { useState } from 'react'

export default function Gallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Memory ${i + 1}`,
    emoji: ['💑', '💏', '👫', '🎉', '🌹', '💐', '🎂', '🎁', '🌅', '🌙', '⭐', '🎆'][i % 12],
    description: [
      'Our first moment together',
      'A kiss under the stars',
      'Dancing in the rain',
      'Celebrating milestones',
      'Romantic dinners',
      'Flowers and promises',
      'Sweet celebrations',
      'Surprise moments',
      'Sunrise adventures',
      'Moonlit walks',
      'Magical nights',
      'New Year celebrations'
    ][i % 12]
  }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotateY: -20 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-4">
            <span>🖼️</span> Our Memories
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cherished moments that define our beautiful journey together
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedId(photo.id)}
              className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-pink-300/40 to-rose-300/40 dark:from-pink-900/40 dark:to-rose-900/40 cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 border border-pink-300/50 dark:border-pink-600/30"
            >
              {/* Emoji Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-8xl group-hover:scale-110 transition-transform duration-300"
                >
                  {photo.emoji}
                </motion.div>
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/0 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="text-white"
                >
                  <h3 className="font-bold text-lg mb-2">{photo.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{photo.description}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Heart className="w-4 h-4 fill-white text-white" />
                    Click to view
                  </div>
                </motion.div>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-2xl border-2 border-pink-400/0 group-hover:border-pink-500/50 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox Modal */}
        {selectedId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedId(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950 dark:to-red-950 rounded-3xl p-8 max-w-2xl w-full border border-pink-300/50 dark:border-pink-600/30"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 hover:bg-pink-200/50 dark:hover:bg-pink-800/50 rounded-lg transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-9xl mb-6"
                >
                  {photos.find(p => p.id === selectedId)?.emoji}
                </motion.div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
                  {photos.find(p => p.id === selectedId)?.title}
                </h2>
                <p className="text-lg text-pink-700 dark:text-pink-200 mb-6">
                  {photos.find(p => p.id === selectedId)?.description}
                </p>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-center justify-center gap-3 text-pink-600 dark:text-pink-400"
                >
                  <Heart className="w-5 h-5 fill-pink-600 dark:fill-pink-400" />
                  <span className="font-semibold">A moment we treasure forever</span>
                  <Heart className="w-5 h-5 fill-pink-600 dark:fill-pink-400" />
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setSelectedId(prev => prev === 1 ? 12 : prev! - 1)}
                  className="px-6 py-2 bg-pink-200/50 dark:bg-pink-800/50 hover:bg-pink-300/50 dark:hover:bg-pink-700/50 rounded-lg transition-colors font-semibold text-pink-700 dark:text-pink-200"
                >
                  ← Previous
                </button>
                <span className="text-sm text-pink-600 dark:text-pink-400 font-semibold">
                  {selectedId} / {photos.length}
                </span>
                <button
                  onClick={() => setSelectedId(prev => prev === 12 ? 1 : prev! + 1)}
                  className="px-6 py-2 bg-pink-200/50 dark:bg-pink-800/50 hover:bg-pink-300/50 dark:hover:bg-pink-700/50 rounded-lg transition-colors font-semibold text-pink-700 dark:text-pink-200"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center bg-gradient-to-r from-pink-200/50 via-rose-200/50 to-red-200/50 dark:from-pink-950/50 dark:via-rose-900/50 dark:to-red-900/50 rounded-3xl p-12 border border-pink-300/50 dark:border-pink-600/30"
        >
          <Heart className="w-10 h-10 text-pink-600 fill-pink-600 dark:text-pink-400 dark:fill-pink-400 mx-auto mb-4" />
          <p className="text-lg text-pink-700 dark:text-pink-200 max-w-2xl mx-auto">
            Each photo tells a story of our love. Replace these emojis with your favorite memories!
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  )
}


