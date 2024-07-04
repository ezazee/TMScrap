import {
  faGlobe,
  faNetworkWired,
  faTachometerAlt,
  faBookmark,
  faBookBookmark,
  faBookSkull,
  faComputer,
  faTerminal,
  faListCheck,
  faFaceGrinTongueSquint,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  {
    label: "",
    name: "Dashboard",
    href: "/dashboard",
    icon: faTachometerAlt,
  },
  //!   Gap Assets Management
  {
    label: "Assets Management",
    name: "Endpont | Server",
    href: "/dashboard/asm/endpoint",
    icon: faNetworkWired,
  },
  {
    label: "",
    name: "Web Server",
    href: "/dashboard/asm/webServer",
    icon: faGlobe,
  },
  //!   Gap Report
  {
    label: "Report",
    name: "Generate Report Shift",
    href: "/dashboard/report/shift",
    icon: faBookSkull,
  },
  {
    label: "",
    name: "Generate Report R2 Only",
    href: "/dashboard/report/r2",
    icon: faBookmark,
  },
  {
    label: "",
    name: "Generate Report Bulanan",
    href: "/dashboard/report/month",
    icon: faBookBookmark,
  },
  //!   Gap Live Monitoring
  {
    label: "Live Monitoring",
    name: "Attack, DNS, Malware",
    href: "/dashboard/livemon/attack",
    icon: faComputer,
  },
  {
    label: "",
    name: "SSH, RDP & SMB",
    href: "/dashboard/livemon/ssh",
    icon: faTerminal,
  },
  //!   Gap Create Event
  {
    label: "Create Event",
    name: "Evemt Discord",
    href: "/dashboard/event/discord",
    icon: faFaceGrinTongueSquint,
  },
  {
    label: "",
    name: "Event Workbench",
    href: "/dashboard/evemt/workbench",
    icon: faListCheck,
  },
];

export default menuItems;
