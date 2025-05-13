import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans.jsx';
import VanDetails from './pages/Vans/VanDetails.jsx';
import "./server.js";
import Layout from './components/Layout.jsx';
import DashboardLayout from './components/DashboardLayout.jsx';
import Income from './pages/Host/Income.jsx';
import Reviews from './pages/Host/Reviews.jsx';
import Host from './pages/Host/Host.jsx';
import HostVans from './pages/Host/HostVans.jsx';
import HostVanDetail from './pages/Host/HostVanDetail.jsx';
import HostVanInfo from './pages/Host/HostVanInfo.jsx';
import HostVanPricing from './pages/Host/HostVanPricing.jsx';
import HostVanPhotos from './pages/Host/HostVanPhotos.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';

function App() {

  return (
    <>
      {/* These routes are relative routes as opposed to absolute routes, hence lack of a slash infront of it */}
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path='vans/:id' element={<VanDetails />} />
          <Route path='login' element={<Login />} />

          <Route path="host" element={<DashboardLayout />}>
            <Route index element={<Host />} />  {/* This is the default route for /host */}
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="Photos" element={<HostVanPhotos />} />
            </Route>
          </Route>


          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
