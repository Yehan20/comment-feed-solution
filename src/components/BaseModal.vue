<script setup lang="ts">

// Emits
const props = defineProps<{
  title: string,
  description: string
}>()

// Props
const emit = defineEmits<{
  '@close': [],
  '@delete': [],
}>()

</script>

<template>
  <Teleport to="#app">
    <div class="modal__wrapper">
      <div class="modal__content">
        <div class="modal__header">
          <p>{{ props.title ?? 'Your Title' }}</p>
          <button @click="emit('@close')">X</button>
        </div>
        <div class="modal__body">
          <p>
            {{ props.description ?? 'Your Description' }}
          </p>
        </div>
    
          <div class="modal__footer" >
            <button title="Keep on Writing" @click="emit('@close')">Cancel</button>
            <button title="Cancel " class="btn__discard" @click="emit('@delete')">Discard</button>
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


  button {
    border-radius: 30px;

    &:hover {
      opacity: 0.6;
    }
  }

  p {
    margin: 0;
  }

  .modal__content {
    max-width: 450px;
    padding: 20px;
    background: v.$white;
    width: 100%;
    border-radius: 20px;
    @include m.flexConfig(space-between, nowrap, stretch, column);
    gap: 25px;

    .modal__header {
      @include m.flexConfig(space-between, nowrap, center);

      p {
        font-weight: 600;
        font-size: 1.1rem;
      }

      button {
        padding: 10px 15px;
      }

    }

    .modal__body {
      p {
        color: v.$darkGray;
        font-size: 0.9rem;
        line-height: 1.5;
      }
    }

    .modal__footer {
      @include m.flexConfig(flex-start, nowrap, center);
      gap: 10px;

      button {
        display: inline-block;
        padding: 10px 30px;

        &.btn__discard {
          background-color: v.$brand-color;
          color: v.$white;
        }

      }
    }
  }

}
</style>
