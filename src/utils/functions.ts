export const scrollTop = () =>
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })

export const clamp = (min: number, value: number, max: number): number =>
  Math.max(Math.min(value, max), min)

export const getFileName = (path: string) =>
  path.replace(/^.*[\\/]/, '').split('.')[0]
