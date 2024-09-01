import "./Panel.css";
const Panel = ({ children }) => {
  return (
    <>
      <div className="full-dark">
        <section className="panel">{children}</section>
      </div>
    </>
  );
};

export default Panel;
