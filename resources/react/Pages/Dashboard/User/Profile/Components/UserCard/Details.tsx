// Dependencies
import { useState, Fragment } from 'react';
import { usePage } from '@inertiajs/react';

// Components
import ImageViewer from '@/Components/Global/Custom/ImageViewer';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/Components/Global/Shadcn/ui/avatar';

const Details: RC = () => {
  const { auth } = usePage().props as ServerPageProps;
  const [avatarViewer, setAvatarViewer] = useState<boolean>(false);

  // Include 2 characters from user name
  const avatarFallback = ((user) =>
    `${user.username[0]}${user.username[1]}`.toLocaleUpperCase())(auth.user);

  return (
    <Fragment>
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

    </Fragment>
  )
}

export default Details;
