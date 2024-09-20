// Dependencies
import { usePage } from '@inertiajs/react';

// Components
import LinkedAccountsTab from './LinkedAccountsTab';
import PersonalInfoTab from './PersonalInfoTab';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/Components/Global/Shadcn/ui/card';
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from '@/Components/Global/Shadcn/ui/tabs';

const AccountInformation: RC = () => {
  const { page_words } = usePage().props as ServerPageProps;

  return (
    <Card className="bg-background lg:col-span-7 min-h-full shadow">
      <CardHeader>
        <CardTitle>{page_words?.personal_information}</CardTitle>
        <CardDescription>
          {
            page_words?.edit_your_details_to_keep_your_account_accurate_and_personalized
          }
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs
          defaultValue="personal-info"
        >
          <TabsList>
            <TabsTrigger value="personal-info">
              {page_words?.profile_info}
            </TabsTrigger>
            <TabsTrigger value="linked-account" disabled>
              {page_words?.linked_accounts}
            </TabsTrigger>
          </TabsList>
          <LinkedAccountsTab />
          <PersonalInfoTab />
        </Tabs>
      </CardContent>
    </Card>
  );
}

export default AccountInformation;
