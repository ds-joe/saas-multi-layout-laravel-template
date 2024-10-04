// Dependencies
import { Fragment, type ReactNode, useState } from "react";

// Components
import { Collapse as MCollapse } from "@material-tailwind/react";

// Icons
import { FaAngleDown } from "react-icons/fa6";

export type CollapseProps = {
  toggle: ReactNode,
  children?: ReactNode
}

const Collapse: RC<CollapseProps> = ({ children, toggle }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Fragment>
      <button className="flex w-full items-center justify-between" onClick={() => setOpen((prev) => !prev)}>
        <span>{toggle}</span>
        <FaAngleDown className={`${open ? 'rotate-180' : ""}`} />
      </button>
      <MCollapse
        open={open}>
        {children}
      </MCollapse>
    </Fragment>
  );
}


export default Collapse;
