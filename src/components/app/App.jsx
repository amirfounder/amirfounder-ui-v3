// EXTERNAL IMPORTS
import React, { useEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
// LOCAL IMPORTS
import { Constants } from '../../utils/Constants';
import styles from './App.module.scss';
import pathNameDoesMatch from '../../utils/PathNameMatchers'
// PAGES
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Research from '../pages/research/Research';
import Tools from '../pages/tools-page/Tools';
import Projects from '../pages/projects/Projects';
import Blog from '../pages/blog/Blog';
import Learn from '../pages/learn/Learn';
// HEADERS
import Header from '../headers/header/Header';
import ToolsSubheader from '../headers/tools-subheader/ToolsSubheader';
import ResearchSubheader from '../headers/research-subheader/ResearchSubheader';
import LearnSubheader from '../headers/learn-subheader/LearnSubheader';
import AboutSubheader from '../headers/about-subheader/AboutSubheader';
import ProjectsSubheader from '../headers/projects-subheader/ProjectsSubheader';
import ScrumStandupTracker from '../pages/tools/scrum-standup-tracker/main/ScrumStandupTracker';
import { useScrumStandupTrackerContext } from '../../context/ScrumStandupTrackerContext';
import { getMembersFromCookie } from '../../utils/CookieService';


function App() {

  const location = useLocation()

  const {
    setMembers
  } = useScrumStandupTrackerContext()

  useEffect(() => {
    setMembers(getMembersFromCookie())
  }, [setMembers])

  return (
    <div className={styles.main}>
      <Header />
      {/* RENDER SUBHEADER BASED ON THE CURRENT PATHNAME */}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.ABOUT) && <AboutSubheader />}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.LEARN) && <LearnSubheader />}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.PROJECTS) && <ProjectsSubheader />}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.TOOLS) && <ToolsSubheader />}
      {pathNameDoesMatch(location, Constants.REGEX.PATHNAMES.RESEARCH) && <ResearchSubheader />}
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/blog" component={Blog} /> 
        <Route exact path="/learn" component={Learn} /> 
        <Route exact path="/projects" component={Projects} /> 
        <Route exact path="/research" component={Research} /> 
        <Route exact path="/tools" component={Tools} /> 
        <Route exact path="/tools/scrum-standup-tracker" component={ScrumStandupTracker} /> 
      </Switch>
    </div>
  );
}

export default App;
