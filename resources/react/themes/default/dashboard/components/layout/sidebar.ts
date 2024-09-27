export default {
  base: 'flex flex-col gap-2 px-4 pt-4 pb-4 bg-dark-secondary w-[250px] transition-all duration-5000 lg-max:relative lg-max:-left-full',
  open: 'lg-max:left-0',
  collapse: {
    base: 'mt-4',
    label:
      'capitalize cursor-pointer mb-2 px-3 flex justify-between items-center text-white text-xs select-none',
    icon: {
      base: 'transition-all',
      open: 'rotate-180',
    },
    content: 'flex flex-col gap-2',
  },
  collapse_route: {
    base: 'text-white transition-colors hover:bg-light/20',
    with_icon: 'flex items-center gap-3 px-3 py-2 rounded text-sm',
    active: 'bg-light hover:bg-light text-dark-secondary',
    icon: {
      base: 'text-lg',
    },
  },
};
