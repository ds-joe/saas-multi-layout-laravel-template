// Dependencies

// Layout
import DashboardLayout from '@/Layouts/Dashboard';

const Profile: RP = () => {
  return <section></section>;
};

Profile.layout = (page) => (
  <DashboardLayout
    title={page.props.page_words?.profile}
    children={page}
  />
);
export default Profile;
