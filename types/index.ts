export interface Service {
  id: string
  title: string
  description: string
  details: string[]
}

export interface Category {
  id: string
  name: string
  color: string
  created_at: string
}

export interface Post {
  id: string
  title: string
  content: string
  is_published: boolean
  category_id: string | null
  categories?: Category | null
  image_url: string | null
  image_urls: string[] | null
  created_at: string
  updated_at: string
}

export interface AdminUser {
  id: string
  username: string
  password_hash: string
  created_at: string
}

export interface CenterInfo {
  name: string
  address: string
  shortAddress: string
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
