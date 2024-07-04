import {
  faBookBookmark,
  faBookOpen,
  faBriefcase,
  faCodeCompare,
  faFire,
  faGears,
  faGlobe,
  faNetworkWired,
  faServer,
  faTachometerAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBug } from "@fortawesome/free-solid-svg-icons/faBug";
import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";

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
    name: "Network",
    href: "/dashboard/scanner/network",
    icon: faGlobe,
  },
  //!   Gap Report
  {
    label: "Report",
    name: "Generate Report Per Shift",
    href: "/dashboard/report/shift",
    icon: faNetworkWired,
  },
  {
    label: "",
    name: "Generate Report R2 Only",
    href: "/dashboard/report/r2",
    icon: faGlobe,
  },
  {
    label: "",
    name: "Generate Report Bulanan",
    href: "/dashboard/report/month",
    icon: faGlobe,
  },
  //!   Gap Live Monitoring
  {
    label: "Live Monitoring",
    name: "Attack, DNS, Malware",
    href: "/dashboard/report/shift",
    icon: faNetworkWired,
  },
  {
    label: "",
    name: "Generate Report R2 Only",
    href: "/dashboard/report/r2",
    icon: faGlobe,
  },
  {
    label: "",
    name: "Generate Report Bulanan",
    href: "/dashboard/report/month",
    icon: faGlobe,
  },
];

export default menuItems;
