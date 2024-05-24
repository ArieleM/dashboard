import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import * as S from './styles'
import { Sidebar } from '../../components/Sidebar'

export function DefaultLayout() {
  return (
    <S.LayoutContainer>
      <Header />
      <S.ContentContainer>
        <Sidebar />
        <Outlet />
      </S.ContentContainer>
    </S.LayoutContainer>
  )
}
