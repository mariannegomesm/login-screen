import { css, styled } from "styled-components";

import { decoration, display } from "@/utils/styled";
import { DecorationProps, DisplayProps } from "@/interface/styled";

interface FieldProps extends DisplayProps, DecorationProps{}

export const Field = styled.input<FieldProps>(({ theme }) => css`
  width: 100%;
  
  padding: 16px 12px;

  border-radius: 4px;
  border: 1px solid ${theme.colors.gray[100]};

  background-color: ${theme.colors.white};
`,
    display,
    decoration
);
