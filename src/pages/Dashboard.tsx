import React from 'react';
import { Layout } from 'antd';
import { SciFiHeader } from '../components/dashboard/header/SciFiHeader';
import { SciFiNavigationSection } from '../components/dashboard/navigation/SciFiNavigationSection';
import { SciFiActivityList } from '../components/dashboard/activity/SciFiActivityList';
import { SciFiStatistics } from '../components/dashboard/statistics/SciFiStatistics';
import { SciFiFooter } from '../components/dashboard/footer/SciFiFooter';
import { useThemeContext } from '../context/ThemeContext';
import { darkTheme } from '../styles/themes/dark';

const { Content } = Layout;

export const Dashboard: React.FC = () => {
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  return (
    <Layout
      className="min-h-screen"
      style={{
        background: isDark ? darkTheme.colors.background.primary : '#FFFFFF',
      }}
    >
      <SciFiHeader />
      <Content className="pt-[70px] px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <SciFiStatistics />
          <SciFiNavigationSection />
          <SciFiActivityList />
        </div>
      </Content>
      <SciFiFooter />
    </Layout>
  );
};