import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const NavBar = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();
  console.log(user?.email);

  const logouthandler = async () => {
    try {
      await logout();
    } catch (err) {
      console.log(err);
    }
    return navigate('/');
  };

  return (
    <div className="navbar">
      <Link className="navbar_li" to="/">
        <h1 className="navbar_h1">netflix</h1>
      </Link>

      {user?.email ? (
        <div className="navbar_box">
          <NavLink to="/account">
            <button className="navbar_box_btn navbar_box_btn_special_fn">
              ACCOUNT
            </button>
          </NavLink>

          <button onClick={logouthandler} className="navbar_box_btn">
            LOGOUT
          </button>
        </div>
      ) : (
        <div className="navbar_box">
          <NavLink to="/signin">
            <button className="navbar_box_btn navbar_box_btn_special_fn">
              sign in
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="navbar_box_btn">sign up</button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default NavBar;
