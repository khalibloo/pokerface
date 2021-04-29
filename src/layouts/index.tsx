import React from "react";
import PageLayout from "@/layouts/PageLayout";
import { Auth0Provider } from "@auth0/auth0-react";
import config from "@/utils/config";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

interface Props {}
const IndexLayout: React.FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        audience={config.auth0Audience}
        domain={config.auth0Domain}
        clientId={config.auth0ClientId}
        redirectUri={window.location.origin}
      >
        <PageLayout>{children}</PageLayout>
      </Auth0Provider>
    </QueryClientProvider>
  );
};

export default IndexLayout;
