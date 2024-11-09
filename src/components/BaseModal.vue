<script setup lang="ts">


</script>

<template>
  <Teleport to="#app">
    <div class="modal__wrapper">
      <div class="modal__content">
        <div class="modal__header">
          <p>Discard comment?</p>
          <button>X</button>
        </div>
        <div class="modal__body">
          <p>
            You have a comment in progress, are you sure you want to discard it?
          </p>
        </div>
        <div class="modal__fotoer">
          <button>Cancel</button>
          <button>Discard</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@use '../assets/scss/variables.scss' as v;
@use '../assets/scss/mixins.scss' as m;

.modal__wrapper {
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  min-height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

   p{
     margin: 0;
    }

  .modal__content {
    max-width: 450px;
    padding: 20px;
    background: v.$white;
    border-radius: 20px;
    @include m.flexConfig(space-between,nowrap,stretch,column);
    gap: 25px;

     .modal__header {
           @include m.flexConfig(space-between,nowrap,center);
         
     }
     .modal__body {
      
     }
  }

}
</style>
