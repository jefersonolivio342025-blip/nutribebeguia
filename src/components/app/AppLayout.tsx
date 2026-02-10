import { Outlet } from "react-router-dom";
import BottomTabBar from "./BottomTabBar";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-app-bg font-body pb-20">
      <Outlet />
      <BottomTabBar />
    </div>
  );
};

export default AppLayout;
