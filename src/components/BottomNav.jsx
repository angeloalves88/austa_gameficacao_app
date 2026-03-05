import { NavLink, useLocation } from 'react-router-dom'

const navItems = [
  { path: '/', icon: '🏠', label: 'Início' },
  { path: '/agendamentos', icon: '📅', label: 'Agendamentos' },
  { path: '/beneficios', icon: '💳', label: 'Benefícios' },
  { path: '/perfil', icon: '👤', label: 'Perfil' },
]

export default function BottomNav() {
  const location = useLocation()
  const isTeleconsultaFlow = ['/teleconsulta', '/teleconsulta/confirmacao', '/teleconsulta/fila'].includes(location.pathname)

  if (isTeleconsultaFlow) return null

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 safe-area-pb z-50">
      <div className="max-w-[375px] mx-auto flex justify-around items-center h-14 px-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 py-2 px-3 rounded-lg transition-colors min-w-[60px] ${
                isActive
                  ? 'text-emerald-600 font-medium'
                  : 'text-slate-500 hover:text-slate-700'
              }`
            }
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-xs">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
