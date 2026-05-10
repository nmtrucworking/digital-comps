import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Team from './pages/Team';
import TeamMemberDetails from './pages/TeamMemberDetails';
import Opportunities from './pages/Opportunities';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Library from './pages/Library';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="team/:id" element={<TeamMemberDetails />} />
          <Route path="opportunities" element={<Opportunities />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogDetails />} />
          <Route path="library" element={<Library />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
