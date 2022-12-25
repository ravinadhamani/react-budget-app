import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NewsList } from "./components"
import Budget from "./components/Budget"
import HowItWorks from "./components/HowItWorks"
import Login from "./components/Login"
import Main from "./components/Main"
//import NewsList from "./components/NewsList"
import Podcasts from "./components/Podcasts"
import Podcasts2 from "./components/Podcasts2"
import ProtectedRoute from "./components/ProtectedRoute"
import Signup from "./components/Signup"
import { UserAuthContextProvider } from "./Context/UserAuthContext"
import Footer from "./components/Footer"
import ContactUs from "./components/ContactUs"

function App() {


  return (
    <>
      <Container className="my-4">
        <Row>
          <Col>
            <UserAuthContextProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
                  <Route path="/" element={<ProtectedRoute><Login /></ProtectedRoute>} />
                  <Route path="/signup" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
                  <Route path="/howItWorks" element={<ProtectedRoute><HowItWorks /></ProtectedRoute>} />
                  <Route path="/podcasts" element={<ProtectedRoute><Podcasts /></ProtectedRoute>} />
                  <Route path="/podcasts2" element={<ProtectedRoute><Podcasts2 /></ProtectedRoute>} />
                  <Route path="/news" element={<ProtectedRoute><NewsList /></ProtectedRoute>} />
                  <Route path="/budget" element={<ProtectedRoute><Budget /></ProtectedRoute>} />
                  <Route path="/footer" element={<ProtectedRoute><Footer /></ProtectedRoute>} />
                  <Route path="/contactus" element={<ProtectedRoute><ContactUs /></ProtectedRoute>} />
                </Routes>
              </BrowserRouter>

            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
