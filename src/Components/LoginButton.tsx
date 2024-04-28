import { Button, Menu, MenuItem } from "@mui/material";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { useNavigate } from "react-router-dom";


export default function BasicMenu({ setUserData }: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const navigation = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutFunction = () => {
        navigation('/');
        setUserData({});
        localStorage.clear();
        console.log("Storage cleared");
    }

    return (
        <div>
            <button
                className="px-1 py-2"
                onClick={handleClick}
            >
                <MdAccountCircle size={35} />
            </button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => navigation("/")}>Profile</MenuItem>
                <MenuItem onClick={() => navigation("/")}>My account</MenuItem>
                <MenuItem onClick={() => logoutFunction()}>Logout</MenuItem>
            </Menu>
        </div>
    );
}