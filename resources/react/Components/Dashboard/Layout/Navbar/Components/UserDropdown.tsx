// Dependencies
import { usePage, router } from '@inertiajs/react';

// Components
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/Components/Global/Shadcn/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/Components/Global/Shadcn/ui/dropdown-menu';

// Icons
import { HiOutlineUser, HiArrowLeftOnRectangle } from 'react-icons/hi2';

// types
import { UserModel } from '@/types/Models/User';

const UserDropdown: RC = () => {
  const { auth, page_words } = usePage().props as ServerPageProps;

  // Include 2 characters from user name
  const avatarFallback = ((user: UserModel) =>
    `${user.name[0]}`.toLocaleUpperCase())(auth.user);

  /**
   * Logout action
   *
   * @return { void }
   */
  const logout = (): void => {
    router.post(route('auth.logout'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-r border-l px-2 md:px-4">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage
              src=""
              alt={auth.user.name}
            />
            <AvatarFallback>{avatarFallback}</AvatarFallback>
          </Avatar>
          <h3 className="flex flex-col items-start max-md:hidden">
            <p className="text-sm">{auth.user.name}</p>
          </h3>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-40">
        <DropdownMenuItem className="text-base">
          {' '}
          <HiOutlineUser /> {page_words?.profile}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-base"
          onClick={logout}
        >
          <HiArrowLeftOnRectangle /> {page_words?.logout}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDropdown;
