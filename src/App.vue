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
          <router-link to="/tarefas" class="md-list-item-text">Minhas tarefas</router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>verified_user</md-icon>
          <router-link to="/tarefas-concluidas" class="md-list-item-text">Tarefas concluídas</router-link>
        </md-list-item>

        <md-list-item>
          <md-icon>add</md-icon>
          <router-link to="/nova-tarefa"  class="md-list-item-text">Nova Tarefa</router-link>
        </md-list-item>

      </md-list>
    </md-drawer>

   

    <md-content>
      <router-view></router-view>
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


</style>


