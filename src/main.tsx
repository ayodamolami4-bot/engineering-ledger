import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import {SiteShell} from './components/SiteShell';
import Home from './pages/Home';
import Work from './pages/Work';
import CaseStudy from './pages/CaseStudy';
import FieldNotes from './pages/FieldNotes';
import Note from './pages/Note';
import About from './pages/About';
import Contact from './pages/Contact';
import './styles/global.css';
const router=createBrowserRouter([{element:<SiteShell/>,children:[
 {path:'/',element:<Home/>},{path:'/work',element:<Work/>},{path:'/work/:slug',element:<CaseStudy/>},
 {path:'/notes',element:<FieldNotes/>},{path:'/notes/:slug',element:<Note/>},{path:'/about',element:<About/>},{path:'/contact',element:<Contact/>},
 {path:'*',element:<section className="section wrap page-top"><h1>Nothing recorded at this address.</h1><a href="/">Return home →</a></section>}
]}]);
createRoot(document.getElementById('root')!).render(<StrictMode><RouterProvider router={router}/></StrictMode>);
