import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Card from '../components/Card'

export default function FilaEspera() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 2, 100))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen px-4 pt-4 pb-6 flex flex-col items-center">
      {/* Header */}
      <header className="flex items-center gap-3 mb-2 w-full">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="p-2 -ml-1 rounded-lg hover:bg-slate-100"
        >
          <span className="text-xl">←</span>
        </button>
        <p className="text-sm text-slate-500 flex-1">Passo 3 de 3</p>
      </header>

      {/* Pulsing circle */}
      <motion.div
        className="relative w-40 h-40 mt-8 mb-6"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="absolute inset-0 rounded-full bg-blue-100 opacity-60" />
        <motion.div
          className="absolute inset-2 rounded-full bg-blue-200 opacity-40"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">🩺</span>
        </div>
      </motion.div>

      <h2 className="text-xl font-semibold text-slate-800 mb-1">
        Você está na fila! 🩺
      </h2>
      <p className="text-slate-500 text-sm mb-6">
        Tempo estimado: ~8 minutos
      </p>
      <p className="text-blue-600 font-medium mb-8">
        Você é o 3º na fila
      </p>

      {/* Progress bar */}
      <div className="w-full max-w-[300px] h-2 bg-slate-200 rounded-full overflow-hidden mb-8">
        <motion.div
          className="h-full bg-emerald-500"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <Card className="w-full mb-6">
        <p className="text-sm text-slate-700 text-center">
          Enquanto aguarda... Verifique seus benefícios ativos
        </p>
        <button
          type="button"
          onClick={() => navigate('/beneficios')}
          className="mt-3 w-full py-2 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors"
        >
          Ver benefícios
        </button>
      </Card>

      <button
        type="button"
        onClick={() => navigate('/')}
        className="text-slate-500 text-sm hover:text-slate-700"
      >
        Cancelar
      </button>
    </div>
  )
}
