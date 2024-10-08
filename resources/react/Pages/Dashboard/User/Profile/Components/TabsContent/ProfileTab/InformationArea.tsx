// Dependencies
import { usePage } from "@inertiajs/react";

// Components
import Input from "@/Components/Global/Custom/Input";
import Label from "@/Components/Global/Custom/Label";
import Form, { FormGroup } from "@/Components/Global/Custom/Form";

// Hooks
import useStateForm from "@/hooks/useStateForm";

// Types
type InformationAreaProps = {
  formId: string;
}

const InformationArea: RC<InformationAreaProps> = ({ formId }) => {
  const { page_words } = usePage().props as ServerPageProps;
  const { data, setColumnData, errors } = useStateForm({} as any, formId);


  return (
    <Form className="mt-7">
      <FormGroup double='true'>
        <FormGroup>
          <Label htmlFor="username">{page_words?.username} *</Label>
          <Input
            id="username"
            onChange={(e) => setColumnData('username', e.target.value)}
            defaultValue={data.username}
            error={errors?.username}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">{page_words?.email} *</Label>
          <Input
            type="email"
            id="email"
            onChange={(e) => setColumnData('email', e.target.value)}
            defaultValue={data.email}
            error={errors?.email}
            required
          />
        </FormGroup>
      </FormGroup>
      <FormGroup double='true'>
        <FormGroup>
          <Label htmlFor="first_name">{page_words?.first_name}</Label>
          <Input
            id="first_name"
            onChange={(e) => setColumnData('_first_name', e.target.value)}
            defaultValue={data._first_name}
            error={errors?._first_name}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="last_name">{page_words?.last_name}</Label>
          <Input
            id="last_name"
            onChange={(e) => setColumnData('_last_name', e.target.value)}
            defaultValue={data._last_name}
            error={errors?._last_name}
          />
        </FormGroup>
      </FormGroup>
      <FormGroup double='true'>
        <FormGroup>
          <Label htmlFor="password">{page_words?.password}</Label>
          <Input
            id="password"
            type="password"
            onChange={(e) => setColumnData('password', e.target.value)}
            defaultValue={data.password}
            error={errors?.password}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password_confirmation">{page_words?.password_confirmation}</Label>
          <Input
            id="password_confirmation"
            type="password"
            onChange={(e) => setColumnData('password_confirmation', e.target.value)}
            defaultValue={data.password_confirmation}
            error={errors?.password_confirmation}
          />
        </FormGroup>
      </FormGroup>
    </Form>
  )
}


export default InformationArea;
