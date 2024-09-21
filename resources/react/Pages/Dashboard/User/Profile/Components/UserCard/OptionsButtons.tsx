// Dependencies
import { ChangeEvent } from 'react';
import { usePage, router } from '@inertiajs/react';

// Components
import { Button } from '@/Components/Global/Shadcn/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from '@/Components/Global/Shadcn/ui/dropdown-menu';

// Icons
import { IoImageOutline } from 'react-icons/io5';

const OptionsButtons: RC = () => {
  const { page_words, auth } = usePage().props as ServerPageProps;

  /**
   * Handle upload avatar.
   *
   * @param { ChangeEvent<HTMLInputElement> } e
   * @return { void }
   */
  const uploadAvatar = (e: ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;
    router.post(route('user.profile.update.avatar'), {
      avatar: file,
    });
  };

  /**
   * Handle remove avatar
   *
   * @return { void }
   */
  const handleRemoveAvatar = (): void => {
    const confirmation = confirm(page_words?.do_you_want_remove_avatar);
    if (confirmation) {
      router.delete(route('user.profile.remove.avatar'));
    }
  };

  return (
    <div className="flex self-center mt-2 mb-6">
      {/** Hidden Inputs */}
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/*"
        className="hidden"
        onChange={uploadAvatar}
      />

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button
            className="text-lg rounded-full"
            variant={'water'}
            hasIcon={true}
            size={'sm'}
          >
            <IoImageOutline />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>{page_words?.avatar}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <label htmlFor="avatar">
            <DropdownMenuItem>{page_words?.upload}</DropdownMenuItem>
          </label>
          <DropdownMenuItem
            disabled={auth.user?.avatar == null || !auth.user.avatar}
            onClick={handleRemoveAvatar}
          >
            {page_words?.remove}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default OptionsButtons;
