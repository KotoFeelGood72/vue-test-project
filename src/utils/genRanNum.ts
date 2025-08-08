/**
 * Генерация случайного числа
 * @param min Минимальное значение
 * @param max Максимальное значение
 */

export const generateRandomNumber = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min
