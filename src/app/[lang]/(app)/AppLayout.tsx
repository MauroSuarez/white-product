import { useEffect } from "react"
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { useHeaderItems } from "@/presentation/hooks/useHeaderItems"
import { useRouter } from "next/navigation"
import { TAuthModal, useAuthStore } from "@/infraestructure/stores/authStore"
import { AuthForm } from "./auth/Form"
import { CustomModal } from "@/presentation/components/custom-modal"
import { useCustomMutation } from "@/presentation/hooks/useCustomMutation"
import { fetchResetPassword, fetchSignOut } from "@/core/domain/services/fetchAuth"
import { signUpWithMailUseCase } from "@/core/domain/use-cases/auth/signUpWithMailUseCase"
import { signInWithMailUseCase } from "@/core/domain/use-cases/auth/signInWithMailUseCase"
import { toast } from "@/presentation/hooks/useToast"
import { useCurrentPath } from "@/presentation/hooks/useCurrentPath"
import { displayName } from '@/presentation/utils/stringHelper'
import { useAppStore } from "@/infraestructure/stores/appStore"
import { Splash } from "@/presentation/components/splash"

export type THeaderType = 'basic' | 'empty' | 'default' | 'detail' | 'workshop' | 'scan'

interface AppLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  subHeader?: React.ReactNode
  showSearchBar?: boolean
  type?: THeaderType
}

export default function AppLayout({
  children,
  header,
  subHeader,
  showSearchBar = false,
  type,
}: AppLayoutProps) {
  const router = useRouter()
  const { user, clearUser, authModal, setAuthModal, setUser, setToken } = useAuthStore()
  const { breakpoint, showSplash, setShowSplash } = useAppStore()
  const { pathname } = useCurrentPath()
  const signInMutation = useCustomMutation(signInWithMailUseCase, ['signin'], { enabled: false })
  const signOutMutation = useCustomMutation(fetchSignOut, ['signOut'], { enabled: false })
  const signUpMutationUseCase = useCustomMutation(signUpWithMailUseCase, ['signUp'], { enabled: false })
  const resetPasswordMutation = useCustomMutation(fetchResetPassword, ['resetPassword'], { enabled: false })

  const isLoadingFech = signInMutation.isPending || signOutMutation.isPending || resetPasswordMutation.isPending || signUpMutationUseCase.isPending
  const isSuccessFetch = signInMutation.isSuccess || signOutMutation.isSuccess || resetPasswordMutation.isSuccess || signUpMutationUseCase.isSuccess
  const isErrorFetch = signInMutation.isError || signOutMutation.isError || resetPasswordMutation.isError || signUpMutationUseCase.isError

  const handleNavigate = (path?: string) => router.push(`/es/${path}`)

  const verifyGoNavigate = () => {
    const redirectPath: { [key: string]: string } = {
      '/es/freewheels': '/es/freewheels/onboarding',
    }

    router.push(redirectPath[pathname] || pathname)
  }
  
  const handleSignOut = () => {
    signOutMutation.mutateAsync()
      .then(() => {
        clearUser()
        toast({
          variant: "default",
          title: "Hasta luego, nos vemos pronto",
          // description: "There was a problem with your request.",
        })
        handleNavigate('')
      })
  }

  const handleFormSignIn = async (credentials: any) => {
    signInMutation.mutateAsync(credentials)
      .then((resp: any) => {
        setUser({ auth: resp?.auth, user: resp?.user })
        setToken(resp?.auth?.access_token)
        toast({
          variant: "default",
          title: `Bienvenido de nuevo ${displayName(resp?.user)}`,
          // description: "There was a problem with your request.",
        })
        setAuthModal({ ...authModal, open: false })
        verifyGoNavigate()
      }).catch((e) => {})
      .finally(() => {})
  }

  const handleFormSignUp = async (data: any) => {
    signUpMutationUseCase.mutateAsync(data)
      .then((resp: any) => {
        console.log(resp, 'RESPUESTA')
        // setUser(resp?.user)
        // setToken(resp?.access_token)
        // toast({
        //   variant: "default",
        //   title: "Bienvenido!! :)",
        //   // description: "There was a problem with your request.",
        // })
        // setAuthModal({ ...authModal, open: false })
        // verifyRedirect()
      }).catch((e) => {
        console.log(e, 'ERROR')
      })
      .finally(() => {})
  }

  const handleFormResetPassword = async (email: any) => {
    
  }

  const handleAuthModal = (modalAuth: TAuthModal) => {
    setAuthModal(modalAuth)
  }
  
  const timerOffSplash = () => {
    setTimeout(() => {
      setShowSplash(false)
    }, 3000)
  }

  useEffect(() => {
    breakpoint.device === 'mobile' && showSplash
      timerOffSplash()
  }, [showSplash])

  const handleSearch = (searchQuery: string) => handleNavigate(`/search?q=${encodeURIComponent(searchQuery)}`)

  const { itemsHeader } = useHeaderItems({
    type,
    user: user?.user,
    handleAuthModal,
    handleNavigate,
    handleSignOut,
  })

  return (
    <>
      {breakpoint.device === 'mobile' && showSplash ? (
        <Splash />
      ) : (
        <section className="flex min-h-screen h-auto w-full flex-col bg-background">
          <div className="sticky top-0 z-20 bg-background">
            {header ?? (
              <Header
                showSearchBar={showSearchBar}
                headerItems={itemsHeader}
                isLoading={false}
              />
            )}
            {subHeader}
          </div>
          {children}
          <Footer />
        </section>
      )}
      <CustomModal
        isOpen={authModal.open}
        onClose={() => setAuthModal({ ...authModal, open: false })}
        title={`${authModal.type === 'reset' ? 'Recupear contraseña' : authModal.type === 'signin' ? 'Inicia sesión' : 'Registrate'}`}
        showFullscreenWhenMobile={breakpoint.device === 'mobile'}
      >
        <AuthForm
          isLoading={isLoadingFech}
          isSuccess={isSuccessFetch}
          isError={isErrorFetch}
          handleSignIn={handleFormSignIn}
          handleSignUp={handleFormSignUp}
          handleResetPassword={handleFormResetPassword}
          handleTypeForm={handleAuthModal}
          typeForm={authModal.type}
        />
      </CustomModal> 
    </>
  )
}
