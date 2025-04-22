import { ISignUp } from "../../entities/Auth"
import { fetchSignUp } from "../../services/fetchAuth"
import { fetchInsertUser, fetchUpdateUserTag } from "../../services/fetchUsers"
import { normalizeUserUseCase } from "../user//normalizeUserUseCase"
import { freewheelsTagUserUseCase } from "../user/freewheelsTagUseCase"

export const signUpWithMailUseCase = async (dataUser: ISignUp) => {
  try {
    const authUser = await fetchSignUp(
      dataUser.email,
      dataUser.password
    )

    if (!authUser.user) {
      // Caso especial: usuario ya existe pero no hubo error técnico
      throw new Error('El email ya está registrado')
    }

    const normalizeUser = await normalizeUserUseCase({
      id_user: authUser.id,
      email: authUser.email,
      first_name: dataUser.firstName,
      last_name: dataUser.lastName,
      id_rol: 2,
    })

    const user = await fetchInsertUser(normalizeUser)

    const fwTag = freewheelsTagUserUseCase(user[0])

    const updateTagUser = await fetchUpdateUserTag(user[0], fwTag)
    
    return updateTagUser
  } catch (err) {
    throw err
  }
}

/*
location: {
    address:
      "Lisandro Medina 2176, Caseros, Provincia de Buenos Aires, Argentina",
    lat: -34.6018761,
    lng: -58.5634204,
    name: "Lisandro Medina 2176",
    placeId: "ChIJOcTMwIO5vJURIIj8Os9tXdI",
  },
*/
