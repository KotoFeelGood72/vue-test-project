import type { FileUploadResult } from '@/utils/fileUpload'

export interface FileInputTypes {
  modelValue: FileUploadResult | null
  accept?: string
  name: string
  id: string
  disabled: boolean
  required: boolean
  placeholder?: string
  showPreview?: boolean
  label?: string
}

export interface FileInputEmits {
  (e: 'update:modelValue', value: FileUploadResult | null): void
  (e: 'error', error: string): void
}
