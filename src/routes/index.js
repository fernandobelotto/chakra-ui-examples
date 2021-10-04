import { Box } from '@chakra-ui/layout';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleSidebar from '../components/Sidebar';
import DataDisplayPage from '../pages/DataDisplayPage';
import DisclosurePage from '../pages/DisclosurePage';
import FeaturesPage from '../pages/FeaturesPage';
import FeedbackPage from '../pages/FeedbackPage';
import FormPage from '../pages/FormPage';
import Home from '../pages/Home';
import LayoutPage from '../pages/LayoutPage';
import MediaAndIconsPage from '../pages/MediaAndIconsPage';
import NavigationPage from '../pages/NavigationPage';
import OtherPage from '../pages/OtherPage';
import OverlayPage from '../pages/OverlayPage';
import Typography from '../pages/Typography';

export default function Routes() {
  return (
    <Router>
      <Box>
        <SimpleSidebar>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/features">
              <FeaturesPage />
            </Route>
            <Route exact path="/layout">
              <LayoutPage />
            </Route>
            <Route exact path="/formulários">
              <FormPage />
            </Route>
            <Route exact path="/display">
              <DataDisplayPage />
            </Route>
            <Route exact path="/feedback">
              <FeedbackPage />
            </Route>
            <Route exact path="/overlay">
              <OverlayPage />
            </Route>
            <Route path="/tipografia">
              <Typography />
            </Route>
            <Route exact path="/disclosure">
              <DisclosurePage />
            </Route>
            <Route exact path="/navegação">
              <NavigationPage />
            </Route>
            <Route exact path="/media">
              <MediaAndIconsPage />
            </Route>
            <Route exact path="/outros">
              <OtherPage />
            </Route>
            <Route exact path="/hooks"></Route>
          </Switch>
        </SimpleSidebar>
      </Box>
    </Router>
  );
}
