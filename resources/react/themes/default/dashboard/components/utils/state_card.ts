export default {
  cardBody: {
    base: 'flex justify-center flex-col gap-2 py-3 pt-4 px-5',
  },
  content: {
    wrapper: 'flex justify-between items-center flex-grow gap-4',
    textWrapper: 'flex flex-col flex-1',
    title: {
      base: '',
      freeSpaceIcon: 'order-2',
    },
    description: {
      base: '',
      freeSpaceIcon: 'order-1',
    },
  },
  iconWrapper: {
    base: 'flex items-center justify-center flex-col',
    freeSpaceIcon: '',
    default: 'rounded-full text-xl w-10 h-10 bg-light',
  },
  icon: {
    freeSpaceIcon: 'w-12 h-12 mt-auto',
    default: '',
  },
  percentageDescription: {
    base: 'flex items-center gap-2',
    up: 'text-success',
    down: 'text-danger',
  },
};
