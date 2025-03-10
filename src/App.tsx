import { BrowserRouter } from "react-router-dom";
import NavigationConfig from "./navigation/navigation";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationConfig />
    </BrowserRouter>
  );
};

export default App;
