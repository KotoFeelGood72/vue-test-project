import type { UserProfile, EditUserRequest, FileUploadResponse } from '@/types/api'
import { delay } from '@/utils/delay'
import userData from '@/mocks/userData.json'
import { generateRandomNumber } from '@/utils/genRanNum'

// Обновление данных пользователя
const mergeUserData = (originalData: UserProfile, updateData: EditUserRequest): UserProfile => ({
  ...originalData,
  ...updateData,
  about_text: updateData.about_text || originalData.about_text,
  avatar: {
    ...originalData.avatar,
    id: updateData.avatar_id,
  },
})

// Получение данных пользователя
export const getUser = async (): Promise<UserProfile> => {
  await delay(1000)
  return userData as UserProfile
}

export const uploadFile = async (file: File): Promise<FileUploadResponse> => {
  console.log('Загруженый файл:', file.name)
  await delay(1000)

  const response = { file_id: generateRandomNumber(1, 1000) }
  return response
}

// Редактирование пользователя
export const editUser = async (data: EditUserRequest): Promise<UserProfile> => {
  await delay(1000)

  const updatedData = mergeUserData(userData, data)
  return updatedData as UserProfile
}

// Выносим методы
export const ApiService = {
  getUser,
  uploadFile,
  editUser,
}
