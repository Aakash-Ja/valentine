import { PageWrapper } from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import { Heart, Sparkles } from 'lucide-react'

export default function LoveStory() {
  const story = [
    {
      year: "Day 1",
      title: "The Beginning",
      description: "Our eyes met across the room, and in that instant, time seemed to stop. Little did we know this would be the start of the greatest adventure of our lives.",
      icon: "✨"
    },
    {
      year: "First Date",
      title: "Butterflies & Dreams",
      description: "Every laugh, every word, every moment was pure magic. We talked until sunrise, discovering that we were destined to find each other.",
      icon: "🌙"
    },
    {
      year: "Falling Deeper",
      title: "Soul Recognition",
      description: "With each passing day, our bond grew stronger. We weren't just falling in love; we were becoming each other's home.",
      icon: "🏠"
    },
    {
      year: "Today",
      title: "Forever Begins",
      description: "You are my greatest blessing. Thank you for choosing me, every single day. Our love story is my favorite story ever told.",
      icon: "💕"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-4">
            Our Love Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-500" />
            A journey of moments that changed everything
            <Sparkles className="w-5 h-5 text-pink-500" />
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-600 via-rose-500 to-red-600"
            style={{ originY: 0 }}
          />

          {/* Timeline items */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {story.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`flex md:gap-8 items-center ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Content */}
                <div className="flex-1 md:text-right md:pr-8 pl-8 md:pl-0">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 to-rose-400/30 dark:from-pink-600/30 dark:to-rose-600/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-br from-pink-50/80 to-rose-50/80 dark:from-pink-950/60 dark:to-rose-950/60 p-8 rounded-2xl border border-pink-300/50 dark:border-pink-600/50 hover:border-pink-500/70 dark:hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm">
                      <span className="text-3xl mb-3 inline-block">{item.icon}</span>
                      <p className="text-pink-600 dark:text-pink-400 font-bold mb-3 text-lg">{item.year}</p>
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground dark:text-pink-100/80 leading-relaxed text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:flex justify-center items-center z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <motion.div
                      animate={{ boxShadow: ['0 0 0 0 rgba(220, 38, 38, 0.7)', '0 0 0 20px rgba(220, 38, 38, 0)'] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-6 h-6 bg-gradient-to-br from-pink-600 to-red-600 rounded-full border-4 border-background dark:border-slate-900"
                    />
                  </motion.div>
                </div>

                {/* Spacer */}
                <div className="hidden md:flex-1" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-pink-200/40 via-rose-200/40 to-red-200/40 dark:from-pink-950/50 dark:via-rose-900/50 dark:to-red-900/50 rounded-3xl p-12 border border-pink-300/50 dark:border-pink-600/30"
        >
          <Heart className="w-10 h-10 text-pink-600 fill-pink-600 dark:text-pink-400 dark:fill-pink-400 mx-auto mb-6" />
          <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
            And our story continues...
          </h2>
          <p className="text-lg text-pink-700 dark:text-pink-200 max-w-2xl mx-auto leading-relaxed">
            Every moment with you is a chapter I never want to end. Forever with you feels like forever isn't long enough. Here's to endless adventures together.
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
