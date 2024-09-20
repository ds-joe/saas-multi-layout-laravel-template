// Dependencies
import { useForm, usePage } from '@inertiajs/react';


// Components
import {
  TabsContent,
} from '@/Components/Global/Shadcn/ui/tabs';
import { Button } from '@/Components/Global/Shadcn/ui/button';
import Form, { FloatInput, FormGroup, FormErrors } from '@/Components/Global/Custom/Form';
import { ChangeEvent, FormEvent } from 'react';

const PersonalInfoTab: RC = () => {
  const { page_words, auth } = usePage().props as ServerPageProps;
  const { data, setData, processing, post, errors } = useForm({
    _first_name: auth.user?._first_name,
    _last_name: auth.user?._last_name,
    email: auth.user?.email ?? "",
    _phone: auth.user?._phone,
    password: "",
    password_confirmation: "",
    username: auth.user?.username ?? ""
  });

  /**
   * Handle form submit
   *
   * @param { FormEvent } e
   * @return { void }
   */
  const handleFormSubmit = (e: FormEvent): void => {
    e.preventDefault();

    post(route('user.profile.update.details'));
  }

  return (
    <TabsContent className='w-full' value="personal-info">
      <Form className='mt-8 gap-6' onSubmit={handleFormSubmit}>
        <FormErrors errors={errors} />
        <FormGroup>
          <FloatInput
            type='text'
            label={page_words?.username}
            value={data.username ?? ""}
            error={errors.username}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setData('username', e.target.value)}
          />
        </FormGroup>
        <FormGroup double={'true'}>
          <FloatInput
            type='text'
            label={page_words?.first_name}
            value={data._first_name ?? ""}
            error={errors._first_name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setData('_first_name', e.target.value)}
          />
          <FloatInput
            type='text'
            label={page_words?.last_name}
            value={data._last_name ?? ""}
            error={errors._last_name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setData('_last_name', e.target.value)}
          />
        </FormGroup>
        <FormGroup double={'true'}>
          <FloatInput
            type='email'
            label={page_words?.email}
            value={data.email ?? ""}
            error={errors.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setData('email', e.target.value)}
          />
          <FloatInput
            type='text'
            label={page_words?.phone}
            value={data._phone ?? ""}
            error={errors._phone}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setData('_phone', e.target.value)}
          />
        </FormGroup>
        <FormGroup double={'true'}>
          <FloatInput
            type='password'
            label={page_words?.password}
            value={data.password ?? ""}
            error={errors.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setData('password', e.target.value)}
          />
          <FloatInput
            type='password'
            label={page_words?.password_confirmation}
            value={data.password_confirmation ?? ""}
            error={errors.password_confirmation}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setData('password_confirmation', e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Button variant={'water'} disabled={processing}>{page_words?.update}</Button>
        </FormGroup>
      </Form>
    </TabsContent>
  )
}


export default PersonalInfoTab;
