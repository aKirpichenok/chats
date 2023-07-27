import { HTMLAttributes, DetailedHTMLProps } from 'react';

export type PaperSize = 'small' | 'medium' | 'large';

type HTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type PartialDivProps = Partial<
  Pick<HTMLDivProps, 'className' | 'id' | 'style'>
>;


export interface PaperProps extends PartialDivProps {
  elementProps?: HTMLDivProps;
  border?: 'right' | 'left' | 'top' | 'bottom'
}
