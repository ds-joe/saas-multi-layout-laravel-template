// Components
import Section from "@/Components/Dashboard/Utils/Section";
import AvatarArea from "./AvatarArea";
import InformationArea from "./InformationArea";


// Types
export type ProfileTabProps = {
  formId: string
}


const ProfileTab: RC<ProfileTabProps> = ({ formId }) => {

  return (
    <Section>
      <div>
        <AvatarArea />
        <InformationArea formId={formId} />
      </div>
    </Section>
  )
}

export default ProfileTab;
