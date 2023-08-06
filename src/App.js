import "./App.css";
import { NewThread } from "./NewThread";
import { ThreadApi } from "./ThreadApi";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Switch> */}
      <Routes>
        <Route exact path="/" element={<ThreadApi />} />
        <Route path="/thread/new" element={<NewThread />} />
      </Routes>
      {/* </Switch> */}
      {/* <Link to='/'>Back To Top</Link> */}
    </BrowserRouter>
  );
}

export default App;
