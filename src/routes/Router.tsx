import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/global/Layout';
import LoginPage from '../pages/signup/Signup';
import SignupInfo from '../pages/signupInfo/SignupInfo'
import Mypage from '../pages/mypage/Mypage';
import Userpage from '../pages/userpage/Userpage';
import Home from '../pages/home/Home';
import Community from '../pages/community/Community';
import Post from '../pages/post/Post'
import Group from '../pages/group/Group';
import Diary from '../pages/diary/Diary';
import HospitalInfo from '../pages/hospitalInfo/HospitalInfo';
import PharmacyInfo from '../pages/pharmacyInfo/PharmacyInfo';
import PetRegister from '../pages/petRegister/PetRegister';
import PetEdit from '../pages/petEdit/PetEdit';
import NotFound from '../pages/notFound/NotFound';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Layout component={LoginPage} />} />
        <Route path="/signup-info" element={<Layout component={SignupInfo} />} />
        <Route path="/mypage" element={<Layout component={Mypage} />} />
        <Route path="/userpage" element={<Layout component={Userpage} />} />
        <Route path="/" element={<Layout component={Home} />} />
        <Route path="/community" element={<Layout component={Community} />} />
        <Route path="/feed" element={<Layout component={Post} />} />
        <Route
          path="/pet-register"
          element={<Layout component={PetRegister} />}
        />
        <Route path="/pet-edit" element={<Layout component={PetEdit} />} />
        <Route path="/post/:postId" element={<Layout component={Post} />} />
        <Route path="/community" element={<Layout component={Community} />} />
        <Route path="/group/" element={<Layout component={Group} />} />
        <Route path="/diary" element={<Layout component={Diary} />} />
        <Route
          path="/hospital-info"
          element={<Layout component={HospitalInfo} />}
        />
        <Route
          path="/pharmacy-info"
          element={<Layout component={PharmacyInfo} />}
        />
        {/*<Route path="*" element={<NotFound />} />*/}
        <Route path="/auth/kakao/callback" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
