import { NavLink } from "react-router-dom";
import "./styles.css";
import { Button } from "antd";

const Header = () => {
  return (
    <header>
      <Button type="link">
        <NavLink to={"/notes"}>Notes</NavLink>
      </Button>
      <Button type="link">
        <NavLink to={"/new-note"}>Add note</NavLink>
      </Button>
    </header>
  );
};

export default Header;