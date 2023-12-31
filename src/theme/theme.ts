import { DefaultTheme } from 'styled-components'

const colors = {
	white: '#ffffff',
    black: '#000000',
	gray: {
		100: "#E2E8F0",
		200: "#F8FAFC",
		300: '#475569',
		400: "#1E293B"
	},
	primary: '#7C3AED'
}

const space = {
	s1: '4px',
	s2: '8px',
	s3: '12px',
	s4: '16px',
	s5: '24px',
	s6: '32px',
}

export const theme: DefaultTheme = {
	colors,
	space,
}