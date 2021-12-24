import React from 'react';
import {useHistory} from 'react-router-dom'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Btn} from './NavbarElements';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';

const Navbar = () => {
    const token = localStorage.getItem("token");
    // const role = localStorage.getItem("role");
    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')
        localStorage.removeItem('role')
        localStorage.removeItem('major')
        history.push('/')
    }

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <Nav>
            <NavMenu>
                <NavLink to="/" activeStyle>
                     Beranda
                </NavLink>
                <NavLink to="/pertanyaan" activeStyle>
                    Pertanyaan
                </NavLink>
            </NavMenu>
                {token==null ?
                    <NavBtn>
                        <NavBtnLink to='/login' activeStyle>
                         Login
                        </NavBtnLink>
                        <NavLink to="/registerUser" activeStyle>
                         Sign Up
                        </NavLink>
                    </NavBtn>
                    :
                    <NavBtn>
                        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            <Avatar>
                                <PersonIcon />
                            </Avatar>
                        </Button>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <NavLink to="/profile" activeStyle>
                                Profile
                            </NavLink>
                            <Btn onClick={handleLogout}>
                                Logout
                             </Btn>
                        </Menu>
                    </NavBtn>
                }
        </Nav>
        </>
    );
};

export default Navbar;

