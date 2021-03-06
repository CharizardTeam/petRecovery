import { Switch, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import LostPet from "./pages/LostPet";
import FoundPet from "./pages/FoundPet";
import Results from "./pages/Results";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/lost-pet" component={LostPet}></Route>
        <Route path="/found-pet" component={FoundPet}></Route>
        <Route exact path="/" component={LandingPage}></Route>
        <Route exact path="/results" component={Results}></Route>
      </Switch>
      <Footer />
    </div>
  );
}
