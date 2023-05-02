import { styled } from '~/styles/theme'

const Grid = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$9',

  '@phone': {
    display: 'grid',
    gridRowGap: '$9',
    gridTemplateColumns: 'repeat(auto-fill, minmax(375px, 1fr))',
  },
})

export default Grid
