import React from 'react';
import SignUpModal from '../components/SignUpModal';

const SignUpPage = () => {
  return (
    <div>
      <SignUpModal isOpen={true} onClose={() => {}} />
    </div>
  );
};

export default SignUpPage;
