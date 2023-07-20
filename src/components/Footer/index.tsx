import { Footer as FooterUI } from "antd/es/layout/layout";
import "./styles.css";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <FooterUI>Created by Lipnitski Artemi &copy; {year}</FooterUI>
  );
};

export default Footer;