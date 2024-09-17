// Dependencies
import { Fragment } from 'react';

// Layout Template
import Layout from './Layout';

const WebsiteLayout: RPL = (props) => {
  return (
    <Fragment>
      <Layout {...props} />
    </Fragment>
  );
};

export default WebsiteLayout;
