import { lazy } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const DashboardAdmin = Loadable(lazy(() => import('pages/dashboard/admin')));
const DashboardChanel = Loadable(lazy(() => import('pages/dashboard/chanel')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// manage-users
const Users = Loadable(lazy(() => import('pages/manage_user/users')));
const UserGroups = Loadable(lazy(() => import('pages/manage_user/user_groups')));
const Role = Loadable(lazy(() => import('pages/manage_user/role')));
const Permission = Loadable(lazy(() => import('pages/manage_user/permission')));

// manage-channels
const ChannelsTiktok = Loadable(lazy(() => import('pages/manage_channel/channels-tiktok')));
const ChannelsYoutube = Loadable(lazy(() => import('pages/manage_channel/channels-youtube')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            // element: <DashboardDefault />
            element: <Navigate to="/dashboard/default" replace />
        },
        // demo routes
        {
            path: '/dashboard/admin',
            element: <DashboardAdmin />
        },
        {
            path: '/dashboard/chanel',
            element: <DashboardChanel />
        },
        {
            path: '/dashboard/default',
            element: <DashboardDefault />
        },
        {
            path: '/utils/util-typography',
            element: <UtilsTypography />
        },
        {
            path: '/utils/util-color',
            element: <UtilsColor />
        },
        {
            path: '/utils/util-shadow',
            element: <UtilsShadow />
        },
        {
            path: '/icons/tabler-icons',
            element: <UtilsTablerIcons />
        },
        {
            path: '/icons/material-icons',
            element: <UtilsMaterialIcons />
        },
        {
            path: '/sample-page',
            element: <SamplePage />
        },

        // manage users
        {
            path: '/manage-users/users',
            element: <Users />
        },
        {
            path: '/manage-users/user-groups',
            element: <UserGroups />
        },
        {
            path: '/manage-users/role',
            element: <Role />
        },
        {
            path: '/manage-users/permission',
            element: <Permission />
        },
        // manage channels
        {
            path: '/manage-channels/channels-youtube',
            element: <ChannelsYoutube />
        },
        {
            path: '/manage-channels/channels-tiktok',
            element: <ChannelsTiktok />
        }
    ]
};

export default MainRoutes;
