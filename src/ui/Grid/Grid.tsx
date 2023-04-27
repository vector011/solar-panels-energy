import { styled } from '~/styles/theme'

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(375px, 1fr))',
  gridRowGap: '$9',
})

export default Grid
