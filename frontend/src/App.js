import Layout from './components/layout/Layout';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import './app.css';
import Dashboard from './pages/Dashboard';
import AddTicket from './pages/AddTicket';
function App() {
  return (
    <div className='App'>
      {/* <Login /> */}
      {/* <ResetPassword /> */}
      <Layout>
        {/* <Dashboard /> */}
        <AddTicket />
      </Layout>
    </div>
  );
}

export default App;
