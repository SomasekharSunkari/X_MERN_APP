import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx';
import SignupPage from './pages/auth/signup/SignupPage.jsx';
import LoginPage from './pages/auth/login/LoginPage.jsx';
import './App.css'
import RightPanel from './components/common/RightPanel.jsx';
import Sidebar from './components/common/Sidebar.jsx';
import NotificationPage from './pages/notification/NotificationPage.jsx';
import ProfilePage from './pages/profile/ProfilePage.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<div className='flex max-w-6xl mx-auto'>
			<Sidebar/>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/signup' element={<SignupPage />} />
				<Route path='/login' element={<LoginPage />} />
				<Route path='/notifications' element={<NotificationPage/>}/>
				<Route path='/profile/:username' element={<ProfilePage/>}/>
			</Routes>
			<RightPanel/>
			<Toaster/>
		</div>
	);
}

export default App
