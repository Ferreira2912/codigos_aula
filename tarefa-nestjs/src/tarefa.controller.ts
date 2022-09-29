import { Controller, Get } from "@nestjs/common";
import { Body, Delete, Param, Put } from "@nestjs/common/decorators";

@Controller()
export class TarefaController{

    tarefaLista = []; //{codigo: '', descricao: ''}

    @Get("/tarefa")
    listaTarefa() {
        return this.tarefaLista;
        //--this-- para utilizar atributos dentro das ações//
    }

    @Put("/tarefa")
    salvarTarefa(@Body() tarefa) {
        //@Body receber do corpo da aquisição//
        let index = this.tarefaLista.findIndex(t => t.codigo == tarefa.codigo);
        if(index >= 0) {
            this.tarefaLista[index].descricao = tarefa.descricao;
        } else {
            this.tarefaLista.push(tarefa);
        }
        return "ok";
    }

    @Get("/tarefa/:codigo")
    buscarPorCodigo(@Param() parametro) {
        //@param é o objeto como algum oarametro, por meio disso pode requisitar informações np final da URL.
        //Ex:localhost:3100/tarefa/007 007 = codigo
        console.log(parametro.codigo); //pega o :codigo da url
        let tarefa = this.tarefaLista.find(tarefa => tarefa.codigo == parametro.codigo);
        return tarefa;
    }

    @Delete("/tarefa/:codigo")
    excluirTarefa(@Param() parametro) {
        let index = this.tarefaLista.findIndex(tarefa => tarefa.codigo == parametro.codigo);
        this.tarefaLista.splice(index, 1);
        return "ok";
    }
}