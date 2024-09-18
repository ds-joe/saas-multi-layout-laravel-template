// Dependencies
import { forwardRef, useState } from 'react';

// Utils
import { cn } from '@/utilities/tailwind/cn';

// Icons
import { HiChevronUp } from 'react-icons/hi2';

// Types
import {
  CollapsibleProps,
  CollapsibleItemProps,
} from '@/types/Components/Dashboard/Layout/Sidebar';
import { Link } from '@inertiajs/react';

const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ title, children, Icon, isOpenInitially = false, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState<boolean>(isOpenInitially);

    /**
     * Handle toggle collapsible.
     *
     * @return { void }
     */
    const toggleOpen = (): void => setIsOpen(!isOpen);

    return (
      <div ref={ref}>
        <button
          onClick={toggleOpen}
          className={cn(
            itemClasses(isOpen ? 'bg-background text-water' : ''),
            props.className,
          )}
        >
          <div className="flex justify-between items-center text-sm ">
            <div className={`${Icon ? 'flex items-center gap-2' : ''}`}>
              {Icon ? <Icon className="text-[1.1rem]" /> : ''}
              <span className="text-[.95rem]">{title}</span>
            </div>
            <HiChevronUp
              className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </button>
        <ul
          className={cn(
            'overflow-hidden transition-all duration-100 pl-2 flex flex-col py-2 ',
            !isOpen && 'max-h-0 py-0',
          )}
        >
          {children}
        </ul>
      </div>
    );
  },
);

const CollapsibleItem = forwardRef<HTMLLIElement, CollapsibleItemProps>(
  ({ children, active, href, Icon, childItem = true, ...props }, ref) => {
    return (
      <li
        {...props}
        className={cn(
          itemClasses('text-sm'),
          props.className,
          !childItem ? 'text-[0.95rem]' : '',
        )}
        ref={ref}
      >
        <Link
          className={cn(
            'w-full h-full inline-block',
            Icon ? 'flex items-center gap-2' : '',
          )}
          href={href ?? '#'}
        >
          {Icon ? (
            <Icon
              className={`${childItem ? 'text-[1rem]' : 'text-[1.1rem]'}`}
            />
          ) : (
            ''
          )}
          {children}
        </Link>
      </li>
    );
  },
);

export function itemClasses(classes?: string) {
  return cn(
    'text-primary w-full px-4 py-2 transition-color rounded-lg hover:bg-background transition-colors',
    classes,
  );
}

export { CollapsibleItem };
export default Collapsible;
