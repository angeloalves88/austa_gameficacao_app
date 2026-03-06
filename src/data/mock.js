export const userData = {
  name: 'Ana Paula',
  company: 'Empresa XYZ',
  score: 90,
  level: 'Nível Ouro',
  scoreToNext: 50,
  nextLevel: 'Nível Diamante',
  luckyNumbers: 5, // 6 meses, 1 errado = 5 números da sorte para sorteios
}

export const activityFeed = [
  { id: 1, icon: '✅', text: 'Teleconsulta realizada — Orientada ao PA com desconto', points: '' },
  { id: 2, icon: '⚠️', text: 'Uso direto do PA sem telemedicina (Nov) — -10 pts', points: '-10' },
  { id: 3, icon: '💎', text: 'Não usou o PA (Out) — Score mantido em 100!', points: '' },
]

export const appointments = [
  { id: 1, date: '15/03/2025', doctor: 'Dr. Carlos Silva', specialty: 'Clínico Geral', status: 'Confirmado' },
  { id: 2, date: '-', doctor: 'Mamografia', specialty: 'Preventivo', status: 'Atrasada', monthsLate: 6, pendingPoints: 500 },
]

export const benefits = [
  { id: 1, text: '50% desconto na próxima coparticipação (PA com encaminhamento)' },
  { id: 2, text: '20% desconto em exames laboratoriais' },
  { id: 3, text: 'Prioridade no agendamento digital' },
]

export const badges = [
  { id: 1, name: 'Uso Consciente', emoji: '🏅', unlocked: true },
  { id: 2, name: 'Streak 3 meses', emoji: '🔥', unlocked: true },
  { id: 3, name: 'Preventivo Ouro', emoji: '💎', unlocked: true },
  { id: 4, name: 'Badge 4', emoji: '🔒', unlocked: false },
  { id: 5, name: 'Badge 5', emoji: '🔒', unlocked: false },
]

export const scoreHistory = [
  { month: 'Set', score: 100 },
  { month: 'Out', score: 100 },
  { month: 'Nov', score: 90 },
  { month: 'Dez', score: 90 },
  { month: 'Jan', score: 90 },
  { month: 'Fev', score: 90 },
]

export const historyEvents = [
  { id: 1, date: 'Fev', text: 'Usou a telemedicina e foi orientada ao PA', points: 0 },
  { id: 2, date: 'Jan', text: 'Não usou o PA', points: 0 },
  { id: 3, date: 'Dez', text: 'Usou a telemedicina', points: 0 },
  { id: 4, date: 'Nov', text: 'Usou o PA sem telemedicina', points: -10 },
  { id: 5, date: 'Out', text: 'Não usou o PA', points: 0 },
  { id: 6, date: 'Set', text: 'Início do programa — score inicial', points: null },
]

export const symptoms = [
  { id: 'febre', emoji: '🤒', label: 'Febre' },
  { id: 'falta-ar', emoji: '😮‍💨', label: 'Falta de ar' },
  { id: 'nausea', emoji: '🤢', label: 'Náusea' },
  { id: 'dor-cabeca', emoji: '🤕', label: 'Dor de cabeça' },
  { id: 'tosse', emoji: '😷', label: 'Tosse' },
  { id: 'dor-garganta', emoji: '🦷', label: 'Dor de garganta' },
  { id: 'dor-corpo', emoji: '🤸', label: 'Dor no corpo' },
  { id: 'fraqueza', emoji: '😴', label: 'Fraqueza' },
]
