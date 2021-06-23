import { BrowserRouter, Route } from 'react-router-dom';

import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

import { AuthContextPrivider } from './contexts/AuthContext';



function App() {
  return (
    <BrowserRouter>
      <AuthContextPrivider>
        <Route path="/" exact component={Home} />
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextPrivider>
    </BrowserRouter>
  );
}

export default App;
