// assets
import { IconDashboard } from '@tabler/icons';

// constant
const icons = { IconDashboard };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

// eslint-disable-next-line camelcase
const manage_channels = {
    id: 'manage-channels',
    title: 'Manage Channels',
    type: 'group',
    children: [
        {
            id: 'list-channels',
            title: 'List Channels',
            type: 'item',
            url: '/manage-channels/list-channels',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

// eslint-disable-next-line camelcase
export default manage_channels;
