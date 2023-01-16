import { NavLink } from "react-router-dom";
import "../assets/css/style.css";
export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);
    return (
        <div className="danger">

            <NavLink className={`me-3 ${setActiveClass}`} to="/">
                Home
</NavLink>
            {" - "}
            <NavLink className={setActiveClass} to="/pokemones">
                Pokemones
</NavLink>
            {" - "}



        </div>
    );
}