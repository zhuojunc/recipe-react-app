import React from "react";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { Container } from '@material-ui/core';
import ButtonBases from "./ButtonBases";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Bookmark from "./Bookmark";
import Navigation from "./Navigation";
import EditRecipeForm from "./EditRecipeForm";
import NewRecipeForm from "./NewRecipeForm";
import { ToastContainer } from "react-toastify";

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

export default class App extends React.Component {

  render() {
    return (
      <Router>
        <Container>
          <Navigation />
          <Switch>
            <Route exact path="/">
              <ButtonBases />
            </Route>            
            <Route path="/bookmark" component={Bookmark} />
            <Route path="/new" component={NewRecipeForm} />
            <Route path="/Breakfast" component={Breakfast} />
            <Route path="/Lunch" component={Lunch} />
            <Route path="/Dinner" component={Dinner} />
            <Route path="/edit/:id" component={EditRecipeForm} />
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Container>
        <ToastContainer />
      </Router>      
    )
  }
}
