import { Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../screens/Home'
import PreAnamnese from '../screens/PreAnamnese'
import Confirmacao from '../screens/Confirmacao'
import FilaEspera from '../screens/FilaEspera'
import Agendamentos from '../screens/Agendamentos'
import Beneficios from '../screens/Beneficios'
import Perfil from '../screens/Perfil'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/teleconsulta" element={<PreAnamnese />} />
        <Route path="/teleconsulta/confirmacao" element={<Confirmacao />} />
        <Route path="/teleconsulta/fila" element={<FilaEspera />} />
        <Route path="/agendamentos" element={<Agendamentos />} />
        <Route path="/beneficios" element={<Beneficios />} />
        <Route path="/perfil" element={<Perfil />} />
      </Route>
    </Routes>
  )
}
