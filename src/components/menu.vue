<template>
  <div class="page-container md-layout-column">
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">T-Tarefas</span>

    </md-toolbar>

    <md-drawer :md-active.sync="showNavigation" md-swipeable>
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">T-Tarefas</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon >thumb_up</md-icon>
          <span class="md-list-item-text">Minhas tarefas</span>
        </md-list-item>

        <md-list-item>
          <md-icon>verified_user</md-icon>
          <span class="md-list-item-text">Tarefas concluídas</span>
        </md-list-item>

        <md-list-item>
          <md-icon>add</md-icon>
          <span class="md-list-item-text">Nova Tarefa</span>
        </md-list-item>

      </md-list>
    </md-drawer>

   

    <md-content>
        <div class="container box-inputs">
            <section class="row">
                <md-field class="col-md-12">
                    <label>Nome da tarefa</label>
                    <md-input ></md-input>
                </md-field>

                 <md-field class="col-md-12">
                    <label>Descrição</label>
                    <md-input ></md-input>
                </md-field>

                <div class="col-md-6">
                    <md-datepicker>
                        <label>Data de início</label>
                    </md-datepicker>
                </div>

                <div class="col-md-6">
                    <md-datepicker>
                    <label>Data prevista pra finalizar</label>
                    </md-datepicker>
                </div>

            </section>

            <md-button class="md-raised md-primary button-cadastar">Cadastrar</md-button>
        </div>
    </md-content>

    
  </div>
</template>

<script>
  export default {
    name: 'Temporary',
    data: () => ({
      showNavigation: false,
      showSidepanel: false
    })
  }
</script>

<style  scoped>
  .page-container {
    height: 100vh;
    overflow: hidden;
    position: relative;
    border: 1px solid rgba(#000, .12);
  }

  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }

  .md-content {
    padding: 16px;
    height: 100vh;
  }

  .button-cadastar {
      width: 200px;
      border-radius: 5px;
      display: block;
      margin-top: 70px;
      margin-left: auto;
      margin-right: auto;
  }
</style>