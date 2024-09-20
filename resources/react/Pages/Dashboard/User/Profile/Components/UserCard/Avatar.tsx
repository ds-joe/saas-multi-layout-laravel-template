import { useState } from 'react';
import { usePage } from '@inertiajs/react';

// Components
import ImageViewer from '@/Components/Global/Custom/ImageViewer';
import {
  Avatar as ShadAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/Components/Global/Shadcn/ui/avatar';


const Avatar = () => {
  const { auth } = usePage().props as ServerPageProps;
  const [avatarViewer, setAvatarViewer] = useState<boolean>(false);

  // Include 2 characters from user name
  const avatarFallback = ((user) =>
    `${user?.username[0]}${user?.username[1]}`.toLocaleUpperCase())(auth.user);

  return (
    <div className='self-center'>
      <ShadAvatar
        onClick={() => setAvatarViewer(true)}
        className="h-24 w-24 text-xl border cursor-pointer"
      >
        <AvatarImage
          src={auth.user?.avatar}
          alt={auth.user?.username}
        />
        <AvatarFallback>{avatarFallback}</AvatarFallback>
      </ShadAvatar>
      <ImageViewer
        onClose={() => setAvatarViewer(false)}
        visible={avatarViewer}
        current_index={0}
        images={[auth.user?.avatar]}
      />
    </div>
  )
}

export default Avatar;
