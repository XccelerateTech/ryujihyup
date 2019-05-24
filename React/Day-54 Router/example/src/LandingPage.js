import * as React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBars from './components/NavBars';
import LeaderBoard from './screens/LeaderBoardPage';
import Questioner from './screens/QuestionerPage';
import Page from './screens/TimerPagePage';
import ShoppingList from './screens/ShoppingListPage';
import HomePage from './screens/HomePagePage';
import AboutUs from './screens/AboutUsPage';
import NoMatch from './components/NoMatch';

export default class LandingPage extends React.Component {
  render(){
    return (
      <div>
        <BrowserRouter>
        <NavBars />

        <Switch>
          <Route exact path = '/' component={HomePage} />
          <Route path = '/shoppingList' component={ShoppingList} />
          <Route path = '/leaderBoard' component={LeaderBoard} />
          <Route path = '/questioner' component={Questioner} />
          <Route path = '/aboutUs' component={AboutUs} />
          <Route path = '/timer' component={Page} />

          <Route component={NoMatch} />
          
        </Switch>
        </BrowserRouter>
      </div>
    )
  }
}