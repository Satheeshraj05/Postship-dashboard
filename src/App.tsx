import React from 'react';
import { AppProvider, Frame, Page, Layout } from '@shopify/polaris';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Metrics from './components/Metrics';
import Functionality from './components/Functionality';
import '@shopify/polaris/build/esm/styles.css';

const i18n = {
  Polaris: {
    ResourceList: {
      showing: "Showing {itemsCount} {resource}",
    },
    Common: {
      cancel: "Cancel",
      reset: "Reset",
      back: "Back",
      save: "Save",
    },
  },
};

const App = () => {
  return (
    <AppProvider i18n={i18n}>
      <Frame
        topBar={<Navbar />}
      >
        <Page fullWidth>
          <Layout>
            <Layout.Section>
              <Header />
              <Metrics />
              <Functionality />
            </Layout.Section>
          </Layout>
        </Page>
      </Frame>
    </AppProvider>
  );
};

export default App;