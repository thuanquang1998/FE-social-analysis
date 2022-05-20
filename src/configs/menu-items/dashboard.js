// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'admin',
            title: 'Dashboard Admin',
            type: 'item',
            url: '/dashboard/admin',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'chanel',
            title: 'Dashboard Chanel',
            type: 'item',
            url: '/dashboard/chanel',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
