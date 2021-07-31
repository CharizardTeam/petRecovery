import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import LostPet from "./pages/LostPet";
import FoundPet from "./pages/FoundPet";

export default function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/lost-my-pet" component={LostPet}></Route>
        <Route path="/found-a-pet" component={FoundPet}></Route>
        <Route exact path="/" component={LandingPage}></Route>
      </Switch>
    </div>
  );
}
