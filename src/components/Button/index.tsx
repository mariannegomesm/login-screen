import { css, styled } from "styled-components";

import { decoration, display } from "@/utils/styled";
import { DecorationProps, DisplayProps } from "@/interface/styled";

interface ButtonProps extends DisplayProps, DecorationProps {}

export const Button = styled.button<ButtonProps>(({theme}) => css`
    width: 100%;

    padding: 16px 20px;

    border: 0px;
    border-radius: 4px;

    font-weight: 500;
    letter-spacing: 1px;

    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
`,
    display,
    decoration
)