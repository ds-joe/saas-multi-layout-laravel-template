// Dependencies
import { usePage } from '@inertiajs/react';

// Components
import {
  Dropdown,
  DropdownList,
  DropdownItem,
  DropdownHandler,
  DropdownLabel,
} from '@/Components/Global/Custom/Dropdown';
import { Tooltip } from '@material-tailwind/react';

// Icons
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { LuArrowRightLeft } from 'react-icons/lu';
import { FaSun } from 'react-icons/fa6';
import { RiFullscreenLine } from 'react-icons/ri';

// Utils
import useTheme from '@/hooks/useTheme';

const AdditionButtons: RC = () => {
  const theme = useTheme();
  const additionButtonsTheme =
    theme.dashboard.components.navbar.buttons_side.addition_buttons;

  const { page_words } = usePage().props as ServerPageProps;

  /**
   * Handle toggle fullscreen mode
   *
   * @return { void }
   */
  const toggleFullScreenMode = (): void => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <Dropdown placement="bottom-end">
      <DropdownHandler>
        <button className={additionButtonsTheme.handler_button.base}>
          <AiOutlineAppstoreAdd
            className={additionButtonsTheme.handler_button.icon}
          />
        </button>
      </DropdownHandler>
      <DropdownList>
        <DropdownLabel>{page_words?.layout_settings}</DropdownLabel>
        <div className={additionButtonsTheme.dropdown_content.base}>
          <Tooltip
            className={additionButtonsTheme.dropdown_content.item.tooltip}
            content={page_words?.layout_duration}
          >
            <DropdownItem
              disabled
              className={additionButtonsTheme.dropdown_content.item.base}
            >
              <LuArrowRightLeft />
            </DropdownItem>
          </Tooltip>
          <Tooltip
            className={additionButtonsTheme.dropdown_content.item.tooltip}
            content={page_words?.dark_mode}
          >
            <DropdownItem
              disabled
              className={additionButtonsTheme.dropdown_content.item.base}
            >
              <FaSun />
            </DropdownItem>
          </Tooltip>
          <Tooltip
            className={additionButtonsTheme.dropdown_content.item.tooltip}
            content={page_words?.full_screen}
          >
            <DropdownItem
              onClick={toggleFullScreenMode}
              className={additionButtonsTheme.dropdown_content.item.base}
            >
              <RiFullscreenLine />
            </DropdownItem>
          </Tooltip>
        </div>
      </DropdownList>
    </Dropdown>
  );
};

export default AdditionButtons;
