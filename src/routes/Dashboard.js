import "../components/TopBar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import Sidebar from "../components/SideBar";
import FeaturedInfo from "../components/featuredinfo/FeaturedInfo";
import Chart from "../components/chart/Chart";
import SidebarLayout from "../components/SidebarLayout";
import "../Dashboard.css";

export default function Dashboard() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Dashboard admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
        </div>
      </div>

      <SidebarLayout>
        <div className="home-content">
          <FeaturedInfo />
          <Chart />
        </div>
      </SidebarLayout>
    </div>
  );
}
