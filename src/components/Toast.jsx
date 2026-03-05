import { motion, AnimatePresence } from 'framer-motion'

export default function Toast({ message, visible, onClose }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-24 left-4 right-4 max-w-[343px] mx-auto z-50"
        >
          <div
            className="bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3"
            role="alert"
          >
            <span className="text-xl">✅</span>
            <span className="font-medium">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
