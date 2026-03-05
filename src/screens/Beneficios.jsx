import { userData, benefits } from '../data/mock'
import Card from '../components/Card'

export default function Beneficios() {
  return (
    <div className="min-h-screen px-4 pt-6 pb-6">
      <h1 className="text-xl font-semibold text-slate-800 mb-6">
        Benefícios
      </h1>

      {/* Score wallet */}
      <Card className="mb-6 bg-gradient-to-br from-blue-50 to-emerald-50/50 border-blue-100">
        <p className="text-sm text-slate-600 mb-1">Seu saldo</p>
        <p className="text-2xl font-bold text-slate-800">
          {userData.score} pts
        </p>
      </Card>

      {/* Active discounts */}
      <h3 className="text-sm font-semibold text-slate-600 mb-3">
        Descontos ativos
      </h3>
      <div className="space-y-3">
        {benefits.map((benefit) => (
          <Card key={benefit.id} className="flex items-start gap-3">
            <span className="text-lg">💰</span>
            <p className="text-sm text-slate-700 flex-1">{benefit.text}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
