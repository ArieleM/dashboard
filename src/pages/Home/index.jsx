import { ArrowLeft } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { DoughnutComponent } from '../../components/DoughnutComponent'
import { LineComponent } from '../../components/LineComponent'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <NavLink to="/">
        <ArrowLeft size={24} />
      </NavLink>
      <h1>Dashboard</h1>
      <LineComponent />
      <DoughnutComponent />
    </HomeContainer>
  )
}
