// Dependencies
import { useState } from 'react';
import { usePage } from '@inertiajs/react';

// Components
import ImageViewer from '@/Components/Global/Custom/ImageViewer';
import { Card, CardContent } from '@/Components/Global/Shadcn/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/Components/Global/Shadcn/ui/avatar';
import { Button } from '@/Components/Global/Shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/Components/Global/Shadcn/ui/dropdown-menu';

// Icons
import { IoImageOutline } from 'react-icons/io5';

const UserCard = () => {
  const { auth, page_words } = usePage().props as ServerPageProps;
  const [avatarViewer, setAvatarViewer] = useState<boolean>(false);

  // Include 2 characters from user name
  const avatarFallback = ((user) =>
    `${user.username[0]}${user.username[1]}`.toLocaleUpperCase())(auth.user);

  return (
    <Card className="relative rounded-lg col-span-12 lg:col-span-5 bg-background h-full shadow">
      <CardContent className="pt-10 flex flex-col items-center justify-center">
        <Avatar
          onClick={() => setAvatarViewer(true)}
          className="h-24 w-24 text-xl border cursor-pointer"
        >
          <AvatarImage
            src={auth.user.avatar}
            alt={auth.user.username}
          />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <ImageViewer
          onClose={() => setAvatarViewer(false)}
          visible={avatarViewer}
          current_index={0}
          images={[auth.user.avatar]}
        />

        <h1 className="text-semibold text-xl mt-4">{auth.user.username}</h1>
        <p className="text-sm text-gray-500 mt-2">{auth.user.email}</p>
        <div className=" mt-10 self-start">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button
                variant={'water'}
                hasIcon={true}
              >
                <IoImageOutline /> {page_words?.avatar}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>{page_words?.upload}</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>{page_words?.remove}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
