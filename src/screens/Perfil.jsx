import { useState } from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Cell,
} from 'recharts'
import { userData, badges, scoreHistory, historyEvents } from '../data/mock'
import Card from '../components/Card'

export default function Perfil() {
  const [showHistory, setShowHistory] = useState(false)

  return (
    <div className="min-h-screen px-4 pt-6 pb-6">
      <h1 className="text-xl font-semibold text-slate-800 mb-6">Perfil</h1>

      {/* Avatar + user info */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
          👩
        </div>
        <div>
          <p className="text-lg font-semibold text-slate-800">{userData.name}</p>
          <p className="text-sm text-slate-500">{userData.company}</p>
        </div>
      </div>

      {/* Score history chart */}
      <Card className="mb-6">
        <h3 className="text-sm font-semibold text-slate-600 mb-1">
          Histórico de score (últimos 6 meses)
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Começa em 100 e diminui quando usa o PA sem passar pela telemedicina
        </p>
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={scoreHistory} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
              <XAxis dataKey="month" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 110]} tick={{ fontSize: 11 }} width={25} />
              <Tooltip
                contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0' }}
                formatter={(value) => [`${value} pts`, 'Score']}
              />
              <Bar dataKey="score" radius={[4, 4, 0, 0]} fill="#10b981">
                {scoreHistory.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={entry.score >= 100 ? '#10b981' : '#f59e0b'}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>

      {/* Badges */}
      <h3 className="text-sm font-semibold text-slate-600 mb-3">Conquistas</h3>
      <div className="grid grid-cols-5 gap-2 mb-6">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`flex flex-col items-center p-2 rounded-xl ${
              badge.unlocked
                ? 'bg-amber-50 border border-amber-200'
                : 'bg-slate-100 opacity-60'
            }`}
          >
            <span className="text-2xl mb-0.5">{badge.emoji}</span>
            <span className="text-[10px] text-center text-slate-600">
              {badge.name}
            </span>
          </div>
        ))}
      </div>

      {/* History button */}
      <button
        type="button"
        onClick={() => setShowHistory(true)}
        className="w-full py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors mb-4"
      >
        Ver Histórico Completo
      </button>

      {/* History modal */}
      {showHistory && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setShowHistory(false)}
            onKeyDown={(e) => e.key === 'Escape' && setShowHistory(false)}
            role="button"
            tabIndex={0}
            aria-label="Fechar"
          />
          <div className="fixed bottom-0 left-0 right-0 max-w-[375px] mx-auto bg-white rounded-t-2xl z-50 max-h-[70vh] overflow-hidden flex flex-col">
            <div className="p-4 border-b border-slate-100 flex justify-between items-center">
              <h3 className="font-semibold text-slate-800">Histórico</h3>
              <button
                type="button"
                onClick={() => setShowHistory(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                Fechar
              </button>
            </div>
            <div className="overflow-y-auto p-4">
              {historyEvents.map((event) => (
                <div
                  key={event.id}
                  className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0"
                >
                  <div>
                    <p className="text-sm text-slate-800">{event.text}</p>
                    <p className="text-xs text-slate-500">{event.date}</p>
                  </div>
                  <span
                    className={`font-medium ${
                      event.points === null
                        ? 'text-blue-600'
                        : event.points > 0
                        ? 'text-emerald-600'
                        : event.points < 0
                        ? 'text-red-500'
                        : 'text-slate-500'
                    }`}
                  >
                    {event.points === null
                      ? '100 pts'
                      : `${event.points > 0 ? '+' : ''}${event.points} pts`}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
