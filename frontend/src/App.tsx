import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header.tsx";

function App() {

  return (
    <>
      <Header />
      <div className="App">
        <Outlet />
      </div>
    </>
  )
}

export default App
