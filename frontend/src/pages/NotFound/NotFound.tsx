import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: FC = () => {

    const navigate = useNavigate();

    return (
        <>
            <section className='s-not-found pb-4 pt-5'>
                <div className="container d-flex flex-column justify-content-center 
                    align-items-center">
                        <h1>Ops!</h1>
                        <h3>Algo deu errado</h3>
                        <button onClick={() => navigate(-1)} className="btn btn-light mt-5">
                            Voltar
                        </button>
                </div>
            </section>
        </>
    )
}

export default NotFound;