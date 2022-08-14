import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.headerStyle}>
      <h1 style={{ fontSize: "40px" }}>My Todo List</h1>
      <h4 className={style.tailStyle}>Made with React</h4>
    </div>
  );
};

export default Header;
