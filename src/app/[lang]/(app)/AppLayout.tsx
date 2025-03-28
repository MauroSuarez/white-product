import { useRolUser } from "@/presentation/hooks/useRolUser"
import { Footer } from "./layout/Footer"
import { Header } from "./layout/Header"
import { useHeaderItems } from "@/presentation/hooks/useHeaderItems"
import { useRouter } from "next/navigation"
import { useAuthStore } from "@/infraestructure/stores/authStore"
import { useState } from "react"
import { TypeAuthForm } from "./auth/Form"
import { CustomModal } from "@/presentation/components/custom-modal"

export type THeaderType = 'basic' | 'empty' | 'default' | 'detail' | 'workshop'

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
  const { user, isLoggedIn, token, clearUser, isAuthModal, setIsAuthModal, setUser, setToken } = useAuthStore()
  const { userRol } = useRolUser(user, isLoggedIn)
  const [typeForm, setTypeForm] = useState<TypeAuthForm>('reset') 

  const handleNavigate = (path?: string) => router.push(`/es/${path}`)

  const { itemsHeader } = useHeaderItems({
    type,
    user,
    userRol,
    handleNavigate
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
            />
          )}
          {filters}
        </div>
        {children}
        <Footer />
      </section>
      <CustomModal
        isOpen={isAuthModal}
        onClose={() => setIsAuthModal(false)}
        title={`${typeForm === 'reset' ? 'Recupear contraseña' : typeForm === 'signin' ? 'Inicia sesión' : 'Registrate'}`}
      >
        <div>Hola mundo</div>
        {/* <AuthForm
          isLoading={isLoadingFech}
          isSuccess={isSuccessFetch}
          isError={isErrorFetch}
          handleSignIn={handleFormSignIn}
          handleSignUp={handleFormSignUp}
          handleResetPassword={handleFormResetPassword}
          handleTypeForm={handleTypeForm}
          typeForm={typeForm}
        /> */}
      </CustomModal> 
    </>
  )
}
