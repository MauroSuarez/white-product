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
      { label: 'Mensajes', path: '/es/app/messages' },
      { label: 'Mi agenda', path: '/es/app/reservations' },
      { label: 'Favoritos', path: '/es/app/favorites' },
      { separator: true },
      { label: 'Poné tu FreeWheels', path: '/es/app/messages' },
      { label: 'Invita un FreeWheels', path: '/es/app/invite' },
      { label: 'Cuenta', path: '/es/app/account' },
      { separator: true },
      { label: 'Tema', path: '/es/app/contact' },
      { label: 'Centro de ayuda', path: '/es/app/contact' },
      { label: 'Cerrar sesión', action: 'logout' },
    ]
  } else {
    return [
      { label: 'Iniciar sesión', action: 'signin' },
      { label: 'Registrate', action: 'signup' },
      { separator: true },
      { label: 'Poné tu FreeWheels', path: '/es/app/messages' },
      { label: 'Invita un FreeWheels', path: '/es/app/invite' },
      { separator: true },
      { label: 'Tema', icon: 'SunIcon', action: 'theme' },
      { label: 'Centro de ayuda', path: '/es/app/contact' },
    ]
  }
}