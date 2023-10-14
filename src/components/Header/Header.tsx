import ThemeSwitch from "../ThemeSwitch";

export default function Header() {
  return (
    <header className="Header">
      <div className="wrapper">
        <h1 className="title">InstaLog</h1>
        <ThemeSwitch />
      </div>
    </header>
  );
}
