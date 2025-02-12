import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Auth Header</header>
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
