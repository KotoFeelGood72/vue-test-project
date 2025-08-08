import type { UserProfile, EditUserRequest, FileUploadResponse } from '@/types/api'
import userData from '@/mocks/userData.json'
import { generateRandomNumber } from '@/utils/genRanNum'
import { delay } from '@/utils/delay'

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

// GET /user/get-user
export const getUser = async (): Promise<UserProfile> => {
  try {
    await delay(1000)
    console.log('Данные пользователя:', userData)
    return userData as UserProfile
  } catch (error) {
    throw error
  }
}

// POST /file/upload
export const uploadFile = async (file: File): Promise<FileUploadResponse> => {
  try {
    console.log('Загрузка файла:', file)

    const formData = new FormData()
    formData.append('file', file)
    await delay(1000)

    const response = { file_id: generateRandomNumber(1, 1000) }
    return response
  } catch (error) {
    throw error
  }
}

// PUT /user/edit
export const editUser = async (data: EditUserRequest): Promise<UserProfile> => {
  try {
    await delay(1000)

    const updatedData = mergeUserData(userData, data)
    console.log('Данные пользователя обновлены:', updatedData)
    return updatedData as UserProfile
  } catch (error) {
    throw error
  }
}

// Выносим методы
export const ApiService = {
  getUser,
  uploadFile,
  editUser,
}
