// Dependencies
import { ChangeEvent, useEffect, useRef } from "react";
import { usePage } from "@inertiajs/react";

// Hooks
import useFormRequest from "@/hooks/useFormRequest";
import useNotification from "@/hooks/useNotification";


// Components
import { CardTitle, CardDescription } from "@/Components/Global/Custom/Card";
import Button from "@/Components/Global/Custom/Button";
import Avatar from "@/Components/Global/Custom/Avatar";

// Apis
import { updateAvatar, removeAvatar } from "@/api/inertia/dashboard/user/profile";

const AvatarArea: RC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const toast = useNotification();
  const { auth, page_words } = usePage().props as ServerPageProps;
  const { status, setColumn, data, call: updateCallback } = useFormRequest(updateAvatar, {
    data: {
      avatar: null as null | File
    },
    options: {
      onError: (error) => {
        toast(error?.avatar, 'error');
      }
    }
  });
  const { call: removeCallback } = useFormRequest(removeAvatar, {
    data: {}
  });

  // Handle remove avatar
  const handleRemoveAvatar = () => {
    const confirmation = confirm(page_words?.do_you_want_remove_avatar);

    if (confirmation) {
      removeCallback()
    }
  }


  // Handle input change
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setColumn('avatar', files[0])
    }
  }

  // Allow Drag Over event
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // Handle drag
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files) {
      setColumn('avatar', files[0])
    }
  };

  useEffect(() => {
    if (data.avatar) {
      updateCallback();
    }
  }, [data.avatar]);

  return (
    <div>
      <CardTitle>{page_words?.profile_details}</CardTitle>
      <CardDescription>{page_words?.enter_your_profile_information}</CardDescription>
      <div className="mt-5 flex flex-col gap-2">
        <CardDescription>{page_words?.profile_image}</CardDescription>
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          className="w-full border-2 border-dashed min-h-[180px] py-6 gap-2 flex items-center justify-center flex-col"
        >
          <Avatar
            src={auth.user?.avatar}
            className="min-h-16 w-16 mb-5"
            fill_back={auth.user?.username[0]}
          />
          <div className="flex items-center gap-2">
            <Button
              onClick={() => inputRef.current?.click()}
              type="button"
              color={'blue'}
              size={'sm'}
              disabled={status.processing}
            >
              {page_words?.update}
            </Button>
            {
              auth.user?.avatar && (
                <Button
                  onClick={handleRemoveAvatar}
                  type="button"
                  color={'red'}
                  size={'sm'}
                  disabled={status.processing}
                >
                  {page_words?.remove}
                </Button>
              )
            }
          </div>
          <CardDescription>{page_words?.or_drag_and_drop_image}</CardDescription>
          <input
            type="file"
            ref={inputRef}
            onChange={handleChangeInput}
            hidden
          />
        </div>
      </div>
    </div>
  )
}

export default AvatarArea;
