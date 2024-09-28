// Modules Components
import modules from './modules';

// Layout
import navbar from './layout/navbar';
import sidebar from './layout/sidebar';

// custom
import state_card from './utils/state_card';

export default {
  modules,
  utils: {
    state_card,
  },
  navbar,
  sidebar,
};
