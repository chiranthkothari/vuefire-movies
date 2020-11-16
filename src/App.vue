<template>
  <div id="app">
    <input type="text" name="name" v-model="newMovie">
    <button @click="addMovie">Add movie</button>
    <hr>
    <ul>
      <li v-for="movie in moviesList" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
import { moviesDb } from "./db"

export default {
  data() {
    return {
      newMovie: "",
      moviesList: [],
    };
  },
  methods:{
    addMovie(){
      moviesDb.add({
        id: new Date().toISOString(),
        title: this.newMovie,
      });
      this.newMovie= '';
    }
  },
  firestore:{
    moviesList: moviesDb
  },
};
</script>

<style>
</style>
