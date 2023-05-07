import { Tabs } from "flowbite-react";
import {
    HiAdjustments,
    HiClipboardList,
    HiDatabase,
    HiUserCircle,
} from "react-icons/hi";
function TabsExample(): JSX.Element {
  return (
    <Tabs.Group aria-label="Tabs with icons" style="underline">
      <Tabs.Item title="Profile" icon={HiUserCircle}>
        Profile content
      </Tabs.Item>
      <Tabs.Item active title="Dashboard" icon={HiDatabase}>
        Dashboard content
      </Tabs.Item>
      <Tabs.Item title="Settings" icon={HiAdjustments}>
        Settings content
      </Tabs.Item>
      <Tabs.Item title="Contacts" icon={HiClipboardList}>
        Contacts content
      </Tabs.Item>
      <Tabs.Item disabled title="Disabled">
        Disabled content
      </Tabs.Item>
    </Tabs.Group>
  );
}
export default TabsExample;