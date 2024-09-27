// Layout
import DashboardLayout from '@/Layouts/Dashboard';

const Home: RP = () => {
  return <div className="grid grid-cols-4 gap-4 my-4 mx-4"></div>;
};

Home.layout = (page) => <DashboardLayout children={page} />;

export default Home;
