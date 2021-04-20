import React from "react";
import PageLayout from "@/layouts/PageLayout";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "@/utils/config";

interface Props {}
const IndexLayout: React.FC<Props> = ({ children }) => {
  return (
    <Auth0Provider
      audience={config.auth0Audience}
      domain={config.auth0Domain}
      clientId={config.auth0ClientId}
      redirectUri={window.location.origin}
    >
      <PageLayout>{children}</PageLayout>
    </Auth0Provider>
  );
};

export default IndexLayout;
