// Dependencies
import { Fragment } from 'react';
import { usePage } from '@inertiajs/react';

// Icons
import { FaRegAddressCard, FaSignature } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { FaPhone } from 'react-icons/fa6';

const Details: RC = () => {
  const { auth } = usePage().props as ServerPageProps;

  return (
    <Fragment>
      <div className="grid grid-cols-1 gap-2 self-start">
        <h4 className="flex items-center gap-3 ">
          <FaRegAddressCard className="text-lg" />
          {auth.user?.username}
        </h4>
        <h4 className="flex items-center gap-3 ">
          <FaSignature className="text-lg" />
          {auth.user?._first_name} {auth.user?._last_name}
        </h4>
        <h4 className="flex items-center gap-3 ">
          <MdAlternateEmail className="text-lg" />
          {auth.user?.email}
        </h4>
        {
          auth.user?._phone && (
            <h4 className="flex items-center gap-3 ">
              <FaPhone className="text-lg" />
              {auth.user?._phone}
            </h4>
          )
        }
      </div>
    </Fragment>
  );
};

export default Details;
