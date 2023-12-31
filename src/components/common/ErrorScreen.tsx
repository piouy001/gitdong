import React from "react";

import Layout from "components/layout/Layout";

import ErrorContent from "./ErrorContent";

const ErrorScreen = (): React.ReactNode => {
  return (
    <Layout>
      <ErrorContent text="This user doesn't exist." />
    </Layout>
  );
};

export default ErrorScreen;
