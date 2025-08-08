/**
 * Утилита для сплита строк
 * @param strings - массив строк
 * @param separator - разделитель (пробел)
 * @returns возращаем строку
 */
export const buildString = (
  strings: (string | undefined | null)[],
  separator: string = ' ',
): string => {
  return strings.filter(Boolean).join(separator)
}
