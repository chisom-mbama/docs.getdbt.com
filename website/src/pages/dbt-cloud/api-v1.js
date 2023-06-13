import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";

import "@stoplight/elements/styles.min.css";
import useBaseUrl from "@docusaurus/useBaseUrl";

const LazyStoplight = React.lazy(() => import("../../components/stoplight"));
const Fallback = (
  <div style={{ minHeight: "calc(100vh - var(--ifm-navbar-height))" }} />
);

function dbtCloudAPI() {
  return (
    <Layout permalink="/">
      <BrowserOnly>
        {() => (
          <Suspense fallback={Fallback}>
            <LazyStoplight version="v1" />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}

export default dbtCloudAPI;
