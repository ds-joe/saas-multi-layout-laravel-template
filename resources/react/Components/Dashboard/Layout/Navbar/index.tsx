// Redux
import { useDispatch } from "react-redux";
import { toggleSidebarOpen } from "@/redux/dashboard/slicers/layout";

// Components
import { Button } from "@/Components/Global/Shadcn/ui/button";
import UserDropdown from "./Components/UserDropdown";
import AdditionButtons from "./Components/AddtionButtons";

// Icons
import { HiBars3 } from "react-icons/hi2";

// Assets
import LogoSide from "./Components/LogoSide";

const Navbar: RC = () => {
  const dispatch = useDispatch();

  /**
   * Handle toggle sidebar open.
   * 
   * @return { void }
   */
  const toggleSidebar = (): void => { dispatch(toggleSidebarOpen()) };

  return (
    <nav className="w-full py-3 bg-background dark:bg-dark border-b border-b/5 z-10 shadow">
      <div className="container flex items-center justify-between gap-6">
        <LogoSide />
        <div className="flex items-center gap-2">
          <AdditionButtons />
          <UserDropdown />
          <Button variant={'ghost'} size={'icon'} onClick={toggleSidebar} >
            <HiBars3 className="text-xl" />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;