import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Landing from './landing.jsx';
import Container from './Container Info/container.jsx';
import Skills from './Container Info/skills.jsx';
import Certification from './Container Info/certifications.jsx';
import Info from './Container Info/knowme.jsx';
import Contacts from './Container Info/contacts.jsx';
import Home from './Container Info/home.jsx';
import Error from './Container Info/error.jsx';
function App(){
    return(
    <BrowserRouter>
        <Landing />
        <Routes>
          <Route path="/home" element={<Container />}>
            <Route index element={<Home />} />
            <Route path="skills" element={<Skills />} />
            <Route path="certifications" element={<Certification />} />
            <Route path="knowme" element={<Info />}></Route>
            <Route path="contact" element={<Contacts />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
    );
}

createRoot(document.getElementById('root')).render(
    <App />
)