import React from 'react';
import { useThemeContext } from '../../context/ThemeContext';
import { navigationStyles } from '../../styles/components/navigation';

interface SciFiCardProps {
  children: React.ReactNode;
  className?: string;
  isAnimated?: boolean;
}

export const SciFiCard: React.FC<SciFiCardProps> = ({
  children,
  className = '',
  isAnimated = true,
}) => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const styles = navigationStyles.card;

  return (
    <div
      className={`
        ${styles.container}
        ${isAnimated ? 'group hover:scale-105' : ''}
        ${className}
      `}
      style={{
        background: isDark ? 'rgba(20, 29, 46, 0.7)' : 'rgba(255, 255, 255, 0.7)',
        borderColor: isDark ? 'rgba(44, 198, 114, 0.2)' : 'rgba(74, 114, 255, 0.2)',
        boxShadow: isDark ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.1)',
      }}
    >
      {children}
    </div>
  );
};