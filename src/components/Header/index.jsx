import { NavLink } from 'react-router-dom'
import { UserCircle } from 'phosphor-react'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src="" alt="" />
      </span>
      <nav>
        <NavLink to="/home" title="Timer">
          <UserCircle size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
