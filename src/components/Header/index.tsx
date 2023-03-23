import Image from 'next/image';

import Logo from 'assets/logo.svg';

import { Container } from './style';

function Header(): React.ReactElement {
  return (
    <Container>
      <div className="header__menu">
        <div className="header__logo">
          <Image
            src={Logo} // Route of the image file
            height={30} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="Your Name"
          />
        </div>
        <span>Collections</span>
        <span>Men</span>
        <span>Women</span>
        <span>About</span>
        <span>Contact</span>
      </div>
    </Container>
  );
}

export default Header;
