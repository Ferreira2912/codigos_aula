import { Link } from "react-router-dom";

export function AvatarLista() {

    return (
        <>  
            <h1>Página Avatar Lista</h1>
 
            <li> <Link to={'/avatar/cadastro'}>Cadastrar Avatar</Link> </li>

        </>
    );

}