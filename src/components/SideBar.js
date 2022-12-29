import "./SideBarStyles.css";
import {
  AttachMoney,
  LineStyle,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
} from "@material-ui/icons";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analystics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem ">
            <PermIdentity className="sidebarIcon" />
            Users
          </li>
          <li className="sidebarListItem">
            <Storefront className="sidebarIcon" />
            Trips
          </li>
          <li className="sidebarListItem">
            <AttachMoney className="sidebarIcon" />
            Transactions
          </li>
          <li className="sidebarListItem">
            <Report className="sidebarIcon" />
            Reports
          </li>
        </ul>
        <h3 className="sidebarTitle">Quick Menu</h3>
        <ul className="sidebarList">
          <li className="sidebarListItem ">
            <PermIdentity className="sidebarIcon" />
            Users
          </li>
          <li className="sidebarListItem">
            <Storefront className="sidebarIcon" />
            Trips
          </li>
          <li className="sidebarListItem">
            <AttachMoney className="sidebarIcon" />
            Transactions
          </li>
          <li className="sidebarListItem">
            <Report className="sidebarIcon" />
            Reports
          </li>
        </ul>
      </div>
    </div>
  );
}
