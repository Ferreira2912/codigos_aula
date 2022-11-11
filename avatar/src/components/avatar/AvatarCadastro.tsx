import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarService } from "./AvatarService";

export function AvatarCadastro() {

    const [nome, setNome] = useState('');
    const [imagem, setImagem] = useState('');

    function salvar(event: any) {
        event.preventDefault();

        let avatar: Avatar = {
            nome: nome,
            imagem: imagem
        };

        AvatarService.salvar(avatar);
         
    }

    return (
        <>  
            <h1 className="h1_cadastro">Página Avatar Cadastro</h1>

            <Link to={'/avatar/'} className="voltar">Voltar</Link> 

            <form onSubmit={salvar}>
                <div className="mb-3">
                    <label className="form-label">Nome</label>
                    <input className="form-control" type="text" onChange={(event) => setNome(event.target.value)}/>
                </div>
                <div className="mb-3">
                    <label className="form-label">Avatar (imagem)</label>
                    <input className="form-control" type="text" onChange={(event) => setImagem(event.target.value)}/>
                </div>

                <button className="btn btn-success">Salvar</button>
            </form>
        </>
    );

}