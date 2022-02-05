import AuthCard from '../Card/AuthCard';
import LoginContainer from '../Container/LoginContainer';
import AuthLayout from '../Layout/AuthLayout';

const HomePageTemp = () => (
  <AuthLayout>
    <AuthCard>
      <LoginContainer />
    </AuthCard>
  </AuthLayout>
);

export default HomePageTemp;
