// Types
import type { Route } from '@/types/Route';

// Icons
import {
  HiOutlineFlag,
  HiOutlineUsers,
  HiOutlineUser,
  HiOutlineShieldExclamation,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';

const routes: Array<Route> = [
  {
    id: 1,
    translated_word: 'dashboard',
    icon: HiOutlineRocketLaunch,
    route: 'dashboard.home',
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: [],
    disallowed_permissions: [],
  },
  {
    id: 2,
    translated_word: 'users',
    icon: HiOutlineUsers,
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: ['show users'],
    disallowed_permissions: [],
  },
  {
    id: 3,
    translated_word: 'roles',
    route: 'dashboard.roles',
    icon: HiOutlineShieldExclamation,
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: ['show roles'],
    disallowed_permissions: [],
  },
  {
    id: 4,
    translated_word: 'modules',
    route: "dashboard.modules",
    icon: HiOutlineFlag,
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: ['show modules'],
    disallowed_permissions: [],
  },
  {
    id: 5,
    translated_word: 'settings',
    is_label: true,
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: ['show profile'],
    disallowed_permissions: [],
  },
  {
    id: 6,
    translated_word: 'personal_settings',
    icon: HiOutlineUser,
    route: 'user.profile',
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: ['show profile'],
    disallowed_permissions: [],
  },
];

export default routes;
