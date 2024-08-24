export interface IDeveloper {
  id: string

  firstName?: string
  lastName?: string

  email: string

  revenue?: number
}

export type DeveloperFields = keyof IDeveloper;
