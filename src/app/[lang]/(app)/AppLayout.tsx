import { useRolUser } from "@/presentation/hooks/useRolUser"
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { useHeaderItems } from "@/presentation/hooks/useHeaderItems"
import { useRouter } from "next/navigation"
import { TAuthModal, TAuthModalType, useAuthStore } from "@/infraestructure/stores/authStore"
import { useState } from "react"
import { AuthForm } from "./auth/Form"
import { CustomModal } from "@/presentation/components/custom-modal"
import { useCustomMutation } from "@/presentation/hooks/useCustomMutation"
import { fetchResetPassword, fetchSignIn, fetchSignOut, fetchSignUp } from "@/core/domain/services/fetchAuth"
import { toast } from "@/presentation/hooks/useToast"

export type THeaderType = 'basic' | 'empty' | 'default' | 'detail' | 'workshop' | 'scan'

interface AppLayoutProps {
  children: React.ReactNode
  header?: React.ReactNode
  filters?: React.ReactNode
  showSearchBar?: boolean
  type?: THeaderType
}

export default function AppLayout({
  children,
  header,
  filters,
  showSearchBar = false,
  type,
}: AppLayoutProps) {
  const router = useRouter()
  const { user, isLoggedIn, token, clearUser, authModal, setAuthModal, setUser, setToken } = useAuthStore()
  const { userRol } = useRolUser(user, isLoggedIn)
  console.log(userRol, 'a VER')
  const signInMutation = useCustomMutation(fetchSignIn, ['signin'], { enabled: false })
  const signOutMutation = useCustomMutation(fetchSignOut, ['signOut'], { enabled: false })
  const signUpMutation = useCustomMutation(fetchSignUp, ['signUp'], { enabled: false })
  const resetPasswordMutation = useCustomMutation(fetchResetPassword, ['resetPassword'], { enabled: false })

  const isLoadingFech = signInMutation.isPending || signOutMutation.isPending || resetPasswordMutation.isPending || signUpMutation.isPending
  const isSuccessFetch = signInMutation.isSuccess || signOutMutation.isSuccess || resetPasswordMutation.isSuccess || signUpMutation.isSuccess
  const isErrorFetch = signInMutation.isError || signOutMutation.isError || resetPasswordMutation.isError || signUpMutation.isError

  const handleNavigate = (path?: string) => router.push(`/es/${path}`)
  
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
        setUser(resp?.user)
        setToken(resp?.access_token)
        toast({
          variant: "default",
          title: "Bienvenido de nuevo",
          // description: "There was a problem with your request.",
        })
        setAuthModal({ ...authModal, open: false })
        // verifyRedirect()
      }).catch((e) => {})
      .finally(() => {})
  }

  const handleFormSignUp = async (data: any) => {
    console.log(data, 'A VER')
    signUpMutation.mutateAsync(data)
      .then((resp: any) => {
        console.log(resp, 'RESPUESTA')
        // setUser(resp?.user)
        // setToken(resp?.access_token)
        // toast({
        //   variant: "default",
        //   title: "Bienvenido!! :)",
        //   // description: "There was a problem with your request.",
        // })
        setAuthModal({ ...authModal, open: false })
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

  const handleSearch = (searchQuery: string) => handleNavigate(`/search?q=${encodeURIComponent(searchQuery)}`)

  const { itemsHeader } = useHeaderItems({
    type,
    user,
    userRol,
    handleAuthModal,
    handleNavigate,
    handleSignOut,
  })
  
  return (
    <>
      <section className="flex min-h-screen h-auto w-full flex-col bg-background">
        <div className="sticky top-0 z-20 bg-background">
          {header ?? (
            <Header
              showSearchBar={showSearchBar}
              userRol={userRol}
              headerItems={itemsHeader}
              isLoading={false}
            />
          )}
          {filters}
        </div>
        {children}
        <Footer />
      </section>
      <CustomModal
        isOpen={authModal.open}
        onClose={() => setAuthModal({ ...authModal, open: false })}
        title={`${authModal.type === 'reset' ? 'Recupear contraseña' : authModal.type === 'signin' ? 'Inicia sesión' : 'Registrate'}`}
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
