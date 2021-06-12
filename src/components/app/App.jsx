import styles from './App.module.scss';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Header from '../header/Header';
import About from '../pages/about/About';
import Research from '../pages/research/Research';
import Tools from '../pages/tools/Tools';
import Projects from '../pages/projects/Projects';
import Blog from '../pages/blog/Blog';
import Learn from '../pages/learn/Learn';

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/about" component={About} /> 
        <Route exact path="/blog" component={Blog} /> 
        <Route exact path="/learn" component={Learn} /> 
        <Route exact path="/projects" component={Projects} /> 
        <Route exact path="/research" component={Research} /> 
        <Route exact path="/tools" component={Tools} /> 
      </Switch>
    </div>
  );
}

export default App;
