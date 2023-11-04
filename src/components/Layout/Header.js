import React from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {
    return (
        <div>
            <ul>
                <li><NavLink className="nav-item nav-link " to="/task">
                    Task
                </NavLink>

                </li>
                <li><NavLink className="nav-item nav-link " to="/tasklist">
                    TaskList
                </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Header;