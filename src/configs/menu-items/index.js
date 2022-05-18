import dashboard from './dashboard';
import pages from './pages';
import utilities from './utilities';
import other from './other';

// eslint-disable-next-line camelcase
import manage_users from './manage_user';
// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
    // eslint-disable-next-line camelcase
    items: [dashboard, manage_users, pages, utilities, other]
};

export default menuItems;
