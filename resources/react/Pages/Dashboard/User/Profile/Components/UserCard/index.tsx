
// Components
import Details from "./Details";
import Avatar from "./Avatar";
import OptionsButtons from "./OptionsButtons";
import { Card, CardContent } from '@/Components/Global/Shadcn/ui/card';

const UserCard = () => {
  return (
    <Card className="relative rounded-lg lg:col-span-5 bg-background h-full shadow">
      <CardContent className="pt-10 flex flex-col">
        <Avatar />
        <OptionsButtons />
        <Details />
      </CardContent>
    </Card>
  );
};

export default UserCard;
