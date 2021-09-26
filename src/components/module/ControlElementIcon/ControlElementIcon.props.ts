import { THEME_OPTION } from 'store/settings';

export interface ControlElementIconProps {
  id: string;
  size: number;
  theme?: THEME_OPTION;
  isHighlighted?: boolean;
}
