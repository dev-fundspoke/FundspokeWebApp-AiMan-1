import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { ThemeProvider } from './context/ThemeContext';
import { ConfigProvider } from 'antd';
import { useThemeContext } from './context/ThemeContext';
import { getAntdTheme } from './config/theme.config';
import { ErrorBoundary } from './hooks/useErrorBoundary';
import { ErrorFallback } from './components/common/ErrorFallback';
import './index.css';

const AppContent = () => {
  const { theme } = useThemeContext();
  
  return (
    <ConfigProvider theme={getAntdTheme(theme === 'dark')}>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </ErrorBoundary>
    </ConfigProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;