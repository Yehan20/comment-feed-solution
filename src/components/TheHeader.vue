<script setup lang="ts">
import { FaRegularUserCircle } from "oh-vue-icons/icons";
import {addIcons} from 'oh-vue-icons';
import { DEFAULT_PROFILE } from "../utils/constants";



addIcons(FaRegularUserCircle);
</script>

<template>
    <header class="header__wrapper" role="banner">
        <div class="container">
              <div class="header__details">
                    <div>
                         <p class="logo__heading">Comment Hub</p>
                    </div>
                    <div class="logo__image__wrapper">
                        <img class="logo" :src="DEFAULT_PROFILE.profilePic" alt="User Profile"
                          width="30"
                        >
                        <!-- <p class="m-none center-text">
                             {{ DEFAULT_PROFILE.name }}
                        </p> -->
                    </div>
                   
              </div> 
        </div>
    </header>
</template>