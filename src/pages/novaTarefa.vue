<template>
    <div class="container box-inputs">
        <section class="row ">
            <md-field class="col-lg-5 mx-auto" >
                <label>Título da tarefa</label>
                <md-input v-model="tarefa.titulo"></md-input>
            </md-field>
        </section>

        <section class="row">
            <md-field class="col-lg-5 mx-auto">
                <label>Descrição</label>
                <md-input v-model="tarefa.descricao" ></md-input>
            </md-field>
        </section>

        <section class="row">
            <div class="col-lg-5 mx-auto">
                <md-datepicker v-model="tarefa.dataInicio">
                    <label>Data de início</label>
                </md-datepicker>
            </div>
        </section>
        <section class="row">
            <div class="col-lg-5 mx-auto">
                <md-datepicker v-model="tarefa.dataFim">
                    <label>Data prevista pra finalizar</label>
                </md-datepicker>
            </div>
        </section>


        <md-button @click="cadastrar()" class="md-raised md-primary button-cadastar">Cadastrar</md-button>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            tarefa: {
                titulo: null,
                descricao: null,
                dataInicio: null,
                dataFim: null
            }
        }
    },

    methods: {
        cadastrar() {
            console.log(this.tarefa);
        }
    }
}
</script>

<style scoped>
    .box-inputs {
        padding-top: 50px;
    }

    .button-cadastar {
        width: 300px;
        border-radius: 5px;
        display: block;
        margin-top: 70px;
        margin-left: auto;
        margin-right: auto;
    }
</style>