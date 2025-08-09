
import DashboardClient from "./_comon/DashboardClient";


export default function Layout({ children }) {
  return (
    <DashboardClient>
      {children}
    </DashboardClient>
  );
}