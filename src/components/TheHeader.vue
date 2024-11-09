<script setup lang="ts">
import { FaRegularUserCircle } from "oh-vue-icons/icons";
import {addIcons} from 'oh-vue-icons';



addIcons(FaRegularUserCircle);
</script>

<template>
    <header class="header__wrapper" role="banner">
        <div class="container">
              <div class="header__details">
                    <div>
                         <h3 class="logo__heading">Comment Hub</h3>
                    </div>
                    <div>
                        <v-icon name="fa-regular-user-circle" :scale="2"></v-icon>
                    </div>
                   
              </div> 
        </div>
    </header>
</template>