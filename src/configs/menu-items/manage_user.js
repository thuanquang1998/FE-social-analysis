// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

// eslint-disable-next-line camelcase
const manage_users = {
    id: 'manage-users',
    title: 'Manage Users',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/manage-users/users',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'user-groups',
            title: 'User Groups',
            type: 'item',
            url: '/manage-users/user-groups',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'role',
            title: 'Role',
            type: 'item',
            url: '/manage-users/role',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'permission',
            title: 'Permission',
            type: 'item',
            url: '/manage-users/permission',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

// eslint-disable-next-line camelcase
export default manage_users;
