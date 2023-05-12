import { styled } from '~/styles/theme'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  width: '100%',
  maxWidth: 'calc(1600px + 4%)',

  paddingInline: '4%',
  marginInline: 'auto',
})

export default Container
