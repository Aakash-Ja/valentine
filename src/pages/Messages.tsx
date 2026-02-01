import { PageWrapper } from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Heart, Send, Trash2, Copy, Check, MessageCircle } from 'lucide-react'

export default function Messages() {
  const [messages, setMessages] = useState<Array<{ text: string; liked: boolean; id: number }>>([
    { id: 1, text: "You're the best thing that happened to me ❤️", liked: false },
    { id: 2, text: "Every day with you feels like a dream 💭", liked: false },
    { id: 3, text: "Thank you for being my forever person 🎁", liked: false },
    { id: 4, text: "I love you more than words can express 💕", liked: false },
    { id: 5, text: "You make my heart skip a beat ⚡", liked: false },
    { id: 6, text: "Forever isn't long enough with you 🌟", liked: false },
  ])

  const [newMessage, setNewMessage] = useState('')
  const [copied, setCopied] = useState<number | null>(null)

  const handleAddMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { id: Date.now(), text: newMessage, liked: false }])
      setNewMessage('')
    }
  }

  const toggleLike = (id: number) => {
    setMessages(messages.map(msg =>
      msg.id === id ? { ...msg, liked: !msg.liked } : msg
    ))
  }

  const deleteMessage = (id: number) => {
    setMessages(messages.filter(msg => msg.id !== id))
  }

  const copyToClipboard = (text: string, id: number) => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(null), 2000)
  }

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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <MessageCircle className="w-12 h-12 text-pink-600 drop-shadow-lg" />
            Love Messages
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Share your sweetest thoughts, dreams, and feelings. Build a collection of beautiful moments together.
          </p>
        </motion.div>

        {/* Message Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-rose-600/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 bg-gradient-to-br from-pink-50/80 to-rose-50/60 dark:from-pink-950/30 dark:to-rose-950/20 rounded-2xl border border-pink-300/50 dark:border-pink-600/30 hover:border-pink-500/70 dark:hover:border-pink-500/60 transition-all duration-300">
              <label className="block text-sm font-semibold mb-4 text-pink-700 dark:text-pink-400">
                Write a message from your heart 💕
              </label>
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Share a sweet message, a special memory, or your feelings..."
                className="w-full h-28 p-4 bg-white dark:bg-black/20 border border-pink-200 dark:border-pink-600/30 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all dark:text-white dark:placeholder:text-gray-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddMessage}
                disabled={!newMessage.trim()}
                className="mt-4 w-full bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 text-white py-3 rounded-lg font-bold hover:shadow-lg hover:shadow-pink-500/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Add Message
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Messages Count */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 text-center text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100/50 to-rose-100/50 dark:from-pink-900/30 dark:to-rose-900/30 px-4 py-2 rounded-full border border-pink-300/50 dark:border-pink-600/30">
            <Heart className="w-4 h-4 text-pink-600 fill-pink-600" />
            <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent font-semibold">
              {messages.length} beautiful messages
            </span>
          </span>
        </motion.div>

        {/* Messages List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          {messages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Heart className="w-16 h-16 text-pink-600/30 fill-pink-600/30 mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">No messages yet. Start sharing your love! 💕</p>
            </motion.div>
          ) : (
            messages.map((msg, idx) => (
              <motion.div
                key={msg.id}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-rose-400/10 dark:from-pink-500/5 dark:to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative p-6 bg-gradient-to-br from-pink-50/60 to-rose-50/40 dark:from-pink-950/20 dark:to-rose-950/10 rounded-2xl border border-pink-300/50 dark:border-pink-600/30 hover:border-pink-500/70 dark:hover:border-pink-500/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed text-foreground">{msg.text}</p>
                      <div className="mt-4 flex items-center gap-2 text-xs text-pink-700 dark:text-pink-400">
                        <span className="inline-block w-2 h-2 bg-pink-600 dark:bg-pink-500 rounded-full" />
                        Message #{idx + 1}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleLike(msg.id)}
                        className="p-2 hover:bg-pink-300/30 dark:hover:bg-pink-600/30 rounded-lg transition-colors"
                        title={msg.liked ? 'Unlike' : 'Like'}
                      >
                        <Heart
                          className={`w-5 h-5 transition-colors ${msg.liked
                            ? 'fill-pink-600 text-pink-600 dark:fill-pink-500 dark:text-pink-500'
                            : 'text-pink-400 dark:text-pink-600 hover:text-pink-600 dark:hover:text-pink-500'
                            }`}
                        />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyToClipboard(msg.text, msg.id)}
                        className="p-2 hover:bg-pink-300/30 dark:hover:bg-pink-600/30 rounded-lg transition-colors"
                        title="Copy message"
                      >
                        {copied === msg.id ? (
                          <Check className="w-5 h-5 text-green-500" />
                        ) : (
                          <Copy className="w-5 h-5 text-pink-400 dark:text-pink-600 hover:text-pink-600 dark:hover:text-pink-500" />
                        )}
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => deleteMessage(msg.id)}
                        className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                        title="Delete message"
                      >
                        <Trash2 className="w-5 h-5 text-pink-400 dark:text-pink-600 hover:text-red-600 dark:hover:text-red-500" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          )}
        </motion.div>

        {/* Footer */}
        {messages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center bg-gradient-to-r from-pink-100/50 to-rose-100/50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-3xl p-12 border border-pink-300/50 dark:border-pink-600/30"
          >
            <Heart className="w-10 h-10 text-pink-600 fill-pink-600 dark:text-pink-500 dark:fill-pink-500 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These messages are the heartbeat of your love story. Keep adding to make it even more special!
            </p>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  )
}
