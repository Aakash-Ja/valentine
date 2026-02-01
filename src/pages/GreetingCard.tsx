import { PageWrapper } from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Copy, Check } from 'lucide-react'

export default function GreetingCard() {
  const [flipped, setFlipped] = useState<number | null>(null)
  const [copied, setCopied] = useState<number | null>(null)

  const greetings = [
    {
      id: 1,
      title: "Love at First Sight",
      message: "You make every moment special, from sunrise to sunset. Happy Valentine's Day to the love of my life! Every day with you is a blessing I never knew I needed.",
      color: "from-pink-500 via-rose-500 to-red-500",
      gradient: "from-pink-600 to-red-600"
    },
    {
      id: 2,
      title: "Forever & Always",
      message: "With you, I've found my home. Thank you for being my greatest adventure and my safest place. You're not just my love, you're my reason to smile every single day.",
      color: "from-red-500 via-pink-500 to-purple-500",
      gradient: "from-red-600 to-pink-600"
    },
    {
      id: 3,
      title: "My Person",
      message: "You're not just my love, you're my best friend, my strength, and my reason to smile every day. Forever with you feels like forever isn't long enough.",
      color: "from-purple-500 via-pink-500 to-rose-500",
      gradient: "from-rose-600 to-purple-600"
    }
  ]

  const copyToClipboard = (message: string, id: number) => {
    navigator.clipboard.writeText(message)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
            <span>💌</span> Valentine's Greeting Cards
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Click on any card to reveal a heartfelt message. Share them with someone special!
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {greetings.map((greeting) => (
            <motion.div
              key={greeting.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              onClick={() => setFlipped(flipped === greeting.id ? null : greeting.id)}
              className="relative h-96 cursor-pointer perspective"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: flipped === greeting.id ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                className="relative w-full h-full"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped === greeting.id ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                {/* Front */}
                <div
                  className={`absolute w-full h-full bg-gradient-to-br ${greeting.color} rounded-3xl p-8 flex flex-col justify-between items-center text-white shadow-2xl border border-white/30 backdrop-blur-sm`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Shine effect */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent"
                  />

                  <div className="text-6xl drop-shadow-lg relative z-10">🎀</div>
                  <div className="text-center relative z-10">
                    <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">{greeting.title}</h2>
                    <p className="text-base drop-shadow-md">✨ Click to read ✨</p>
                  </div>
                  <Heart className="w-8 h-8 fill-white drop-shadow-lg animate-pulse relative z-10" />
                </div>

                {/* Back */}
                <div
                  className={`absolute w-full h-full bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950 dark:to-red-950 rounded-3xl p-8 flex flex-col justify-between shadow-2xl border border-pink-300/50 dark:border-pink-500/30`}
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <div>
                    <h3 className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${greeting.gradient} mb-4`}>
                      {greeting.title}
                    </h3>
                    <p className="text-base leading-relaxed text-foreground/90 min-h-[200px] flex items-center dark:text-pink-50">
                      "{greeting.message}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-pink-200 dark:border-pink-500/30">
                    <p className="text-sm text-pink-600 dark:text-pink-300">With all my love ❤️</p>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation()
                        copyToClipboard(greeting.message, greeting.id)
                      }}
                      className="p-2 hover:bg-pink-200/50 dark:hover:bg-pink-800/50 rounded-lg transition-colors"
                      title="Copy message"
                    >
                      {copied === greeting.id ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5 text-pink-600 dark:text-pink-300" />
                      )}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center py-12 bg-gradient-to-r from-pink-200/40 via-rose-200/40 to-red-200/40 dark:from-pink-950/40 dark:via-rose-900/40 dark:to-red-900/40 rounded-3xl border border-pink-300/50 dark:border-pink-600/30"
        >
          <Heart className="w-8 h-8 text-pink-600 fill-pink-600 dark:text-pink-400 dark:fill-pink-400 mx-auto mb-4" />
          <p className="text-lg text-pink-700 dark:text-pink-200">
            Customize these messages or create your own special greeting!
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
