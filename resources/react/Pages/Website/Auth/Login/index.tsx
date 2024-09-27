// Dependencies
import { usePage, useForm } from '@inertiajs/react';

// Layout
import Auth from '@/Layouts/Website/Auth';

// Components
import {
  Card,
  CardTitle,
  CardDescription,
} from '@/Components/Global/Custom/Card';
import Form, { FloatInput, FormGroup } from '@/Components/Global/Custom/Form';
import Checkbox from '@/Components/Global/Custom/Checkbox';
import Button from '@/Components/Global/Custom/Button';

// Icons
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa6';

// Types
import type { ChangeEvent, FormEvent } from 'react';

const Login: RP = () => {
  const { page_words } = usePage().props as ServerPageProps;
  const { data, setData, processing, post } = useForm({
    username: '',
    password: '',
    remember_me: false,
  });

  /**
   * Handle form submit
   *
   * @param { FormEvent } e
   * @return { void }
   */
  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    post(route('auth.login'));
  };

  return (
    <Card className="auth-content-card">
      <div className="info-side">
        <h1 className="info-title">{page_words?.welcome_back}</h1>
        <p className="info-text">{page_words?.please_login_to_continue}</p>
      </div>
      <div className="form-side">
        <CardTitle className="form-title">{page_words?.login}</CardTitle>

        <div className="mt-10 sm:grid sm:grid-cols-1 md:flex items-center gap-3 justify-center">
          <Button
            disabled
            color={'red'}
            className="flex items-center gap-2 font-bold w-full md:w-fit "
          >
            <FaGoogle />
            {page_words?.google}
          </Button>
          <Button
            disabled
            color={'blue'}
            className="flex items-center gap-2 mt-3 w-full md:w-fit md:mt-0 font-bold"
          >
            <FaFacebook />
            {page_words?.facebook}
          </Button>
          <Button
            disabled
            className="flex items-center gap-2 font-bold mt-3 w-full md:w-fit md:mt-0"
          >
            <FaGithub />
            {page_words?.github}
          </Button>
        </div>
        <div className="flex items-center gap-5 mt-10 justify-center ">
          <span className="w-9 h-[1px] bg-gray-600 inline-block"></span>
          <CardDescription>{page_words?.or_login_normally}</CardDescription>
          <span className="w-9 h-[1px] bg-gray-600 inline-block"></span>
        </div>

        <Form
          onSubmit={handleSubmit}
          className="mt-10"
        >
          <FormGroup>
            <FloatInput
              className="w-full"
              type="text"
              label={page_words?.username_email}
              onChange={(e) => setData('username', e.target.value)}
              value={data.username}
              required
            />
          </FormGroup>
          <FormGroup>
            <FloatInput
              className="w-full"
              type="password"
              label={page_words?.password}
              onChange={(e) => setData('password', e.target.value)}
              value={data.password}
              required
            />
          </FormGroup>
          <div className="mb-3 flex items-center justify-between">
            <FormGroup className="flex items-center flex-row  gap-2">
              <Checkbox
                label={page_words?.remember_me}
                onChange={(e) =>
                  setData(
                    'remember_me',
                    (e as ChangeEvent<HTMLInputElement>).target.checked,
                  )
                }
              />
            </FormGroup>
            <Button
              disabled
              type="button"
              variant={'text'}
              className="whitespace-nowrap font-medium capitalize"
            >
              {page_words?.forgot_your_password}
            </Button>
          </div>
          <FormGroup>
            <Button
              type="submit"
              color={'blue'}
              disabled={processing}
              size={'lg'}
              className="w-full font-semibold"
            >
              {page_words?.continue}
            </Button>
          </FormGroup>
        </Form>
      </div>
    </Card>
  );
};

Login.layout = (page) => (
  <Auth
    title={page.props.page_words?.login}
    children={page}
  />
);

export default Login;
