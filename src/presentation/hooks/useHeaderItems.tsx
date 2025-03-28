import { HeaderItemProps } from "@/app/[lang]/(app)/layout/Header"
import { Button } from "../ds/button"
import { Dot } from "../components/dot"
import { ScanSearch, Wrench } from "lucide-react"
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

type TItems = {
  label?: string,
  path?: string
}

type useHeaderItemsProps = {
  type?: THeaderType
  user?: User | null
  userRol: TUserRol
  handleNavigate: (path?: string) => void
  handleLogout: () => void
}

export function useHeaderItems({
  type = 'basic',
  user,
  userRol = 'GUEST',
  handleNavigate,
}: useHeaderItemsProps): { itemsHeader: Array<HeaderItemProps<TItems>> } {
  const { pathname } = useCurrentPath()
  const { theme, setTheme } = useTheme()
  console.log(userRol, pathname, type, 'ROL')

  const handleChangeTheme = () => theme == "dark" ? setTheme("light") : setTheme("dark")

  /*
  const buttons = useMemo(() => {
    return {
      'empty': [],
      'basic': [
        { label: 'Empezar', variant: 'default', icon: <Icon name='PlusIcon' className="h-6 w-6 ml-2 text-background" />, classes: 'hidden md:flex h-10 min-w-[100px]', path: '/scan', onClick: !isLoggedIn ? () => { setIsAuthModal(true), setTypeForm('signin') } : () => handleNavigate('/freewheels/onboarding'), visible: true },
      ],
      'default': [
        { label: 'Acerca de nosotros', variant: 'ghost', classes: 'hidden sm:hidden md:hidden lg:block h-10 min-w-[100px]', path: '/about-us', onClick: (path: string) => handleNavigate(path), visible: type !== 'default' },
        { label: 'Patetene Scan', variant: 'gradient', icon: <ScanSearch className='h-6 w-6 ml-2' />, classes: 'hidden md:flex h-10 min-w-[100px]', path: '/scan', onClick: (path: string) => handleNavigate(path), visible: true },
        { label: `Abrí tu ${APPLICATION.appName}`, variant: 'default', icon: <Wrench className='h-6 w-6 ml-2' />, classes: 'hidden md:flex h-10', path: '/freewheels', onClick: (path: string) => handleNavigate(path), visible: existsWs?.length === 0 },
        { label: `Modo ${APPLICATION.appName}`, variant: 'outline', classes: 'hidden md:flex h-10', path: '/freewheels/home', onClick: (path: string) => handleNavigate(path), visible: existsWs?.length > 0 && isLoggedIn }
      ],
      'detail': [],
      'freewheel': [
        { label: `Modo ${APPLICATION.appName}`, icon: '', variant: 'outline', dot: true, visible: true },
        { icon: <Bell className="h-12 w-12 text-foreground" />, onClick: () => {}, visible: true, dot: true, classes: 'rounded-full h-14 w-14', variant: 'ghost' }
      ],
    }
  }, [isLoggedIn, existsWs])
  */


  const menu = useMemo(() => {
    const boothItem: Array<HeaderItemProps<TItems>> = [
      {
        id: 'them',
        visible: true,
        format: () => (<DropdownMenuSeparator />)
      },
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
      {
        id: 'signout',
        label: 'Cerrar sesión',
        visible: userRol !== 'GUEST',
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
          </DropdownMenuItem>
        )
      },
    ]
    let arrMenu: Array<HeaderItemProps<TItems>> = []
    
    arrMenu = [
      {
        id: 'messages',
        label: 'Mensajes',
        path: '/messages',
        visible: true,
        format: ({ label, path }) => (
          <DropdownMenuItem onClick={() => handleNavigate && handleNavigate(path)}>
            {label}
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
      ...boothItem,
    ]

    return arrMenu
    // if (userRol !== 'GUEST') {
    //   return [
    //     { label: 'Mensajes', path: '/messages', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { label: 'Mi agenda', path: '/reservations', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { label: 'Favoritos', path: '/favorites', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { separator: true },
    //     { label: 'Poné tu FreeWheels', path: '/freewheels', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { label: 'Invita un FreeWheels', path: '/invite', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { label: 'Cuenta', path: '/account', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { separator: true },
    //     { ...boothItem },
    //     { label: 'Acerca de nosotros', path: '/about-us', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { label: 'Centro de ayuda', path: '/contact', onClick: (path?: string) => handleNavigate(path), visible: false },
    //     { label: 'Cerrar sesión', onClick: handleLogout, visible: true },
    //   ]
    // } else {
    //   return [
    //     { label: 'Iniciar sesión', onClick: () => { setIsAuthModal(true), setTypeForm('signin') }, visible: true },
    //     { label: 'Registrate', onClick: () => { setIsAuthModal(true), setTypeForm('signup') }, visible: true },
    //     { separator: true },
    //     { label: 'Poné tu FreeWheels', path: '/freewheels', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { label: 'Invita un FreeWheels', path: '/invite', onClick: (path?: string) => handleNavigate(path), visible: true },
    //     { separator: true },
    //     { ...boothItem },
    //     { label: 'Acerca de nosotros', path: '/about-us', onClick: (path: string) => handleNavigate(path), visible: true },
    //     { label: 'Centro de ayuda', path: '/contact', onClick: () => {}, visible: true },
    //   ]
    // }
  }, [user, userRol, theme])

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
      <Button onClick={() => handleNavigate && handleNavigate(path)} variant='outline' className='hidden md:flex h-10 min-w-[100px]'>
        {label}
        <Wrench className='h-6 w-6 ml-2' />
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
  const itemsHeader: Array<HeaderItemProps<TItems>> = [
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
    // ...(userRol === 'FREEWHEELS' ? [...buttonAdmin] : userRol === 'AUTHENTICATED' ? [...buttonFreewheel] : [...buttonGuest])
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

  const headersType: { [key in THeaderType]: Array<HeaderItemProps<TItems>> } = {
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
        visible: true,
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
          <Button onClick={() => handleNavigate && handleNavigate(path)} className='hidden md:flex h-10 min-w-[100px]'>
            {label}
            <Icon name='PlusIcon' className="h-6 w-6 ml-2 text-background" />
          </Button>
        ),
        visible: true,
      },
    ],
    'detail': [],
    'workshop': [],
  }

  return  { itemsHeader: headersType[type] }
}
