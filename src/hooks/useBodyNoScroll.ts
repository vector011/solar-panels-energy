const useBodyNoScroll = (): [() => void, () => void] => [
  () => {
    if (document.body !== null) document.body.style.overflow = 'hidden'
  },
  () => {
    if (document.body !== null) document.body.style.overflow = ''
  },
]

export default useBodyNoScroll
