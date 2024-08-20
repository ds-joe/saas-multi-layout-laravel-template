// Components
import Collapsible, { CollapsibleItem } from "./Collapsible";

// Icons
import { HiOutlineShoppingCart, HiOutlineChartPie, HiOutlineChartBar, HiOutlineCog8Tooth, HiOutlineUsers, HiOutlineUser, HiOutlineCreditCard, HiOutlineClipboardDocumentList, HiOutlineChatBubbleBottomCenter, HiOutlineRss } from "react-icons/hi2";


const Routes: RC = () => {
  return (
    <ul className="flex flex-col overflow-y-auto gap-1">
      <CollapsibleItem childItem={false} Icon={HiOutlineChartPie} >Dashboard</CollapsibleItem>
      <CollapsibleItem childItem={false} Icon={HiOutlineUsers}>Users</CollapsibleItem>
      <CollapsibleItem childItem={false} Icon={HiOutlineCreditCard}>Billing</CollapsibleItem>
      <CollapsibleItem childItem={false} Icon={HiOutlineChartBar}>Analytics</CollapsibleItem>
      <CollapsibleItem childItem={false} Icon={HiOutlineClipboardDocumentList}>Support</CollapsibleItem>

      <li>
        <Collapsible
          title="E-commerce"
          Icon={HiOutlineShoppingCart}
          fold
        >
          <CollapsibleItem >Sales</CollapsibleItem>
          <CollapsibleItem >Expenses</CollapsibleItem>
          <CollapsibleItem >Products</CollapsibleItem>
          <CollapsibleItem >Categories</CollapsibleItem>
        </Collapsible>
      </li>
      <li>
        <Collapsible
          title="Communications"
          Icon={HiOutlineChatBubbleBottomCenter}
        >
          <CollapsibleItem >Inbox</CollapsibleItem>
          <CollapsibleItem >Sent Items</CollapsibleItem>
          <CollapsibleItem >Chat</CollapsibleItem>
          <CollapsibleItem >Email</CollapsibleItem>
        </Collapsible>
      </li>
      <li>
        <Collapsible
          title="Integrations"
          Icon={HiOutlineRss}
        >
          <CollapsibleItem >Strip</CollapsibleItem>
          <CollapsibleItem >Google Analytics</CollapsibleItem>
        </Collapsible>
      </li>


      <CollapsibleItem childItem={false} Icon={HiOutlineCog8Tooth}>Settings</CollapsibleItem>
      <CollapsibleItem childItem={false} Icon={HiOutlineUser}>Profile</CollapsibleItem>
    </ul>
  )
}

export default Routes;