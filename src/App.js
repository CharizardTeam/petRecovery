import { Switch, Route } from "react-router-dom";

// COMPONENTS
import LandingPage from "./pages/LandingPage";
import LostPet from "./pages/LostPet";
import FoundPet from "./pages/FoundPet";

export default function App() {
  return (
    <Switch>
      <Route path="/lost-my-pet" component={LostPet}></Route>
      <Route path="/found-a-pet" component={FoundPet}></Route>
      <Route exact path="/" component={LandingPage}></Route>
    </Switch>
  );
}
