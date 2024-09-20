// Dependencies

// Components
import HeroCard from './Components/HeroCard';
import UserCard from './Components/UserCard';
import AccountInformation from './Components/AccountInformation';

// Layout
import DashboardLayout from '@/Layouts/Dashboard';

const Profile: RP = () => {
  return (
    <section className="flex flex-col gap-4">
      <HeroCard />
      <div className="grid gap-4 max-lg:grid-cols-1 lg:grid-cols-12">
        <UserCard />
        <AccountInformation />
      </div>
    </section>
  );
};

Profile.layout = (page) => (
  <DashboardLayout
    title={page.props.page_words?.profile}
    children={page}
  />
);
export default Profile;
