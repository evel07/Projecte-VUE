<template>
    <div>
      <HeaderNavbar />
      <h2>Characters from Attack on Titan</h2>
      <div v-if="loading">Loading...</div>
      <div v-else>
        <ul>
          <li v-for="character in characters" :key="character.id">
            <h3>{{ character.name }}</h3>
            <p>{{ character.description || 'No description available' }}</p>
            <!-- Comprova si el camp de la imatge existeix i si la URL és correcta -->
            <img v-if="character.image_url" :src="character.image_url" :alt="character.name" />
          </li>
        </ul>
        <!-- Paginació -->
        <button v-if="nextPage" @click="loadMoreCharacters">Load more</button>
      </div>
      <FooterInfo />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import HeaderNavbar from '@/components/Header.vue';
  import FooterInfo from '@/components/Footer.vue';
  
  export default {
    name: 'ApiData',
    components: {
      HeaderNavbar,
      FooterInfo,
    },
    data() {
      return {
        characters: [], // Emmagatzemem les dades dels personatges
        loading: true, // Inicialment estem carregant les dades
        error: null, // Error de la petició
        nextPage: null, // Paginació
      };
    },
    mounted() {
      // Carreguem els personatges quan el component es monta
      this.loadCharacters('https://api.attackontitanapi.com/characters');
    },
    methods: {
      loadCharacters(url) {
        axios.get(url)
          .then(response => {
            console.log(response.data.results); // Comprova el format dels personatges
            this.characters = this.characters.concat(response.data.results); // Afegim els resultats
            this.nextPage = response.data.info.next_page; // Paginació
            this.loading = false; // Està carregat
          })
          .catch(error => {
            this.error = 'Error fetching data'; // Mostrem un missatge si hi ha error
            console.error(error); // Mostrem més detalls sobre l'error
            this.loading = false;
          });
      },
      loadMoreCharacters() {
        if (this.nextPage) {
          this.loadCharacters(this.nextPage); // Carreguem més personatges si hi ha una següent pàgina
        }
      }
    },
  };
  </script>
  
  <style scoped>
  /* Estils per mostrar les dades */
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin-bottom: 20px;
  }
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  