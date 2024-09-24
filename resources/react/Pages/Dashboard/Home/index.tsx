// Layout
import DashboardLayout from '@/Layouts/Dashboard';
const Home: RP = () => {
  return <div className="flex flex-col">

  </div>;
};

Home.layout = (page) => <DashboardLayout children={page} />;

export default Home;
