// Dependencies
import { usePage } from '@inertiajs/react';

// Layout
import DashboardLayout from '@/Layouts/Dashboard';

// Hooks
import usePermission from '@/hooks/usePermission';
import useStateForm from '@/hooks/useStateForm';

// Components
import Button from '@/Components/Global/Custom/Button';
import Section from '@/Components/Dashboard/Utils/Section';
import Header from '@/Components/Dashboard/Layout/Header';
import { Card, CardBody } from '@/Components/Global/Custom/Card';
import { Tabs, TabPanel, TabsBody, TabsHeader, Tab } from '@/Components/Global/Custom/Tab';

// Tabs Components
import ProfileTab from './Components/TabsContent/ProfileTab';

const Profile: RP = () => {
  const { page_words, auth } = usePage().props as ServerPageProps;
  const { can } = usePermission();
  const user = auth.user;
  const { formId, processing, inertiaRequest, data } = useStateForm({
    _first_name: user?._first_name || "",
    _last_name: user?._last_name || "",
    username: user?.username || "",
    email: user?.email || ""
  });


  // Handle submit
  const handleSubmit = () => {
    inertiaRequest('put', route('user.profile.update.details'), data, {
      preserveScroll: true,
      preserveState: true
    });
  }

  return (
    <Section>
      <Header
        title={page_words?.settings}
      >
        <div className='flex items-center gap-2'>
          <Button
            onClick={handleSubmit}
            color={'blue'}
            size={'sm'}
            disabled={(processing || !can('edit profile'))}
          >{page_words?.save}</Button>
        </div>
      </Header>
      <Card>
        <CardBody>
          <Tabs value={'profile'}>
            <TabsHeader className='gap-7'>
              <Tab value={'profile'}>{page_words?.profile}</Tab>
            </TabsHeader>
            <TabsBody className='mt-4'>
              <TabPanel value={'profile'}><ProfileTab formId={formId} /></TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      <div className='flex items-center justify-end gap-2'>
        <Button
          onClick={() => handleSubmit()}
          color={'blue'}
          size={'sm'}
          disabled={(processing || !can('edit profile'))}
        >{page_words?.save}</Button>
      </div>
    </Section>
  );
};

Profile.layout = (page) => (
  <DashboardLayout
    title={page.props.page_words?.profile}
    children={page}
  />
);
export default Profile;
