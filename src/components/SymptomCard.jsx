import { motion } from 'framer-motion'

export default function SymptomCard({ emoji, label, selected, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
        selected
          ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
      }`}
      whileTap={{ scale: 0.97 }}
    >
      <span className="text-2xl mb-1">{emoji}</span>
      <span className="text-xs font-medium">{label}</span>
    </motion.button>
  )
}
