// Dependencies
import { usePage } from '@inertiajs/react';

// Components
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/Components/Global/Shadcn/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/Components/Global/Shadcn/ui/tabs';

const Details: RC = () => {
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
          className="w-[400px]"
        >
          <TabsList>
            <TabsTrigger value="personal-info">
              {page_words?.profile_info}
            </TabsTrigger>
            <TabsTrigger value="linked-account">
              {page_words?.linked_accounts}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="personal-info">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="linked-account">
            Change your password here.
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default Details;
