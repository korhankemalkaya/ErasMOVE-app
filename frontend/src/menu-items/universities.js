// assets
import { IconKey } from '@tabler/icons';

// constant
const icons = {
    IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const universities = {
    id: 'universities',
    title: 'Universities',
    type: 'group',
    children: [
        {
            id: 'universities',
            title: 'Contracted Universities',
            type: 'item',
            url: '/main/universities',
            icon: icons.IconDashboard,
            breadcrumbs: false
        }, {
            id: 'hostUniversity',
            title: 'Host University',
            type: 'item',
            url: '/main/hostUniversity',
            icon: icons.IconDashboard,
            breadcrumbs: false
        },
    ]
};

export default universities;
