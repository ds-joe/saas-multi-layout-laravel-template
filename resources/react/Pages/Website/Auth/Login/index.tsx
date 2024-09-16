// Dependencies
import { usePage, useForm } from "@inertiajs/react";

// Layout
import Auth from "@/Layouts/Website/Auth";

// Components
import { Card } from "@/Components/Global/Shadcn/ui/card";
import { Button } from "@/Components/Global/Shadcn/ui/button";
import { Checkbox } from "@/Components/Global/Shadcn/ui/checkbox";
import Form, { FloatInput, FormGroup } from "@/Components/Global/Custom/Form";
import { Label } from "@/Components/Global/Shadcn/ui/label";

// Icons
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa6";

// Types
import type { ChangeEvent, FormEvent } from "react";

const Login: RP = () => {
  const { page_words } = usePage().props as ServerPageProps;
  const { data, setData, processing, post } = useForm({
    email: '',
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
  }

  return (
    <Card className="auth-content-card">
      <div className="info-side">
        <h1 className="info-title">{page_words?.welcome_back}</h1>
        <p className="info-text">{page_words?.please_login_to_continue}</p>
      </div>
      <div className="form-side">
        <h1 className="form-title">{page_words?.login}</h1>

        <div className="mt-10 sm:grid sm:grid-cols-1 md:flex items-center gap-3 justify-center">
          <Button disabled variant={'danger'} className="flex items-center gap-2 font-bold w-full md:w-fit ">
            <FaGoogle />
            {page_words?.google}
          </Button>
          <Button disabled variant={'water'} className="flex items-center gap-2 mt-3 w-full md:w-fit md:mt-0 font-bold">
            <FaFacebook />
            {page_words?.facebook}
          </Button>
          <Button disabled className="flex items-center gap-2 font-bold mt-3 w-full md:w-fit md:mt-0">
            <FaGithub />
            {page_words?.github}
          </Button>
        </div>
        <div className="flex items-center gap-5 mt-10 justify-center">
          <span className="w-9 h-[1px] bg-foreground inline-block"></span>
          <span>{page_words?.or_login_normally}</span>
          <span className="w-9 h-[1px] bg-foreground inline-block"></span>
        </div>

        <Form onSubmit={handleSubmit} className="mt-10">
          <FormGroup>
            <FloatInput
              className="w-full"
              type="email"
              label={page_words?.email}
              onChange={(e) => setData('email', e.target.value)}
              value={data.email}
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
          <div className="my-3 flex items-center justify-between">
            <FormGroup className="flex items-center flex-row  gap-2">
              <Checkbox
                id="remember_me"
                onChange={(e) => setData('remember_me', (e as ChangeEvent<HTMLInputElement>).target.checked)}
                value={data.email}
              />
              <Label className="text-base" htmlFor="remember_me" >{page_words?.remember_me}</Label>
            </FormGroup>
            <Button disabled type="button" variant={'link'}>{page_words?.forgot_your_password}</Button>
          </div>
          <FormGroup>
            <Button type="submit" disabled={processing} size={'lg'} className="w-full">{page_words?.continue}</Button>
          </FormGroup>
        </Form>

      </div>
    </Card>
  )
}

Login.layout = (page) => <Auth children={page} />

export default Login;
