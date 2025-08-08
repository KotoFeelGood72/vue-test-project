import type { ValidationResult, ValidationError } from '@/types/api'

const CYRILLIC_REGEX = /^[а-яё\s.,!?-]+$/i
// Валидация поля
const validateField = (value: string, isRequired: boolean = true): boolean => {
  if (!isRequired && (!value || value.trim() === '')) return true
  return value.length >= 2 && CYRILLIC_REGEX.test(value)
}

// Валидация формы редактирования
export const validateEditForm = (data: {
  first_name: string
  last_name: string
  middle_name: string | null
  about_text: string | null
}): ValidationResult => {
  const errors: ValidationError[] = []

  if (!validateField(data.first_name)) {
    errors.push({
      field: 'first_name',
      message: 'Имя должно содержать минимум 2 символа и только кириллицу',
    })
  }

  if (!validateField(data.last_name)) {
    errors.push({
      field: 'last_name',
      message: 'Фамилия должна содержать минимум 2 символа и только кириллицу',
    })
  }

  if (!validateField(data.middle_name || '', false)) {
    errors.push({
      field: 'middle_name',
      message: 'Отчество должно содержать минимум 2 символа и только кириллицу, или быть пустым',
    })
  }

  if (!validateField(data.about_text || '', false)) {
    errors.push({
      field: 'about_text',
      message: 'Описание должно содержать минимум 2 символа и только кириллицу, или быть пустым',
    })
  }

  return { isValid: errors.length === 0, errors }
}
