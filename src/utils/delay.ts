/**
 * Искусственная задержка (develop)
 * @param ms Количество миллисекунд
 */
export const delay = (ms: number) => new Promise((r) => setTimeout(r, ms))
