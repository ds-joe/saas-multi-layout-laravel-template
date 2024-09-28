// Layout
import DashboardLayout from '@/Layouts/Dashboard';

// Components
import { Card } from '@/Components/Global/Custom/Card';

const Home: RP = () => {
  return <div className="m-4">
    <Card>

    </Card>
  </div>;
};

Home.layout = (page) => <DashboardLayout children={page} />;

export default Home;
