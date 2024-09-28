export default {
  base: 'flex items-center justify-between bg-dark px-4 py-3 z-10',
  logo_side: {
    base: 'flex items-center justify-between',
    logo: 'w-32',
  },
  buttons_side: {
    base: 'flex items-center gap-6',

    addition_buttons: {
      handler_button: {
        base: 'flex items-center gap-2',
        icon: 'text-lg text-white',
      },
      dropdown_content: {
        base: 'grid grid-cols-3 gap-2 border-none mt-2',
        item: {
          base: 'w-full rounded-full flex items-center justify-center text-success text-lg hover:bg-success hover:text-white',
          tooltip: 'bg-success',
        },
      },
    },

    user_dropdown: {
      base: 'flex items-center gap-2',
      handler_button: {
        base: 'flex items-center gap-2',
        avatar: 'bg-success h-9 w-9 text-white font-semibold',
        label: {
          base: 'flex items-center gap-5',
          content: 'text-sm text-white',
          icon: 'text-white',
        },
      },
    },
  },
};
