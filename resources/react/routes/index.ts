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
    allowed_permissions: [],
    disallowed_permissions: [],
  },
  {
    id: 3,
    translated_word: 'roles',
    icon: HiOutlineShieldExclamation,
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: [],
    disallowed_permissions: [],
  },
  {
    id: 4,
    translated_word: 'modules',
    icon: HiOutlineFlag,
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: [],
    disallowed_permissions: [],
  },
  {
    id: 5,
    translated_word: 'profile',
    icon: HiOutlineUser,
    route: 'user.profile',
    allowed_user_types: [],
    disallowed_user_types: [],
    allowed_permissions: [],
    disallowed_permissions: [],
  },
];

export default routes;
