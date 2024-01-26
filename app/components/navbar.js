// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex text-black justify-between items-center">
      <div className="text-2xl font-bold mx-5">
        <div>Calenda&Todolist</div>
      </div>
      <ul className="hidden md:flex space-x-10 mx-5 font-bold">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/calenda">Calenda</Link>
        </li>
        <li>
          <Link href="/todolist">Todolist</Link>
        </li>
        <li>
          <Link href="/notetaking">Notetaking</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
