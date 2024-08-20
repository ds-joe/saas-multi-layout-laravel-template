// Components
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/Global/Shadcn/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/Global/Shadcn/ui/dropdown-menu";

// Icons
import { HiOutlineUser, HiArrowLeftOnRectangle } from "react-icons/hi2";

const UserDropdown: RC = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="border-r border-l px-2 md:px-4">
        <div className="flex gap-2 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h3 className="flex flex-col items-start max-md:hidden">
            <p className="text-sm">Full Name</p>
            <p className="text-xs font-semibold text-primary/70">Role</p>
          </h3>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem><HiOutlineUser /> Profile</DropdownMenuItem>
        <DropdownMenuItem><HiArrowLeftOnRectangle /> Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserDropdown;