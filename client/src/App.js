import { BrowserRouter,Navigate,Routes,Route } from "react-router-dom";
import ProfilePage from "scenes/ProfilePage";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";



function App() {

  return <div className="App">
   <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<ProfilePage />} />
        <Route path="/profile/:userId" element={<ProfilePage />} />
    </Routes>
   </BrowserRouter>
  </div>

}

export default App;
