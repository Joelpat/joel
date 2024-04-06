 
import { Outlet, Link } from "react-router-dom";

const Welcome = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="btf">Biofloc Technology</Link>
                </li>
                <li>
                    <Link to="mcctr">Mycoculture</Link>
                </li>
                <li>
                    <Link to="hpnc">Hydroponic</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
        </>
    )
};

export default Welcome;

