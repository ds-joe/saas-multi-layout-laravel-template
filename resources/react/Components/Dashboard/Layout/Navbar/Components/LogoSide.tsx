// Assets
import logo from '~/images/global/logo.png';

const LogoSide: RC = () => {
  return (
    <div className="flex items-center w-52 justify-between">
      <img
        src={logo}
        alt="Logo"
        className="w-8"
      />
    </div>
  );
};

export default LogoSide;
