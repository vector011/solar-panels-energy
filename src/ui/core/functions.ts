import theme, { TTheme } from 'styles/theme'

export const toPixels = (value?: any) =>
  typeof value === 'number' ? `${value}px` : null

const getValue = (value?: any, key?: keyof TTheme, disablePixels?: boolean) => {
  const themeValue = key ? theme?.[key]?.[value] : null
  const pixelValue = !disablePixels ? toPixels(value) : null

  return pixelValue || themeValue || value
}

const getObject = (
  value: Record<string, any[]>,
  key?: keyof TTheme,
  disablePixels?: boolean
) => {
  const [name, values] = Object.entries(value)[0]

  const newValues = values?.map((item) => getValue(item, key, disablePixels))

  return `${name}(${newValues.join(', ')})`
}

export const createProp = (
  prop: string,
  value?: any,
  key?: keyof TTheme,
  disablePixels?: boolean
) => {
  if (value === undefined) return null

  const newValue =
    typeof value === 'object'
      ? getObject(value, key, disablePixels)
      : getValue(value, key, disablePixels)

  return `${prop}: ${newValue};`
}
