
// Components
import Details from "./Details";
import { Card, CardContent } from '@/Components/Global/Shadcn/ui/card';
import OptionsButtons from "./OptionsButtons";

const UserCard = () => {
  return (
    <Card className="relative rounded-lg lg:col-span-5 bg-background h-full shadow">
      <CardContent className="pt-10 flex flex-col items-center justify-center">
        <Details />
        <div className=" mt-10 self-start">
          <OptionsButtons />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserCard;
