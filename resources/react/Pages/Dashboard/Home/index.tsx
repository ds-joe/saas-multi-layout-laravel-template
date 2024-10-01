// Layout
import DashboardLayout from '@/Layouts/Dashboard';

import { Tabs, Tab, TabsBody, TabsHeader, TabPanel } from '@/Components/Global/Custom/Tab';

const Home: RP = () => {

  return (
    <div className="m-4">
      <Tabs value="profile">
        <TabsHeader>
          <Tab value="profile">
            Profile
          </Tab>
          <Tab value="home">
            Home
          </Tab>
        </TabsHeader>
        <TabsBody>
          <TabPanel value="profile">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, repellendus vitae minus ipsa iusto minima? Et qui, repudiandae voluptate rerum error laborum reprehenderit repellendus aperiam aspernatur cupiditate eaque sequi nihil!
          </TabPanel>
          <TabPanel value="home">
            <h1>Home</h1>
          </TabPanel>
        </TabsBody>
      </Tabs>
    </div>
  );
};

Home.layout = (page) => <DashboardLayout children={page} />;

export default Home;
