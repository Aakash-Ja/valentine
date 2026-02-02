import { Link } from 'react-router-dom'
import { PageWrapper } from '@/components/PageWrapper'
import { ArrowRight, Heart, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Index() {
  const features = [
    { icon: '💌', title: 'Greeting Card', path: '/greeting', desc: 'Send heartfelt romantic messages' },
    { icon: '📖', title: 'Love Story', path: '/love-story', desc: 'Your timeline of special moments' },
    { icon: '🖼️', title: 'Gallery', path: '/gallery', desc: 'Cherished memories & moments' },
    { icon: '💬', title: 'Messages', path: '/messages', desc: 'Share sweet thoughts & love notes' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, type: 'tween' as const },
    },
  }

  return (
    <PageWrapper className="flex flex-col items-center justify-center min-h-screen">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mb-12"
      >
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <Heart className="w-24 h-24 text-pink-600 fill-pink-600 drop-shadow-lg" />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6">
          Happy Valentine's Day
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Express your love and celebrate the special bond you share. Explore memories, share messages, and create magical moments together.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mt-16 w-full px-4"
      >
        {features.map((feature, idx) => (
          <motion.div key={idx} variants={itemVariants}>
            <Link
              to={feature.path}
              className="group relative overflow-hidden p-8 rounded-2xl border border-pink-300/40 dark:border-pink-600/40 hover:border-pink-500/60 dark:hover:border-pink-500/60 bg-gradient-to-br from-pink-100/40 to-rose-100/30 dark:from-pink-950/30 dark:to-rose-950/20 hover:bg-pink-200/30 dark:hover:bg-pink-900/30 transition-all duration-300 h-full flex flex-col justify-between backdrop-blur-sm"
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/8 to-red-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <span className="text-5xl mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </span>
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 text-gray-900 dark:text-pink-300 group-hover:text-pink-700 dark:group-hover:text-pink-400 transition-colors">
                  {feature.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </h3>
                <p className="text-muted-foreground group-hover:text-pink-700 dark:group-hover:text-pink-300 transition-colors">
                  {feature.desc}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Surprise CTA */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-20 flex flex-col items-center gap-8"
      >
        <div className="relative">
          <motion.div
            animate={{ boxShadow: ['0 0 0 0 rgba(220, 38, 38, 0.7)', '0 0 0 30px rgba(220, 38, 38, 0)'] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="relative"
          >
            <Link
              to="/surprise"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 text-white rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <motion.span animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
                🎁
              </motion.span>
              Open Your Surprise
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center text-muted-foreground text-sm max-w-2xl flex items-center gap-2 justify-center"
        >
          <Sparkles className="w-4 h-4 text-pink-600" />
          A special something is waiting for you...
          <Sparkles className="w-4 h-4 text-pink-600" />
        </motion.p>
      </motion.div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="mt-20 text-center text-sm text-muted-foreground"
      >
        <p>Made with <Heart className="w-4 h-4 inline text-pink-600 fill-pink-600" /> for love</p>
      </motion.div>
    </PageWrapper>
  )
}
