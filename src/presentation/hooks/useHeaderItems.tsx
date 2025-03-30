import { HeaderItemProps } from "@/app/[lang]/(app)/layout/Header"
import { Button } from "../ds/button"
import { Dot } from "../components/dot"
import { Bell, ScanSearch, Wrench } from "lucide-react"
import { TUserRol } from "@/core/domain/entities/UserRol"
import { User } from "@/core/domain/entities/User"
import { useCurrentPath } from "./useCurrentPath"
import { THeaderType } from "@/app/[lang]/(app)/AppLayout"
import { Typography } from "../ds/typography"
import { Icon } from "../ds/icon"
import { useMemo } from "react"
import { useTheme } from "next-themes"
import { DropDown as DropdownMenu } from "@/presentation/components/dropdown-menu"
import { DropdownMenuItem, DropdownMenuSeparator } from "@/presentation/ds/dropdown-menu"
import { CustomAvatar } from "../components/custom-avatar"
import { TAuthModal, TAuthModalType } from "@/infraestructure/stores/authStore"

type TItems = {
  label?: string,
  path?: string
}

type useHeaderItemsProps = {
  type?: THeaderType
  user?: User | null
  userRol: TUserRol
  handleAuthModal: (modalAuth: TAuthModal) => void
  handleNavigate: (path?: string) => void
  handleSignOut: () => void
}

// type DropDownMenu = {
//   [key in THeaderType]: {
//     [key in TUserRol]: Array<HeaderItemProps<TItems>>
//   }
// }

export function useHeaderItems({
  type = 'basic',
  user,
  userRol = 'GUEST',
  handleNavigate,
  handleSignOut,
  handleAuthModal,
}: useHeaderItemsProps): { itemsHeader: Array<HeaderItemProps<TItems>> } {
  const { pathname } = useCurrentPath()
  const { theme, setTheme } = useTheme()
  console.log(userRol, pathname, type, 'ROL')

  const handleChangeTheme = () => theme == "dark" ? setTheme("light") : setTheme("dark")

  const menu = useMemo(() => {
    const separator: Array<HeaderItemProps<TItems>> = [
      {
        id: 'separator',
        visible: true,
        format: () => (<DropdownMenuSeparator />)
      },
    ]
    const boothItem: Array<HeaderItemProps<TItems>> = [
      {
        id: 'account',
        label: 'Cuenta',
        path: '/account',
        visible: userRol !== 'GUEST',
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
      {
        id: 'profile',
        label: 'Perfil',
        path: '/profile',
        visible: userRol !== 'GUEST',
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
      ...separator,
      {
        id: 'setup',
        label: 'Abrí tu FreeWheel',
        path: '/freewheels',
        visible: (type === 'default' || type === 'detail') && userRol === 'AUTHENTICATED',
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
      {
        id: 'shared',
        label: 'Invita un FreeWheels',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
      ...separator,
      {
        id: 'theme',
        label: 'Tema',
        visible: true,
        format: ({ label }) => (
          <DropdownMenuItem onClick={handleChangeTheme}>
            <div className="flex flex-wrap justify-between w-full items-center">
              {label}
              <div className="text-foreground"><Icon name={theme === "light" ? 'MoonIcon' : 'SunIcon'} /></div>
            </div>
          </DropdownMenuItem>
        )
      },
      {
        id: 'about-us',
        label: 'Acerca de nosotros',
        path: '/about-us',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
      {
        id: 'contact',
        label: 'Contáctanos',
        path: '/contact',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
      ...separator,
      {
        id: 'signout',
        label: 'Cerrar sesión',
        visible: userRol !== 'GUEST',
        format: ({ label }) => (
          <DropdownMenuItem onClick={handleSignOut}>
            {label}
          </DropdownMenuItem>
        )
      },
    ]
    const arrMenuAdmin: Array<HeaderItemProps<TItems>> = [
      ...boothItem
    ]
    
    const arrMenuAuthenticate: Array<HeaderItemProps<TItems>> = [
      {
        id: 'messages',
        label: 'Mensajes',
        path: '/messages',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            <div className="flex flex-wrap justify-between w-full items-center">
              {label}
              <Dot className="relative" />
            </div>
          </DropdownMenuItem>
        )
      },
      {
        id: 'reservations',
        label: 'Reservas',
        path: '/reservations',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
      {
        id: 'favorites',
        label: 'Favoritos',
        path: '/favorites',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
      ...separator,
      ...boothItem,
    ]

    const arrMenuGuest: Array<HeaderItemProps<TItems>> = [
      {
        id: 'sign-in',
        label: 'Iniciar sesión',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleAuthModal && handleAuthModal({ open: true, type: 'signin' })}>
            {label}
          </DropdownMenuItem>
        )
      },
      {
        id: 'sign-up',
        label: 'Registrarse',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() =>  handleAuthModal && handleAuthModal({ open: true, type: 'signup' })}>
            {label}
          </DropdownMenuItem>
        )
      },
      ...separator,
      ...boothItem,
    ]

    if (userRol === 'GUEST') {
      return arrMenuGuest
    } else if(userRol === 'AUTHENTICATED') {
      return arrMenuAuthenticate
    } else {
      return arrMenuAdmin
    }
  }, [user, userRol, theme, type])

  const headersType: { [key in THeaderType]: Array<HeaderItemProps<TItems>> } = useMemo(() => {
    const modePanelAdmin: Array<HeaderItemProps<TItems>> = [{
      id: 'setup',
      label: 'Modo panel',
      path: '/freewheels/home',
      format: ({ label, path }) => (
        <Button onClick={() => handleNavigate && handleNavigate(path)} variant='outline' className='relative hidden md:flex h-10 min-w-[100px]'>
          {label}
          <Wrench className='h-6 w-6 ml-2' />
          <Dot />
        </Button>
      ),
      visible: true,
    }]
    const modeFreewheel: Array<HeaderItemProps<TItems>> = [{
      id: 'setup',
      label: 'Modo FreeWheels',
      path: '/',
      format: ({ label, path }) => (
        <Button onClick={() => handleNavigate && handleNavigate(path)} variant='outline' className='relative hidden md:flex h-10 min-w-[100px]'>
          {label}
          <Wrench className='h-6 w-6 ml-2' />
          <Dot />
        </Button>
      ),
      visible: true,
    }]
    const goSetup: Array<HeaderItemProps<TItems>> = [{
      id: 'setup',
      label: 'Abri tu FreeWheels',
      path: '/freewheels',
      format: ({ label, path }) => (
        <Button onClick={() => handleNavigate && handleNavigate(path)} className='hidden md:flex h-10 min-w-[100px]'>
          {label}
          <Wrench className='h-6 w-6 ml-2' />
        </Button>
      ),
      visible: true,
    }]
    const goScan: Array<HeaderItemProps<TItems>> = [
      {
        id: 'scan',
        label: 'Patente Scan',
        path: '/scan',
        format: ({ label, path }) => (
          <Button onClick={() => handleNavigate && handleNavigate(path)} variant='gradient' className='hidden md:flex h-10 min-w-[100px]'>
            {label}
            <ScanSearch className='h-6 w-6 ml-2' />
          </Button>
        ),
        visible: true,
      },
    ]
    const dropDownMenu: Array<HeaderItemProps<TItems>> = [
      {
        id: 'drop-down-menu',
        visible: true,
        format: () => (
          <DropdownMenu items={menu}>
            <div className="rounded-full px-2 border border-gray-300 items-center h-12 flex justify-center cursor-pointer">
              <div className="flex justify-center space-x-2 items-center">
                <Icon name="HamburgerMenuIcon" className="h-5 w-5 text-foreground" />
                <CustomAvatar user={user as User} />
              </div>
            </div>
          </DropdownMenu>
        )
      }
    ]

    return {
      'empty': [],
      'default': [
        {
          id: 'about-us',
          label: 'Acerca de nosotros',
          path: '/about-us',
          format: ({ label, path }) => (
            <Button onClick={() => handleNavigate && handleNavigate(path)} variant='ghost' className='hidden md:flex h-10 min-w-[100px]'>
              {label}
            </Button>
          ),
          visible: userRol === 'GUEST',
        },
        ...goScan,
        {
          id: 'my-services',
          label: 'Mis servicios',
          path: '/my-services',
          format: ({ label, path }) => (
            <Button onClick={() => handleNavigate && handleNavigate(path)} variant={'outline'} className='relative hidden md:flex h-10 min-w-[100px]'>
              {label}
              <Dot />
            </Button>
          ),
          visible: userRol !== 'GUEST',
        },
        ...(userRol === 'AUTHENTICATED' ? [...modeFreewheel] : userRol === 'FREEWHEELS' ? [...modePanelAdmin] : [...goSetup]),
        ...dropDownMenu
      ],
      'basic': [
        {
          id: 'text-start',
          label: '¿Todo listo para poner tu FreeWheels?',
          format: ({ label, path }) => (
            <Typography className='font-semibold' variant='h4'>
              {label}
            </Typography>
          ),
          visible: true,
        },
        {
          id: 'setup',
          label: 'Empezar',
          path: '/freewheels/onboarding',
          format: ({ label, path }) => (
            <Button onClick={() => userRol === 'GUEST' ? handleAuthModal && handleAuthModal({ open: true, type: 'signin' }) : handleNavigate && handleNavigate(path)} className='hidden md:flex h-10 min-w-[100px]'>
              {label}
              <Icon name='PlusIcon' className="h-6 w-6 ml-2 text-background" />
            </Button>
          ),
          visible: true,
        },
      ],
      'detail': [
        ...goScan,
        ...modePanelAdmin,
        ...dropDownMenu
      ],
      'workshop': [
        {
          id: 'now',
          label: 'Hoy',
          format: ({ label }) => (
            <Button variant='ghost' className='hidden md:flex h-10 min-w-[100px]'>
              {label}
            </Button>
          ),
          visible: true
        },
        {
          id: 'reservations',
          label: 'Reservas',
          format: ({ label }) => (
            <Button variant='ghost' className='hidden md:flex h-10 min-w-[100px]'>
              {label}
            </Button>
          ),
          visible: true
        },
        {
          id: 'workshop',
          label: 'Anuncios',
          format: ({ label }) => (
            <Button variant='ghost' className='hidden md:flex h-10 min-w-[100px]'>
              {label}
            </Button>
          ),
          visible: true
        },
        {
          id: 'message',
          label: 'Mensajes',
          format: ({ label })  => (
            <Button variant='ghost' className='hidden md:flex h-10 min-w-[100px] relative'>
              {label}
              <Dot />
            </Button>
          ),
          visible: true
        },
        {
          id: 'separator-div',
          format: ()  => (
            <div className='lg:w-1/5 md:w-1/5 lg:pr-10 md:pr-10 px-5 border border-red-500' />
          ),
          visible: true
        },
        ...modeFreewheel,
        {
          id: 'notification',
          format: () => (
            <Button variant='ghost' className="rounded-full h-10 w-10">
              <div className="relative w-auto h-auto">
                <Bell className="h-6 w-6 text-foreground" />
                <Dot />
              </div>
            </Button>
          ),
          visible: true
        },
        ...dropDownMenu
      ],
      'scan': [
        ...dropDownMenu
      ]
    }
  }, [user, userRol, theme, type])

  return  { itemsHeader: headersType[type] }
}
