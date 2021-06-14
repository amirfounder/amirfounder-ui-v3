// EXTERNAL IMPORTS
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
// LOCAL IMPORTS
import { Constants } from '../../utils/Constants';
import styles from './App.module.scss';
import pathNameDoesMatch from '../../utils/PathNameMatchers'
// PAGES
import Home from '../pages/home/Home';
import About from '../pages/about/about-page/About';
import Research from '../pages/research/research-page/Research';
import Tools from '../pages/tools/tools-page/Tools';
import Projects from '../pages/projects/projects-page/Projects';
import Blog from '../pages/blog/Blog';
import Resume from '../pages/about/about-subpages/resume/Resume';
import Vision from '../pages/about/about-subpages/vision/Vision';
import Interests from '../pages/about/about-subpages/interests/Interests';
import Contact from '../pages/contact/Contact';
import StandupTracker from '../pages/tools/tools-subpages/standup-tracker/StandupTracker';
// HEADERS
import Header from '../headers/header/Header';
import ToolsSubheader from '../headers/subheaders/tools-subheader/ToolsSubheader';
import ResearchSubheader from '../headers/subheaders/research-subheader/ResearchSubheader';
import AboutSubheader from '../headers/subheaders/about-subheader/AboutSubheader';
import ProjectsSubheader from '../headers/subheaders/projects-subheader/ProjectsSubheader';
import BlogSubheader from '../headers/subheaders/blog-subheader/BlogSubheader';


function App() {

  const location = useLocation()

  return (
    <div className={styles.main}>
      <Header />
      {/* SUBHEADERS */}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.ABOUT) && <AboutSubheader />}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.BLOG) && <BlogSubheader />}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.PROJECTS) && <ProjectsSubheader />}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.TOOLS) && <ToolsSubheader />}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.RESEARCH) && <ResearchSubheader />}

      {/* PATHS */}
      <Switch>
        {/* HOME */}
        <Route exact path={Constants.PATHS.HOME} component={Home} />
        {/* ABOUT */}
        <Route exact path={Constants.PATHS.ABOUT} component={About} /> 
        <Route exact path={Constants.PATHS.ABOUT_VISION} component={Vision} /> 
        <Route exact path={Constants.PATHS.ABOUT_RESUME} component={Resume} /> 
        <Route exact path={Constants.PATHS.ABOUT_INTERESTS} component={Interests} /> 
        {/* BLOG */}
        <Route exact path={Constants.PATHS.BLOG} component={Blog} /> 
        {/* PROJECTS */}
        <Route exact path={Constants.PATHS.PROJECTS} component={Projects} />
        {/* RESEARCH */}
        <Route exact path={Constants.PATHS.RESEARCH} component={Research} /> 
        {/* TOOLS */}
        <Route exact path={Constants.PATHS.TOOLS} component={Tools} /> 
        <Route exact path={Constants.PATHS.TOOLS_STANDUP_TRACKER} component={StandupTracker} /> 
        {/* CONTACT */}
        <Route exact path={Constants.PATHS.CONTACT} component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
