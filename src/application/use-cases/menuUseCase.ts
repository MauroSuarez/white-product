import { AuthStore } from "@/infraestructure/stores/authStore";
import { IconNames } from "@/presentation/ds/icon";

export type MenuItem = {
  label?: string
  icon?: IconNames | any
  path?: string
  separator?: boolean
  action?: 'logout' | 'signin' | 'signup' | 'theme'
}

export const menuUseCase = (authStore: any): MenuItem[] => {
  const { isLoggedIn } = authStore.getState()

  if (isLoggedIn) {
    return [
      { label: 'Mensajes', path: '/es/messages' },
      { label: 'Mi agenda', path: '/es/reservations' },
      { label: 'Favoritos', path: '/es/favorites' },
      { separator: true },
      { label: 'Poné tu FreeWheels', path: '/es/messages' },
      { label: 'Invita un FreeWheels', path: '/es/invite' },
      { label: 'Cuenta', path: '/es/account' },
      { separator: true },
      { label: 'Tema', icon: 'SunIcon', action: 'theme' },
      { label: 'Centro de ayuda', path: '/es/contact' },
      { label: 'Cerrar sesión', action: 'logout' },
    ]
  } else {
    return [
      { label: 'Iniciar sesión', action: 'signin' },
      { label: 'Registrate', action: 'signup' },
      { separator: true },
      { label: 'Poné tu FreeWheels', path: '/es/messages' },
      { label: 'Invita un FreeWheels', path: '/es/invite' },
      { separator: true },
      { label: 'Tema', icon: 'SunIcon', action: 'theme' },
      { label: 'Centro de ayuda', path: '/es/contact' },
    ]
  }
}