import Container from "./Container";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white border-b  border-b-gray-400 py-5">
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        {/* LeftBar */}
        <HeaderMenu />
        {/* Logo */}
        <Logo />
        {/* RightBar */}
        <div className="">right</div>
      </Container>
    </header>
  );
};

export default Header;
