import { FC, useEffect, useState } from 'react';
import './_register.css';

const Register: FC = () => {

    const [nome, setNome] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [matricula, setMatricula] = useState<string>('');
    const [senha, setPass] = useState<string>('');
    const [confirmSenha, setConfirmPass] = useState<string>('');

    useEffect(() =>{
        $('input[name="telefone"]').mask('(00) 00000-0000');
        $('input[name="matricula"]').mask('00000000000000');
    }, []);

    return (
        <>
            <section className='s-registro py-4'>
                <div className="container d-flex flex-column justify-content-center 
                    align-items-center">
                    <h1 data-aos="fade-down" className="text-center mb-0">
                        CODESP
                    </h1>
                    <h4 className='text-center subtitle mb-4'>
                        Registre-se para reservar materiais e quadras
                    </h4>
                    <form>
                        <div className="mb-2">
                            <input type="text" name="nome" onChange={e => setNome(e.target.value)}
                                className="form-control" placeholder="Nome" />
                        </div>
                        <div className="mb-2">
                            <input type="email" name="email" onChange={e => setEmail(e.target.value)}
                                className="form-control" placeholder="Email Institucional" />
                        </div>
                        <div className="mb-2">
                            <input type="text" name="telefone" className="form-control" 
                                placeholder="Telefone" onChange={e => setTelefone(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <input type="text" name="matricula" onChange={e => setMatricula(e.target.value)}
                                className="form-control" placeholder="Matricula" />
                        </div>
                        <div className="mb-2">
                            <input type="password" name="pswd" onChange={e => setPass(e.target.value)}
                                className="form-control" placeholder="Senha" />
                        </div>
                        <div className="mb-3">
                            <input type="password" name="confirm-pswd" className="form-control" 
                                onChange={e => setConfirmPass(e.target.value)}
                                placeholder="Confirmar senha" />
                        </div>
                        <div className="d-grid mb-2">
                            <button className="btn btn-sm">Registrar</button>
                        </div>
                        <div className="d-grid">
                            <a href='/' className="btn btn-outline-light btn-sm">Já tenho conta</a>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Register;