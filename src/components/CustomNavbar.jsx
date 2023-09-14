import {
    PiBookBookmarkBold,
    PiCirclesThreeBold,
    PiGearSixBold,
    PiHouseBold,
    PiShoppingBagBold,
} from "react-icons/pi";
import { NavLink } from "react-router-dom";

const CustomNavbar = () => {
    return (
        <div className="bg-base-200 flex lg:flex-col justify-between sm:justify-center sm:gap-20 [&_.active]:bg-base-300">
            <NavLink to={"/"}>
                <button className="btn btn-square sm:btn-lg bg-transparent">
                    <PiHouseBold size={"2em"} />
                </button>
            </NavLink>

            <NavLink to={"/formation"}>
                <button className="btn btn-square sm:btn-lg bg-transparent">
                    <PiCirclesThreeBold size={"2em"} />
                </button>
            </NavLink>

            <NavLink to={"/library"}>
                <button className="btn btn-square sm:btn-lg bg-transparent">
                    <PiBookBookmarkBold size={"2em"} />
                </button>
            </NavLink>

            <NavLink to={"/shop"}>
                <button className="btn btn-square sm:btn-lg bg-transparent">
                    <PiShoppingBagBold size={"2em"} />
                </button>
            </NavLink>

            <NavLink to={"/settings"}>
                <button className="btn btn-square sm:btn-lg bg-transparent">
                    <PiGearSixBold size={"2em"} />
                </button>
            </NavLink>
        </div>
    );
};

export default CustomNavbar;
