import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import {useUsuario} from '../components/UsuarioContext'
import InputField from "../components/inputField";

export default function LoginPage() {
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');

    const {setUsuario} = useUsuario();

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        if (!user || !senha){
            setErro('Preencha todos os campos');
            return; 
        }
        setErro('');
        console.log('Login:', email, senha);
        setUsuario(user);
        navigate('/dashboard');
    }

    return(
        <form onSubmit={handleSubmit}>
            <InputField 
                label="Usuario"
                placeholder="username"
                type="text" 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <InputField 
                label="Senha"
                type="password" 
                value={senha}
                onChange={e => setSenha(e.target.value)}
            > 
                <a href="esqueceu.html"> Esqueceu?</a>
            </InputField>

            {erro && <p>{erro}</p>}
            <button type="submit">Entrar</button>                     
        </form>
    )
}