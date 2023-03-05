import { Route, Router } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Homepage/HomePage";

function App() {
  return (
    <div>
     <section>
     <Router>
     </Router>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/movies' element={<Mov}/>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/' element={<HomePage/>}/>
     </section>
     <Header />
    </div>
  );
}

export default App;
