import "./App.css";
import Announcement from "./components/announcement";
import Navbar from "./commons/navigation/navBar";

function App({ children }) {
  return (
    <div>
      <Navbar />
      <div className="mt-5 p-5">
        <Announcement />
      </div>
    </div>
  );
}

export default App;
