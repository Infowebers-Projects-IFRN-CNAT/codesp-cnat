import { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faUser } from '@fortawesome/free-solid-svg-icons';

const Header: FC = () => {

    const location = useLocation();

    const [isDropOpen, setDrop] = useState<boolean>(false);

    return (
        <>
            <header className={location.pathname === '/home' ? 'd-block' : 'd-none' }>
                <div className="container d-flex justify-content-between 
                    align-items-center">
                        <h1>CODESP</h1>
                        <div className="dropdown">
                            <FontAwesomeIcon icon={faCircleUser} color='white' 
                                onClick={() => setDrop(!isDropOpen)} />
                            <div className={isDropOpen ? 'drop isOpen' : 'drop'}>
                                <div className={isDropOpen ? 'wrapper open' : 'wrapper'}
                                    onClick={() => setDrop(!isDropOpen)}></div>
                                <nav>
                                    <h5>Fulano da Silva</h5>
                                    <ul>
                                        <li>
                                            <a href="/">Perfil</a>
                                        </li>
                                        <li>
                                            <a href="/">Sair</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                </div>
            </header>
        </>
    )
}

export default Header;