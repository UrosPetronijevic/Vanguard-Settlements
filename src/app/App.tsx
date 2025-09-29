import Initializer from "../components/auth/Initializer";
import LandingPage from "../pages/LandingPage";

function App() {
  return (
    <Initializer>
      <div>
        <LandingPage />
      </div>
    </Initializer>
  );
}

export default App;
