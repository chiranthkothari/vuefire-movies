<template>
  <div id="app">
    <input type="text" name="name" v-model="newMovie" />
    <button @click="addMovie">Add movie</button>
    <hr />
    <ul>
      <li v-for="movie in MoviesList" :key="movie.id">{{ movie.title }}</li>
    </ul>
  </div>
</template>

<script>
import { db } from "./db.js";

export default {
  data() {
    return {
      newMovie: "",
      MoviesList: [],
    };
  },
  methods: {
    addMovie() {
      db.collection('movies').add({
        id: new Date().toISOString(),
        title: this.newMovie,
      });
      this.newMovie = "";
    },
  },
  firestore: {
    MoviesList: db.collection('movies').orderBy('id', "desc"),
  },
};
</script>

<style>
</style>
