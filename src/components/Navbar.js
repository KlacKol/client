import React, {useContext} from "react";
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {PostContext} from "../context/post/postContext";

export const Navbar = () => {
    const {logout} = useContext(PostContext);

    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
            <div className="navbar-brand">
                Telega
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink exact to="/home" className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/sub" className="nav-link">Sub</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/about" className="nav-link">Information</NavLink>
                </li>
            </ul>
            <Button
                color="primary"
                size="large"
                startIcon={<ExitToAppIcon />}
                onClick={logout}
            >
                logout
            </Button>
        </nav>
    )
};