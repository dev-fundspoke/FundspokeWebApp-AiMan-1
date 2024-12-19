// Remove unused React import since we're using JSX elements as values
import { 
  RocketOutlined, 
  BarChartOutlined, 
  ProfileOutlined, 
  FundProjectionScreenOutlined 
} from '@ant-design/icons';
import type { NavigationItem } from '../types/navigation';

export const navigationItems: NavigationItem[] = [
  {
    icon: <RocketOutlined />,
    title: 'Launch Project',
    description: 'Initialize a new project with AI-powered setup',
    buttonText: 'Launch Setup',
    glowColor: '#1890FF',
  },
  {
    icon: <BarChartOutlined />,
    title: 'Analytics Hub',
    description: 'Access real-time metrics and insights',
    buttonText: 'View Analytics',
    glowColor: '#722ED1',
  },
  {
    icon: <ProfileOutlined />,
    title: 'Applications',
    description: 'Manage your funding applications',
    buttonText: 'Manage',
    glowColor: '#13C2C2',
  },
  {
    icon: <FundProjectionScreenOutlined />,
    title: 'Neural Network',
    description: 'Monitor AI system performance',
    buttonText: 'Monitor',
    glowColor: '#1890FF',
  },
];