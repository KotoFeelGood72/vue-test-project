export interface FileUploadResult {
  file: File
  preview?: string
  error?: string
}

export const uploadImage = async (file: File): Promise<FileUploadResult> => {
  // Ограничиваю размер файла (5MB)
  if (file.size > 5 * 1024 * 1024) {
    return {
      file,
      error: 'Файл слишком большой. Максимальный размер: 5MB',
    }
  }

  const preview = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader()

    reader.onload = (e) => {
      const result = e.target?.result as string
      resolve(result)
    }

    reader.onerror = () => {
      reject(new Error('Ошибка чтения файла'))
    }

    reader.readAsDataURL(file)
  })

  return {
    file,
    preview,
  }
}
