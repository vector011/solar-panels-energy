import 'styled-components'

import type { TTheme } from 'styles/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}
