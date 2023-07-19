import useToggle from "./hooks/useToggle";

function App() {
  const [isShow, toggle] = useToggle();
  return (
    <>
      <section>
        <button onClick={toggle}>{isShow ? "Hide" : "Show"}</button>
        <div>{isShow && "Learning Custom Hooks"}</div>
      </section>
    </>
  );
}

export default App;
