// Dependencies
import { ChangeEvent, Fragment } from "react";
import { usePage, router } from '@inertiajs/react';

// Components
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

const OptionsButtons: RC = () => {
  const { page_words, auth } = usePage().props as ServerPageProps;

  /**
   * Handle upload avatar.
   *
   * @param { ChangeEvent<HTMLInputElement> } e
   * @return { void }
   */
  const uploadAvatar = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (!file) return;
    router.post(route('user.profile.update.avatar'), {
      avatar: file
    })
  }

  /**
   * Handle remove avatar
   *
   * @return { void }
   */
  const handleRemoveAvatar = (): void => {
    const confirmation = confirm(page_words?.do_you_want_remove_avatar);
    if (confirmation) {
      router.delete(route('user.profile.remove.avatar'), {
        onSuccess: () => {
          location.reload();
        }
      });
    }
  }

  return (
    <Fragment>

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
            variant={'water'}
            hasIcon={true}
          >
            <IoImageOutline />
            {page_words?.avatar}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <label htmlFor="avatar">
            <DropdownMenuItem>
              {page_words?.upload}
            </DropdownMenuItem>
          </label>
          <DropdownMenuSeparator />
          <DropdownMenuItem disabled={auth.user.avatar == null} onClick={handleRemoveAvatar}>
            {page_words?.remove}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Fragment>
  )
}


export default OptionsButtons;
