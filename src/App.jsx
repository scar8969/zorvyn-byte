import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { BiteProvider } from './context/BiteContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import SolutionsStartups from './pages/SolutionsStartups'
import SolutionsSmes from './pages/SolutionsSmes'
import SolutionsEnterprises from './pages/SolutionsEnterprises'
import Features from './pages/Features'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductsLedger from './pages/ProductsLedger'
import ProductsInsight from './pages/ProductsInsight'
import ProductsComply from './pages/ProductsComply'
import Security from './pages/Security'
import Faq from './pages/Faq'
import BiteLayout from './components/BiteLayout'
import BiteLanding from './pages/bite/BiteLanding'
import BiteDashboard from './pages/bite/BiteDashboard'
import AddExpense from './pages/bite/AddExpense'
import BiteReports from './pages/bite/BiteReports'
import BiteCategories from './pages/bite/BiteCategories'
import BiteSettings from './pages/bite/BiteSettings'

function App() {
  return (
    <AuthProvider>
      <BiteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="solutions" element={<Solutions />} />
              <Route path="solutions/startups" element={<SolutionsStartups />} />
              <Route path="solutions/smes" element={<SolutionsSmes />} />
              <Route path="solutions/enterprises" element={<SolutionsEnterprises />} />
              <Route path="features" element={<Features />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="products/ledger" element={<ProductsLedger />} />
              <Route path="products/insight" element={<ProductsInsight />} />
              <Route path="products/comply" element={<ProductsComply />} />
              <Route path="security" element={<Security />} />
              <Route path="faq" element={<Faq />} />
            </Route>
            
            <Route path="bite" element={<BiteLanding />} />
            <Route path="bite" element={<BiteLayout />}>
              <Route path="dashboard" element={<BiteDashboard />} />
              <Route path="add" element={<AddExpense />} />
              <Route path="reports" element={<BiteReports />} />
              <Route path="categories" element={<BiteCategories />} />
              <Route path="settings" element={<BiteSettings />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </BiteProvider>
    </AuthProvider>
  )
}

export default App