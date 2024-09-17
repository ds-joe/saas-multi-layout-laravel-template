// Components
import { Button } from '@/Components/Global/Shadcn/ui/button';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { DashboardRootState } from '@/redux/store';
import { toggleDarkTheme } from '@/redux/dashboard/slicers/layout';

// Icons
import { HiOutlineSun, HiOutlineLanguage } from 'react-icons/hi2';

const AdditionButtons: RC = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector(
    (state: DashboardRootState) => state.dashboard.layout.darkMode,
  );

  /**
   * Handle toggle dark theme.
   *
   * @return { void }
   */
  const toggleDarkMode = (): void => {
    dispatch(toggleDarkTheme());
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        size={'icon'}
        variant={'secondary'}
        className="rounded-full"
        disabled
      >
        <HiOutlineLanguage className="text-xl" />
      </Button>
      <Button
        disabled
        size={'icon'}
        variant={'secondary'}
        className={`rounded-full ${darkMode && 'bg-water text-water-foreground hover:bg-water'}`}
        onClick={toggleDarkMode}
      >
        <HiOutlineSun className="text-xl" />
      </Button>
    </div>
  );
};

export default AdditionButtons;
