import { theme } from '../theme.config';

export const cardStyles = {
  base: `
    relative
    rounded-xl
    transition-all
    duration-300
    overflow-hidden
  `,
  dark: {
    background: theme.colors.background.card,
    border: `1px solid ${theme.colors.border.default}`,
    hover: {
      border: `1px solid ${theme.colors.border.hover}`,
      ...theme.effects.card.hover(true),
    },
  },
  light: {
    background: '#FFFFFF',
    border: '1px solid #E1E4E8',
    hover: theme.effects.card.hover(false),
  },
};