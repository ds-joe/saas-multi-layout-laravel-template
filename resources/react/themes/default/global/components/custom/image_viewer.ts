export default {
  base: 'transition-all duration-500 w-screen min-h-screen fixed top-0 left-0 bg-light/60 dark:bg-dark/60 backdrop-blur z-50',
  visible: 'flex flex-col scale-100 items-center justify-center ',
  hidden: 'hidden scale-0',

  content: {
    base: 'container h-full flex flex-col items-center justify-center',
    image: 'h-full object-cover max-w-2xl',
    btn_close:
      'absolute top-5 right-5 text-dark/70 hover:text-dark dark:text-white/70 dark:hover:text-white text-4xl cursor-pointer',
  },
};
