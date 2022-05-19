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
            id: 'channels-youtube',
            title: 'Channels Youtube',
            type: 'item',
            url: '/manage-channels/channels-youtube',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
        {
            id: 'channels-tiktok',
            title: 'Channels Tiktok',
            type: 'item',
            url: '/manage-channels/channels-tiktok',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }
    ]
};

// eslint-disable-next-line camelcase
export default manage_channels;
