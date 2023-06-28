type ItemInMenu = {
  active: boolean
  createdAt: string
  id: number
  name: string
}

export type Menu = {
  date: string
  description?: string
  id?: number
  items: ItemInMenu[]
  meal: string
  state?: boolean
}