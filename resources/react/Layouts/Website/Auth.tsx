// Dependencies
import Layout from './index';

const Auth: RPL = (props) => {
  return (
    <Layout {...props}>
      <section className="auth-section ">
        <div className="container flex items-center  flex-col h-full">
          {props.children}
        </div>
      </section>
    </Layout>
  );
};

export default Auth;
