const Header = () => {
  return (
    <div style={headerStyle}>
      <h1 style={{ fontSize: "40px" }}>My Todo List</h1>
      <h4 style={tailStyle}>Made with React</h4>
    </div>
  );
};

const headerStyle = {
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "80vw",

  padding: "10px 30px",
  position: "relative",
};

const tailStyle = {
  position: "absolute",

  top: "60%",
  left: "60%",
};

export default Header;
