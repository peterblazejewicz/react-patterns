/**
 * @export
 * @interface ToggleableMenuProps
 */
export interface ToggleableMenuProps {
  title: string;
  onClick?: () => void;
}

/**
 * @export
 * @interface ToggleableMenuState
 */
export interface ToggleableMenuState {
  show: boolean;
}
