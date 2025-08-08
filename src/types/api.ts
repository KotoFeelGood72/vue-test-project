// Типы для API

export interface Avatar {
  id: number
  src: string
  file_name: string
  ext: string
}

export interface UserInfo {
  first_name: string
  last_name: string
  middle_name: string | null
}

export interface UserProfile {
  id: number
  avatar: Avatar
  user: UserInfo
  about_text: string
}

// Типы для запросов
export interface EditUserRequest {
  id: number
  avatar_id: number
  user: {
    first_name: string
    last_name: string
    middle_name: string | null
  }
  about_text: string | null
}

export interface FileUploadResponse {
  file_id: number
}

// Типы для валидации
export interface ValidationError {
  field: string
  message: string
}

export interface ValidationResult {
  isValid: boolean
  errors: ValidationError[]
}
