// Dependencies
import { forwardRef, useState } from 'react';

// Hooks
import useTheme from '@/hooks/useTheme';

// Components
import { Avatar as MAvatar } from '@material-tailwind/react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Types
import type { AvatarProps } from '@/types/Components/Global/Custom/Avatar';

const Avatar = forwardRef<HTMLImageElement, AvatarProps>((props, ref) => {
  const theme = useTheme();
  const avatarTheme = theme.global.components.custom.avatar;

  const [hasError, setHasError] = useState<boolean>(false);
  if (hasError) {
    return (
      <div
        {...props}
        className={cn(avatarTheme.fillback, props.className)}
      >
        {props.fill_back}
      </div>
    );
  }
  return (
    <MAvatar
      {...(props as any)}
      ref={ref}
      onError={() => setHasError(true)}
      className={cn(avatarTheme.base, props.className)}
    />
  );
});

export default Avatar;
