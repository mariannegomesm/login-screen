import 'styled-components'

import { theme } from './theme'

type Theme = typeof theme

interface ThemeColors {
	white: string
	black: string
	gray: {
		100: string
		200: string
		300: string
		400: string
	}
	primary: string
}

interface ThemeSpace {
	s1: string
	s2: string
	s3: string
	s4: string
	s5: string
	s6: string
}

declare module 'styled-components' {
	export interface DefaultTheme extends Theme {
		colors: ThemeColors
		space: ThemeSpace
	}
}