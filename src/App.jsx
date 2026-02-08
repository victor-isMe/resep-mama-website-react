import {Routes, Route} from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import RecipeDetail from './pages/RecipeDetail'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import ProtectedRoute from './components/admin/ProtectedRoute'
import CreateRecipe from './pages/admin/CreateRecipe'
import EditRecipe from './pages/admin/EditRecipe'
import Recipes from './pages/Recipes'
import Contact from './pages/Contact'
import ContactInbox from './pages/admin/ContactInbox'
import Footer from './components/common/Footer'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <div>
      <ScrollToTop />

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tentang' element={<About />} />
        <Route path='/resep' element={<Recipes />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/resep/:id' element={<RecipeDetail />} />
        <Route path='/admin/login' element={<Login />} />
        <Route 
          path='/admin'
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/admin/create'
          element={
            <ProtectedRoute>
              <CreateRecipe />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/admin/edit/:id'
          element={
            <ProtectedRoute>
              <EditRecipe />
            </ProtectedRoute>
          }
        />
        <Route 
          path='/admin/contacts'
          element={
            <ProtectedRoute>
              <ContactInbox />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </div>
  )
}

export default App