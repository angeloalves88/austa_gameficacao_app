import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import Card from '../components/Card'
import { userData } from '../data/mock'

export default function Confirmacao() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const symptomLabels = state?.symptomLabels || []
  const duration = state?.duration || ''

  if (!state) {
    return <Navigate to="/teleconsulta" replace />
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
          Confirmação
        </h1>
      </header>

      <p className="text-sm text-slate-500 mb-6">Passo 2 de 3</p>

      {/* Summary card */}
      {symptomLabels.length > 0 && (
        <Card className="mb-6">
          <h3 className="text-sm font-medium text-slate-600 mb-2">
            Sintomas selecionados
          </h3>
          <p className="text-slate-800">
            {symptomLabels.join(', ')}
            {duration && ` • ${duration}`}
          </p>
        </Card>
      )}

      <Card className="mb-6 bg-emerald-50 border-emerald-100">
        <p className="text-slate-800 font-medium mb-4">
          Com base nos seus sintomas, a teleconsulta é a melhor opção para você!
        </p>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">✅</span>
            <span className="text-slate-700">
              Você mantém seus {userData.score} pontos
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xl">💰</span>
            <span className="text-slate-700">
              Se precisar ir ao PA, terá 50% de desconto na coparticipação
            </span>
          </div>
        </div>
      </Card>

      <button
        type="button"
        onClick={() => navigate('/teleconsulta/fila')}
        className="w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors"
      >
        Entrar na Fila de Espera
      </button>
    </div>
  )
}
