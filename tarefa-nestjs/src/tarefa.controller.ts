import { Controller, Get } from "@nestjs/common";
import { Body, Delete, Param, Put } from "@nestjs/common/decorators";
import { TarefaService } from './tarefa.sevice';
import { Tarefa } from './tarefa.entity'; 

@Controller()
export class TarefaController {

    constructor(
        tarefaService: TarefaService
    ) {}

    @Get("/tarefa")
    async listaTarefa(): Promise<Tarefa> {
        return await this.tarefaService.findAll();
    }

    @Put("/tarefa")
    async salvarTarefa(@Body() tarefa) {
        
        await this.tarefaService.salvar(tarefa);

        return 'ok';
    }


    @Get ('/tarefa/:codigo')
    async buscarPorCodigo(@Param() Parametro): Promise<Tarefa> {
        console.log(parametro.codigo);

        return await this.tarefaService.findById(parametro.codigo)
    }

    @Delete("/tarefa/:codigo")
    excluirTarefa(@Param() parametro) {
        let index = this.tarefaLista.findIndex(tarefa => tarefa.codigo == parametro.codigo);
        this.tarefaLista.splice(index, 1);
        return "ok";
    }
}