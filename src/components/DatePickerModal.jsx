import { motion, AnimatePresence } from 'framer-motion'

const SLOTS = ['08:00', '09:30', '11:00', '14:00', '15:30', '17:00']

export default function DatePickerModal({ isOpen, onClose, onConfirm }) {
  const handleSelect = (slot) => {
    onConfirm(slot)
    onClose()
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const dateStr = tomorrow.toLocaleDateString('pt-BR')

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 z-40"
          />
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto bg-white rounded-t-2xl z-50 p-6 pb-10"
          >
            <h3 className="text-lg font-semibold text-slate-800 mb-2">
              Escolha o horário
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Próximos horários para {dateStr}
            </p>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {SLOTS.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleSelect(slot)}
                  className="py-2 px-3 rounded-lg border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50 text-slate-700 font-medium transition-colors"
                >
                  {slot}
                </button>
              ))}
            </div>
            <button
              onClick={onClose}
              className="w-full py-2 text-slate-500 text-sm"
            >
              Cancelar
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
