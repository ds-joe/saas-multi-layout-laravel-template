// Dependencies
import { usePage, Link, router } from '@inertiajs/react';

// Redux Dependencies
import { useDispatch } from 'react-redux';
import { toggleSidebarOpen } from '@/redux/dashboard/slicers/layout';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import Typography from '@/Components/Global/Custom/Typography';
import {
  Dropdown,
  DropdownItem,
  DropdownHandler,
  DropdownList,
} from '@/Components/Global/Custom/Dropdown';
import Avatar from '@/Components/Global/Custom/Avatar';
import Button from '@/Components/Global/Custom/Button';

// Icons
import { HiChevronDown } from 'react-icons/hi';
import { FaBarsStaggered } from 'react-icons/fa6';

const UserDropdown: RC = () => {
  const theme = useTheme();
  const userDropdownTheme =
    theme.dashboard.components.layout.navbar.buttons_side.user_dropdown;
  const { page_words, auth } = usePage().props as ServerPageProps;
  const { user } = auth;
  const dispatch = useDispatch();

  /**
   * Handle toggle sidebar open.
   *
   * @return { void }
   */
  const toggleSidebar = (): void => {
    dispatch(toggleSidebarOpen());
  };

  /**
   * Handle logout
   *
   * @return { void }
   */
  const handleLogout = (): void => router.post(route('auth.logout'));

  return (
    <div className={userDropdownTheme.base}>
      <Dropdown placement="bottom-end">
        <DropdownHandler>
          <button className={userDropdownTheme.handler_button.base}>
            <Avatar
              className={userDropdownTheme.handler_button.avatar}
              src={user?.avatar}
              fill_back={user?.username[0].toUpperCase()}
            />
            <div className={userDropdownTheme.handler_button.label.base}>
              <Typography
                variant="paragraph"
                className={userDropdownTheme.handler_button.label.content}
              >
                {user?.username}
              </Typography>
              <HiChevronDown
                className={userDropdownTheme.handler_button.label.icon}
              />
            </div>
          </button>
        </DropdownHandler>
        <DropdownList>
          <Link href={route('user.profile')}>
            <DropdownItem>{page_words.profile}</DropdownItem>
          </Link>
          <DropdownItem onClick={handleLogout}>
            {page_words.logout}
          </DropdownItem>
        </DropdownList>
      </Dropdown>
      <Button
        onClick={toggleSidebar}
        size={'sm'}
        color={'blue'}
        className={'lg:hidden'}
      >
        <FaBarsStaggered />
      </Button>
    </div>
  );
};

export default UserDropdown;
