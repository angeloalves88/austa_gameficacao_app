import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { symptoms } from '../data/mock'
import SymptomCard from '../components/SymptomCard'

export default function PreAnamnese() {
  const navigate = useNavigate()
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [description, setDescription] = useState('')
  const [intensity, setIntensity] = useState(5)
  const [duration, setDuration] = useState('')

  const toggleSymptom = (id) => {
    setSelectedSymptoms((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const handleNext = () => {
    navigate('/teleconsulta/confirmacao', {
      state: {
        symptoms: selectedSymptoms,
        symptomLabels: symptoms.filter((s) => selectedSymptoms.includes(s.id)).map((s) => s.label),
        description,
        intensity,
        duration,
      },
    })
  }

  return (
    <div className="min-h-screen px-4 pt-4 pb-6">
      {/* Header */}
      <header className="flex items-center gap-3 mb-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="p-2 -ml-1 rounded-lg hover:bg-slate-100"
        >
          <span className="text-xl">←</span>
        </button>
        <h1 className="text-lg font-semibold text-slate-800 flex-1">
          Como você está se sentindo?
        </h1>
      </header>

      <p className="text-sm text-slate-500 mb-6">Passo 1 de 3</p>

      {/* Symptom grid */}
      <div className="grid grid-cols-4 gap-2 mb-6">
        {symptoms.map((symptom) => (
          <SymptomCard
            key={symptom.id}
            emoji={symptom.emoji}
            label={symptom.label}
            selected={selectedSymptoms.includes(symptom.id)}
            onClick={() => toggleSymptom(symptom.id)}
          />
        ))}
      </div>

      {/* Description */}
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Descreva melhor o que está sentindo (opcional)
      </label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Ex: dor de cabeça forte há 2 dias..."
        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-200 mb-6 resize-none"
        rows={3}
      />

      {/* Intensity slider */}
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Intensidade da dor: 1 a 10
      </label>
      <div className="flex items-center gap-3 mb-6">
        <input
          type="range"
          min="1"
          max="10"
          value={intensity}
          onChange={(e) => setIntensity(Number(e.target.value))}
          className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
        />
        <span className="text-sm font-semibold text-slate-700 w-6">{intensity}</span>
      </div>

      {/* Duration */}
      <label className="block text-sm font-medium text-slate-700 mb-2">
        Há quanto tempo?
      </label>
      <div className="flex gap-2 mb-8">
        {['Hoje', '2-3 dias', 'Mais de 3 dias'].map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setDuration(opt)}
            className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
              duration === opt
                ? 'bg-emerald-500 text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={handleNext}
        className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
      >
        Próximo →
      </button>
    </div>
  )
}
