import "./app.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Contacts from "./components/Contacts";
import FeaturedBanks from "./components/FeaturedBanks";
import SearchBar from "./components/SearchBar";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <NavBar />
        <br />
        <Contacts />
        <br />
        <FeaturedBanks />
        <br />
        <SearchBar />
      </div>
    </div>
  );
}
