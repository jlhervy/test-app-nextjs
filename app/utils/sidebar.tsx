"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineTable, HiBeaker, HiBookOpen, HiCode } from "react-icons/hi";


const SideBar = () => {

  const pathname = usePathname();


  return (
    <div className=" ">
      <Sidebar aria-label="Sidebar with multi-level dropdown example" className="z-10 w-48 !opacity-80 !text-gray-100">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} href="/chatbot/" icon={HiBeaker} active={pathname == "/chatbot/"}>
              Chatbot
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/edit/" icon={HiCode} active={pathname == "/edit/"}>
              Éditeur SQL
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/guide/" icon={HiBookOpen} active={pathname == "/guide/"}>
              Guide
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/tables/" icon={HiOutlineTable} active={pathname == "/tables/"}>
              Tables
            </Sidebar.Item>
            {/* <Sidebar.Item as={Link} href="/about" icon={HiOutlineInformationCircle} active={pathname == "/about/"}>
              À propos
            </Sidebar.Item> */}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
      <ul>
      <li>
        <Link as="/edit" href="/edit">edit</Link>
      </li>
      <li>
        <Link as="/guide" href="/guide">guide</Link>
      </li>
      <li>
        <Link as="/chatbot" href="/chatbot">chatbot</Link>
      </li>
      <li>
        <Link as="/tables" href="/tables">tables</Link>
      </li>
    </ul>
    </div>
  );
};

export default SideBar;