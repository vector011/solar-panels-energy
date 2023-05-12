import { styled } from '~/styles/theme'

const Text = styled('p', {
  '> *': {
    display: 'inline',
  },

  variants: {
    variant: {
      heading1: {
        fontWeight: 300,
        fontSize: '$7',
        lineHeight: '$8',
      },

      heading2: {
        fontWeight: 300,
        fontSize: '$5',
        lineHeight: '$6',
      },

      homepage: {
        fontWeight: 400,
        fontSize: '$6',
        lineHeight: '$7',
      },

      subheading: {
        fontWeight: 300,
        fontSize: '$1',
        lineHeight: '$0',
        textTransform: 'uppercase',
      },

      subheading2: {
        fontWeight: 400,
        fontSize: '$8',
        lineHeight: '$2',
      },

      paragraph: {
        fontWeight: 300,
        fontSize: '$1',
        lineHeight: '$1',
      },

      paragraph2: {
        fontWeight: 300,
        fontSize: '$3',
        lineHeight: '$4',
      },

      navlink: {
        fontWeight: 300,
        fontSize: '$4',
        lineHeight: '$5',
      },

      button: {
        fontWeight: 400,
        fontSize: '$2',
        lineHeight: '$0',
      },

      footer: {
        fontWeight: 400,
        fontSize: '$2',
        lineHeight: '$3',
      },
    },
  },

  defaultVariants: {
    variant: 'paragraph',
  },
})

export default Text
