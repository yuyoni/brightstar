export interface Service {
  id: string
  title: string
  description: string
  details: string[]
}

export interface CenterInfo {
  name: string
  address: string
  phone: string
  email: string
  hours: {
    weekday: string
    weekend: string
  }
  location: {
    lat: number
    lng: number
  }
}
