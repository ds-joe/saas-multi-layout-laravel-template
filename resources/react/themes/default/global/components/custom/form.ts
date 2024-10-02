export default {
  base: 'flex flex-col gap-6 w-full',
  form_group: {
    base: 'flex flex-col gap-2 w-full',
    double: 'grid md:grid-cols-2 gap-3',
  },

  form_errors: {
    base: 'grid grid-cols-1 gap-2 bg-red-700 p-2 rounded-lg text-white',
    error: {
      base: 'flex items-center gap-2 text-sm',
      icon: 'h-8 w-8',
    },
  },

  float_input: {
    base: 'placeholder-shown:border-t-gray-400',
  },
};
