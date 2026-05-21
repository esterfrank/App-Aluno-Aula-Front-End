import {useState, useEffect} from 'react';
import {buscarUsuario} from '../services/githubService';
import { useUsuario } from '../components/UsuarioContext';
import {Link, NavLink} from 'react-router-dom';

export default function DashboardPage(){
    const [usuarioGit, setUsuarioGit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState('');
    
    const {usuario} = useUsuario();
    const [busca, setBusca]=useState('esterfrank');

    useEffect(()=>{
        async function carregar(){
            try {
                const dados = await buscarUsuario(busca);
                setUsuarioGit(dados)
            } catch (error){
                setErro(error.menssage);
            } finally {
                setLoading(false);
            }
        }

        carregar();

    },[busca]);

    if (loading) return <p>Carregando...</p>
    if (erro) return <p>{erro}</p>

    return (
        <>
            <h1> Olá, {usuarioGit.name || usuarioGit.login}! </h1>
            <img width='300' src={usuarioGit.avatar_url}></img>

            <a href='/'>Voltar</a>
            <link to='/'>Voltar(link)</link>
            <NavLink to='/'>Voltar (NavLink)</NavLink>
        </>
    )
}
