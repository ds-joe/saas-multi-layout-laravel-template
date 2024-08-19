// Layout
import DashboardLayout from "@/Layouts/Dashboard";
import { Button } from 'primereact/button';

const Home: RP = () => {
  return (
    <><Button label="Submit" /></>
  )
}

Home.layout = (page) => <DashboardLayout children={page} />;

export default Home;