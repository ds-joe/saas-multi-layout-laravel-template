// Dependencies
import { usePage } from '@inertiajs/react';

// Layout
import DashboardLayout from '@/Layouts/Dashboard';

// Hooks
import useFormRequest from '@/hooks/useFormRequest';

// Components
import Button from '@/Components/Global/Custom/Button';
import Section from '@/Components/Dashboard/Utils/Section';
import Header from '@/Components/Dashboard/Layout/Header';
import { Card, CardBody } from '@/Components/Global/Custom/Card';
import { Tabs, TabPanel, TabsBody, TabsHeader, Tab } from '@/Components/Global/Custom/Tab';

// Tabs Components
import ProfileTab from './Components/TabsContent/ProfileTab';

// Apis
import { updateMainDetails } from '@/api/inertia/dashboard/user/profile';


const Profile: RP = () => {
  const { page_words, auth } = usePage().props as ServerPageProps;
  const user = auth.user;
  const { call, formId: requestFormId, status } = useFormRequest(updateMainDetails, {
    data: {
      _first_name: user?._first_name || "",
      _last_name: user?._last_name || "",
      username: user?.username || "",
      email: user?.email || ""
    }
  });

  return (
    <Section>
      <Header
        title={page_words?.settings}
      >
        <div className='flex items-center gap-2'>
          <Button
            onClick={() => call()}
            color={'blue'}
            size={'sm'}
            disabled={status.processing}
          >{page_words?.save}</Button>
        </div>
      </Header>
      <Card>
        <CardBody>
          <Tabs value={'profile'}>
            <TabsHeader className='gap-7'>
              <Tab value={'profile'}>{page_words?.profile}</Tab>
              <Tab value={'notifications'} disabled>{page_words?.notifications}</Tab>
              <Tab value={'accounts'} disabled>{page_words?.accounts}</Tab>
              <Tab value={'security'} disabled>{page_words?.security}</Tab>
            </TabsHeader>
            <TabsBody className='mt-4'>
              <TabPanel value={'profile'}><ProfileTab formId={requestFormId} /></TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
      <div className='flex items-center justify-end gap-2'>
        <Button
          onClick={() => call()}
          color={'blue'}
          size={'sm'}
          disabled={status.processing}
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
