import { useState } from 'react'
import { appointments } from '../data/mock'
import Card from '../components/Card'
import DatePickerModal from '../components/DatePickerModal'
import Toast from '../components/Toast'

export default function Agendamentos() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toastVisible, setToastVisible] = useState(false)
  const [mamografiaAgendada, setMamografiaAgendada] = useState(false)

  const [scheduledSlot, setScheduledSlot] = useState(null)

  const handleConfirmSchedule = (slot) => {
    setScheduledSlot(slot)
    setMamografiaAgendada(true)
    setToastVisible(true)
    setTimeout(() => setToastVisible(false), 3000)
  }

  const pendingAppointment = appointments.find((a) => a.status === 'Atrasada')

  return (
    <div className="min-h-screen px-4 pt-6 pb-6">
      <h1 className="text-xl font-semibold text-slate-800 mb-6">
        Agendamentos
      </h1>

      <div className="space-y-4">
        {mamografiaAgendada && scheduledSlot && (
          <Card>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold text-slate-800">Mamografia</p>
                <p className="text-sm text-slate-500">
                  Preventivo • {scheduledSlot} • Em breve
                </p>
              </div>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                Agendado +100 pts
              </span>
            </div>
          </Card>
        )}
        {appointments
          .filter((a) => a.status !== 'Atrasada')
          .map((appointment) => (
            <Card key={appointment.id}>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-slate-800">
                    {appointment.doctor}
                  </p>
                  <p className="text-sm text-slate-500">
                    {appointment.specialty} • {appointment.date}
                  </p>
                </div>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                    appointment.status === 'Confirmado'
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {appointment.status}
                </span>
              </div>
            </Card>
          ))}

        {pendingAppointment && !mamografiaAgendada && (
          <Card className="border-2 border-red-200 bg-red-50/50">
            <div className="flex justify-between items-start mb-3">
              <div>
                <p className="font-semibold text-slate-800">
                  {pendingAppointment.doctor}
                </p>
                <p className="text-sm text-red-600">
                  Atrasada {pendingAppointment.monthsLate} meses
                </p>
              </div>
              <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
                +{pendingAppointment.pendingPoints} pts se agendar hoje
              </span>
            </div>
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="w-full py-2 px-4 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium text-sm transition-colors"
            >
              Agendar Exame Pendente
            </button>
          </Card>
        )}
      </div>

      <DatePickerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={handleConfirmSchedule}
      />

      <Toast
        message="Agendado! +100 pts creditados"
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  )
}
