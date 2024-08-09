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
    const base = '/Puzzlez-Info';
    return (
        <Router>
            <Nav />
            <Routes>
                <Route path="/Puzzlez-Info/" element={<Navigate to={`${base}/Home`} />} />
                <Route path={`${base}/Home`} element={<Home/>} />
                <Route path={`${base}/Security`} element={<Security />} />
                <Route path={`${base}/Registration`} element={<Registration/>} />
                <Route path={`${base}/Authentication`} element={<Authentication/>} />
                <Route path={`${base}/Login`} element={<Login/>} />
                <Route path={`${base}/Logout`} element={<Logout/>} />
                <Route path={`${base}/Puzzle`} element={<Puzzle/>} />
                <Route path={`${base}/Create-Puzzle`} element={<CreatePuzzle/>} />
                <Route path={`${base}/Edit-Puzzle`} element={<EditPuzzle/>} />
                <Route path={`${base}/Archive-Puzzle`} element={<ArchivePuzzle/>} />
                <Route path={`${base}/Share-Puzzle`} element={<SharePuzzle/>} />
                <Route path={`${base}/My-Completed-Puzzlez`} element={<MyCompletedPuzzlez/>} />
                <Route path={`${base}/My-Puzzlez`} element={<MyPuzzlez/>} />
                <Route path={`${base}/Approve-Puzzlez`} element={<Approve/>} />
            </Routes>
        </Router>
    );
}

export default App;
