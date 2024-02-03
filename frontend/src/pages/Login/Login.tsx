import { FC, useEffect, useState } from 'react';
import './_login.css';

const Login: FC = () => {

    document.querySelector('html')?.classList.add('home');

    const [matricula, setMatricula] = useState<string>('');
    const [senha, setPass] = useState<string>('');

    useEffect(() =>{
        $('input[name="matricula"]').mask('00000000000000');
    }, []);

    return (
        <>
            <section className='s-login'>
                <div className="container">
                    <h1 data-aos="fade-down" className="text-center mb-1">
                        Bem vindo ao CODESP
                        </h1>
                    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center gap-2">
                        <div className="images-pseudo position-relative d-block d-lg-none"></div>
                        <div className="form-container position-relative z-2" data-aos="fade-right" data-aos-delay="500">
                            <h4 className="text-center subtitle mb-4">
                                Faça login ou <a href="/registro" className="text-decoration-none">Registre-se</a> no nosso sistema.
                            </h4>
                            <form>
                                <div className="mb-2">
                                    <input type="text" name="matricula" id="" onChange={e => setMatricula(e.target.value)}
                                        className="form-control" placeholder="Matricula" />
                                </div>
                                <div className="mb-3">
                                    <input type="password" name="pswd" id="" onChange={e => setPass(e.target.value)}
                                        className="form-control" placeholder="Senha" />
                                </div>
                                <div className="d-grid">
                                    <button className="btn btn-sm">Entrar</button>
                                </div>
                            </form>
                        </div>
                        <div className="image position-relative" data-aos="fade-left" data-aos-delay="500">
                            <img src="./src/assets/balls.svg" alt="Icones de bolas" 
                                className="w-100 d-none d-lg-block"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;