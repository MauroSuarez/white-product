
// DEPRECATED!!
import { IconNames } from "@/presentation/ds/icon"

export type MenuItem = {
  label?: string
  icon?: IconNames | any
  path?: string
  separator?: boolean
  onClick: () => void
}
// DEPRECATED!!
export const menuUseCase = (store: any) => {
  const { isLoggedIn } = store.getState()

  if (isLoggedIn) {
    return [
      { label: 'Mensajes', path: '/messages' },
      { label: 'Mi agenda', path: '/reservations' },
      { label: 'Favoritos', path: '/favorites' },
      { separator: true },
      { label: 'Poné tu FreeWheels', path: '/messages' },
      { label: 'Invita un FreeWheels', path: '/invite' },
      { label: 'Cuenta', path: '/account' },
      { separator: true },
      { label: 'Tema', icon: 'SunIcon', action: 'theme' },
      { label: 'Centro de ayuda', path: '/contact' },
      { label: 'Cerrar sesión', action: 'logout' },
    ]
  } else {
    return [
      { label: 'Iniciar sesión', action: 'signin' },
      { label: 'Registrate', action: 'signup' },
      { separator: true },
      { label: 'Poné tu FreeWheels', path: '/messages' },
      { label: 'Invita un FreeWheels', path: '/invite' },
      { separator: true },
      { label: 'Tema', icon: 'SunIcon', action: 'theme' },
      { label: 'Centro de ayuda', path: '/contact' },
    ]
  }
}