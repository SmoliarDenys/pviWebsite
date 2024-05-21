import "./App.css";

import { Toaster } from "react-hot-toast";

import Navbar from "./components/navbar/Navbar";
import LeftSide from "./components/layoutDefault/LeftSide";
import RightSide from "./components/layoutDefault/RightSide";

import useListenMessages from "./hooks/useListenMessages";

function App() {
  useListenMessages();

  return <div>
    <Navbar />

      <div className="container mx-auto flex px-7 h-screen">

        <LeftSide/>
        <RightSide/>
        
      </div>

    <Toaster />
  </div>
}

export default App;
