import { FC, useEffect, useState } from 'react';
import './home.css';

const Home: FC = () => {

    return (
        <>
            <section className='s-home pb-4 pt-5'>
                <div className="container d-flex flex-column justify-content-center 
                    align-items-center">
                        <h2>Olá, Fulano!</h2>
                        <h3>Faça já a sua reserva</h3>
                        <div className="reservas d-flex justify-content-between
                            align-items-stretch pt-5">
                            <a href="#">
                                <div className='d-flex'>
                                    <div className="text-group">
                                        <h5>Reservar</h5>
                                        <h4><b>Material</b></h4>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className='d-flex'>
                                    <div className="text-group">
                                        <h5>Reservar</h5>
                                        <h4><b>Local</b></h4>
                                    </div>
                                </div>
                            </a>
                            <a href="#">
                                <div className='d-flex'>
                                    <div className="text-group">
                                        <h5>Reservar</h5>
                                        <h4><b>Casadinha</b></h4>
                                    </div>
                                </div>
                            </a>
                        </div>
                </div>
            </section>
        </>
    )
}

export default Home;