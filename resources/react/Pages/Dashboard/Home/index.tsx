// Layout
import DashboardLayout from "@/Layouts/Dashboard";

const Home: RP = () => {
  return (
    <>
      hello
    </>
  )
}

Home.layout = (page) => <DashboardLayout children={page} />;

export default Home;