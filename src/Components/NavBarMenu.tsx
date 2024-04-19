import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function PositionedMenu() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const navigation = useNavigate();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton className='text-white' onClick={handleClick}>
                <MenuIcon style={{ color: 'white' }} />
            </IconButton>
            <Menu
                className='mt-8 ml-2'
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem onClick={() => {
                    navigation('/');
                    handleClose();
                }}>Home</MenuItem>
                <MenuItem onClick={() => {
                    navigation("createPost");
                    handleClose();
                }}>Create Post</MenuItem>
                {/* <MenuItem onClick={handleClose}></MenuItem> */}
            </Menu>
        </div>
    );
}