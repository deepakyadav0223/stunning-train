// assets
import { LoginOutlined, ProfileOutlined  ,CheckCircleOutlined ,ExclamationCircleOutlined  } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    CheckCircleOutlined ,
    ExclamationCircleOutlined 
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'authentication',
    title: 'Work Section',
    type: 'group',
    children: [
        {
            id: 'login1',
            title: 'Check Class Status',
            type: 'item',
            url: '/login',
            icon: icons.LoginOutlined,
            target: true
        },
        {
            id: 'bookClass',
            title: 'Book Class',
            type: 'item',
            url: '/register',
            icon: icons.ProfileOutlined,
            target: true
        },
        {
            id: 'bookedClass',
            title: 'Booked Classes',
            type: 'item',
            url: '/register',
            icon: icons.CheckCircleOutlined ,
            target: true
        },
        {
            id: 'nonBookedClasses',
            title: 'Non Booked Classes',
            type: 'item',
            url: '/register',
            icon: icons.ExclamationCircleOutlined,
            target: true
        }
    ]
};

export default pages;
