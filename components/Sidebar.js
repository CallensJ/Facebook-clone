import React from "react";
import { useSession } from "next-auth/react";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session} title={session} />

      <SidebarRow Icon={UsersIcon} title="Retrouver des amis" />
      <SidebarRow Icon={UserGroupIcon} title="Groupes" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Plus récentes" />
      <SidebarRow Icon={ClockIcon} title="Souvenirs" />
      <SidebarRow Icon={ChevronDownIcon} title="Voir plus" />
    </div>
  );
}

export default Sidebar;
