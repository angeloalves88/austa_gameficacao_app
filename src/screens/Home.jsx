import { Link } from 'react-router-dom'
import { userData, activityFeed } from '../data/mock'
import Card from '../components/Card'

export default function Home() {
  return (
    <div className="min-h-screen px-4 pt-6 pb-6">
      {/* Header */}
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-xl">
            👩
          </div>
          <div>
            <h1 className="text-lg font-semibold text-slate-800">
              Olá, {userData.name.split(' ')[0]}!
            </h1>
            <p className="text-amber-600 font-medium text-sm">{userData.level}</p>
          </div>
        </div>
        <div className="px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-sm font-semibold text-blue-700">
            {userData.score} pts 🛡️
          </span>
        </div>
      </header>

      {/* Main card - Não está se sentindo bem? */}
      <Card className="mb-6 bg-gradient-to-br from-slate-50 to-blue-50/50">
        <h2 className="text-lg font-semibold text-slate-800 mb-4">
          Não está se sentindo bem?
        </h2>
        <Link
          to="/teleconsulta"
          className="block w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-center transition-colors mb-3"
        >
          Iniciar Teleconsulta
        </Link>
        <button
          type="button"
          className="block w-full py-2 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm transition-colors"
        >
          Ir ao Pronto Atendimento
        </button>
        <p className="text-xs text-amber-600 mt-2 text-center">
          -10 pts se caso não urgente
        </p>
      </Card>

      {/* Activity feed */}
      <h3 className="text-sm font-semibold text-slate-600 mb-3">
        Atividade recente
      </h3>
      <div className="space-y-2">
        {activityFeed.map((item) => (
          <Card key={item.id} className="flex items-start gap-3 py-3">
            <span className="text-xl">{item.icon}</span>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-700">{item.text}</p>
              {item.points && (
                <span
                  className={`text-xs font-medium ${
                    item.points.startsWith('-') ? 'text-red-500' : 'text-emerald-600'
                  }`}
                >
                  {item.points}
                  {item.points && item.points !== '-' ? ' pts' : ''}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
