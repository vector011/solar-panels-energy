import theme, { TTheme } from 'styles/theme'

export const scrollTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

export const clamp = (min: number, value: number, max: number): number =>
  Math.max(Math.min(value, max), min)

export const toPixels = (value?: any) =>
  typeof value === 'number' ? `${value}px` : null

export const createProp = (key: keyof TTheme, prop: string, value?: any) => {
  if (value === undefined) return null
  return `${prop}: ${toPixels(value) || theme?.[key]?.[value] || value};`
}
