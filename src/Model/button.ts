import { MouseEvent } from 'react';

/**
 * @export
 * @interface ButtonProps
 */
export interface ButtonProps {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  text: string;
}
