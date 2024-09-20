// Dependencies
import { usePage } from '@inertiajs/react';

// Components
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/Components/Global/Shadcn/ui/card';
import { Button } from '@/Components/Global/Shadcn/ui/button';

// Icons
import { BsStars } from 'react-icons/bs';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa6';

const HeroCard: RC = () => {
  const { page_words } = usePage().props as ServerPageProps;

  return (
    <Card className="min-h-[200px] relative rounded-xl bg-gradient-to-br from-water to-water/70 shadow">
      <BsStars className="text-7xl text-water-foreground absolute right-4 top-4 opacity-20 md:opacity-50" />
      <CardContent className="p-6 pt-10">
        <div className="flex flex-col gap-2">
          <CardTitle className="text-water-foreground">
            {page_words?.explore_your_profile}
          </CardTitle>
          <CardDescription className="text-sm text-water-foreground">
            {
              page_words?.track_your_progress_manage_your_settings_and_explore_new_opportunities
            }
          </CardDescription>
        </div>
        <div className="mt-10 sm:grid sm:grid-cols-1 md:flex items-end gap-3 justify-end">
          <Button
            variant={'danger'}
            disabled
            className="flex items-center gap-2 font-semibold w-full md:w-fit "
          >
            <FaGoogle />
            Google
          </Button>
          <Button
            disabled
            variant={'default'}
            className="flex items-center gap-2 font-semibold mt-3 w-full md:w-fit md:mt-0 "
          >
            <FaGithub />
            Github
          </Button>
          <Button
            disabled
            variant={'water'}
            className="flex items-center gap-2 mt-3 w-full md:w-fit md:mt-0 font-semibold "
          >
            <FaFacebook />
            Facebook
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HeroCard;
