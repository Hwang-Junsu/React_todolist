const Header = () => {
  return (
    <div style={headerStyle}>
      <h3>My Todo List</h3>
      <h3>React</h3>
    </div>
  );
};

const headerStyle = {
  margin: "auto",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80vw",

  padding: "10px 30px",

  border: "1px solid gray",
};

export default Header;
