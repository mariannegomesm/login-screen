import styled, { css } from 'styled-components'

import { DecorationProps, DisplayProps } from '@/interface/styled'
import { decoration, display } from '@/utils/styled'

interface TextProps extends DisplayProps, DecorationProps {
	variant?: keyof typeof TEXT_VARIANTS
}

const TEXT_VARIANTS = {
	big: {
		'font-size': '32px',
	},
	medium: {
		'font-size': '24px',
	},
	regular: {
		'font-size': '16px',
	},
	small: {
		'font-size': '14px',
	},
	tiny: {
		'font-size': '12px',
	},
}

export const Text = styled.p<TextProps>(
	({ theme, variant = 'regular' }) => css`
		font-size: ${TEXT_VARIANTS[variant]['font-size']};

		color: ${theme.colors.gray[400]};
	`,
	display,
	decoration
)