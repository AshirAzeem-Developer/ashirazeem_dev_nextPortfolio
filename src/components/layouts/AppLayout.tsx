import React, { ReactNode, useState } from 'react';
import SideNav from '../SideNav';
import HeaderNav from '../HeaderNav';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const [openSideNav, setOpenSideNav] = useState<boolean>(false);
  const [mouseHover, setMouseHover] = useState<boolean>(false);
  return (
    <div
      className={`wrapper ${mouseHover ? 'sidebar-hovered' : ''} ${openSideNav ? '' : 'toggled'}`}
    >
      // TO DO NAV
      <SideNav
        openSideNav={openSideNav}
        setOpenSideNav={setOpenSideNav}
        mouseHover={mouseHover}
        setMouseHover={setMouseHover}
      />
      <div>
        <HeaderNav />
      </div>
      {/* <div className='sidebar-wrapper-placeHolder'></div> */}
      <div className="page-wrapper">
        <div className="page-content">{children}</div>
        <footer className="page-footer">
          <p className="mb-0">Copyright © 2025. All right reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;
