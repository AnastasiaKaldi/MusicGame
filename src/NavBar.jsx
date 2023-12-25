import { useState, useEffect, useRef } from "react";
import menu from "../public/menu.png";
import Link from "link-react";

function NavBar() {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="NavBar">
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={menu} />
        </div>
        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul className="flex flex-col space-y-4">
            <Link href="/" passHref>
              <DropdownItem text={"Home"} />
            </Link>
            <Link href="/meat" passHref>
              <DropdownItem text={"Instructions"} />
            </Link>
            <Link href="/cookies" passHref>
              <DropdownItem text={"The Games"} />
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

function DropdownItem({ text }) {
  return (
    <p className="dropdownItem">
      <div>{text}</div>
    </p>
  );
}

export default NavBar;
