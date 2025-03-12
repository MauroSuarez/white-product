// import React, { createContext } from 'react'
// import { useInitMock, useGetProfile, useSetFlowName } from "hooks"
// import { Profile } from 'interfaces/Profile'
// // import { Grid } from '@mui/material'
// // import { Breadcrumbs } from 'components'

// interface AppContextProps {
//   profile: Profile
//   setProfile(profile: Profile): void
// }

// interface AppProviderProps {
//   children: React.ReactNode
// }

// const AppContext = createContext<AppContextProps>({} as AppContextProps)

// function AppProvider({ children }: AppProviderProps): JSX.Element {
//   useSetFlowName()
//   useInitMock()
//   const { profile, setProfile } = useGetProfile()
//   return (
//     <AppContext.Provider
//       value={{
//         profile: profile as Profile,
//         setProfile
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   )
// }

// export { AppContext }
// export default AppProvider