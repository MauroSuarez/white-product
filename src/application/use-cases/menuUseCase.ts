
export const menuUseCase = (authStore: any) => {
  const { isLoggedIn } = authStore.getState()

  if (isLoggedIn) {
    return [
      { label: 'Inicio', path: '/' },
      { label: 'Perfil', path: '/profile' },
      { label: 'Cerrar sesión', path: '/logout' },
    ];
  } else {
    return [
      { label: 'Inicio', path: '/' },
      { label: 'Iniciar sesión', path: '/login' },
      { label: 'Registrarse', path: '/register' },
    ];
  }
}