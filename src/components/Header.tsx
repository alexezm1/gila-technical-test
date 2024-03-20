import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <header className="bg-slate-200 dark:bg-slate-800 p-3 fixed top-0 w-full ">
      <h1 className="text-black dark:text-white font-bold text-center text-3xl uppercase">
        Posts
      </h1>
      <ThemeToggler />
    </header>
  );
}

export default Header;
