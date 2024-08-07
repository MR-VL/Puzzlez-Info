import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Security from './pages/Security/Security.tsx';
import Home from './pages/Home';
import Registration from "./pages/Security/Registration.tsx";
import Login from "./pages/Security/Login.tsx";
import Authentication from "./pages/Security/Authentication.tsx";
import Logout from "./pages/Security/Logout.tsx";
import Puzzle from "./pages/Puzzle/Puzzle.tsx";
import CreatePuzzle from "./pages/Puzzle/CreatePuzzle.tsx";
import EditPuzzle from "./pages/Puzzle/EditPuzzle.tsx";
import ArchivePuzzle from "./pages/Puzzle/ArchivePuzzle.tsx";
import SharePuzzle from "./pages/Puzzle/SharePuzzle.tsx";
import MyCompletedPuzzlez from "./pages/My-Completed-Puzzlez.tsx";
import MyPuzzlez from "./pages/My-puzzlez.tsx";
import Approve from "./pages/Approve.tsx";
function App() {
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/Puzzlez-Info/" element={<Navigate to="/Home" />} />
                <Route path="/Home" element={<Home/>} />
                <Route path="/Security" element={<Security />} />
                <Route path="/Registration" element={<Registration/>} />
                <Route path="/Authentication" element={<Authentication/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/Logout" element={<Logout/>} />
                <Route path="/Puzzle" element={<Puzzle/>} />
                <Route path="/Create Puzzle" element={<CreatePuzzle/>} />
                <Route path="/Edit Puzzle" element={<EditPuzzle/>} />
                <Route path="/Archive Puzzle" element={<ArchivePuzzle/>} />
                <Route path="/Share Puzzle" element={<SharePuzzle/>} />
                <Route path="/My Completed Puzzlez" element={<MyCompletedPuzzlez/>} />
                <Route path="/My Puzzlez" element={<MyPuzzlez/>} />
                <Route path="/Approve Puzzlez" element={<Approve/>} />
            </Routes>
        </Router>
    );
}

export default App;
