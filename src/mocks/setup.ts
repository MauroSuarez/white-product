export const mockSetupWorkshopResponse = {
  id: "1", // id_workshop esto NO se envia al formulario de alta
  is_draft: false, // si es un borrador queda en true
  is_active: true, // si es un taller activo queda en true
  is_published: true, // si es un taller publicado queda en true
  rating: 4.5, // cantidad de estrellas
  reviews: 10, // cantidad de reseñas
  phone: "+54 11 1234-5678", // telefono del taller
  website: "https://www.example.com", // url del taller
  accepted_budgets: true, // si acepta presupuestos queda en true
  accepted_appointments: true, // si acepta turnos queda en true
  created_at: "2023-10-01T12:00:00Z", // fecha de creacion
  updated_at: "2023-10-01T12:00:00Z", // fecha de actualizacion
  category: "2",
  location: {
    address:
      "Lisandro Medina 2176, Caseros, Provincia de Buenos Aires, Argentina",
    lat: -34.6018761,
    lng: -58.5634204,
    name: "Lisandro Medina 2176",
    placeId: "ChIJOcTMwIO5vJURIIj8Os9tXdI",
  },
  images: [
    {
      id: "q7j1ya4",
      file: {},
      preview:
        "blob:http://localhost:3000/af9da49d-9ef8-4bc4-b19b-3322c7e3ad8d",
    },
    {
      id: "dn8w6t5",
      file: {},
      preview:
        "blob:http://localhost:3000/c12f9b44-4046-42e4-ae22-303080e57b9b",
    },
    {
      id: "zt7jo14",
      file: {},
      preview:
        "blob:http://localhost:3000/eacbefe2-6f02-421f-a0e2-6551259b6bd1",
    },
    {
      id: "6mngcpd",
      file: {},
      preview:
        "blob:http://localhost:3000/154a1b34-1d0c-42f0-a87e-06086d803e49",
    },
  ],
  socialName: "Gomería el corneta",
  description: "Todo para tu auto",
  schedule: {
    monday: {
      open: true,
      openingTime: "12:12",
      closingTime: "14:16",
    },
    tuesday: {
      open: true,
      openingTime: "14:16",
      closingTime: "14:17",
    },
    wednesday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
    thursday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
    friday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
    saturday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
    sunday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
  },
  basicServices: ["11", "12", "5", "2", "4", "3"],
  amenities: ["4", "1", "7", "6"],
}

// Example of a mock setup for a workshop
export const mockSetupWorkshop = {
  category: "2",
  location: {
    address:
      "Lisandro Medina 2176, Caseros, Provincia de Buenos Aires, Argentina",
    lat: -34.6018761,
    lng: -58.5634204,
    name: "Lisandro Medina 2176",
    placeId: "ChIJOcTMwIO5vJURIIj8Os9tXdI",
  },
  images: [
    {
      id: "q7j1ya4",
      file: {},
      preview:
        "blob:http://localhost:3000/af9da49d-9ef8-4bc4-b19b-3322c7e3ad8d",
    },
    {
      id: "dn8w6t5",
      file: {},
      preview:
        "blob:http://localhost:3000/c12f9b44-4046-42e4-ae22-303080e57b9b",
    },
    {
      id: "zt7jo14",
      file: {},
      preview:
        "blob:http://localhost:3000/eacbefe2-6f02-421f-a0e2-6551259b6bd1",
    },
    {
      id: "6mngcpd",
      file: {},
      preview:
        "blob:http://localhost:3000/154a1b34-1d0c-42f0-a87e-06086d803e49",
    },
  ],
  socialName: "Gomería el corneta",
  description: "Todo para tu auto",
  schedule: {
    monday: {
      open: true,
      openingTime: "12:12",
      closingTime: "14:16",
    },
    tuesday: {
      open: true,
      openingTime: "14:16",
      closingTime: "14:17",
    },
    wednesday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
    thursday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
    friday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
    saturday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
    sunday: {
      open: false,
      openingTime: "",
      closingTime: "",
    },
  },
  basicServices: ["11", "12", "5", "2", "4", "3"],
  amenities: ["4", "1", "7", "6"],
};
