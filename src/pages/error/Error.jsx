import './Error.css';
import { Link } from 'react-router-dom';

function Error(){
    return(
        <div className='container-error'>
            <img src="notfound.png" alt="pagina não encontrada" />
            <h1>Página não encontrada!</h1>
            <Link to="/">
                Voltar para Home
            </Link>
        </div>
    )
}

export default Error;