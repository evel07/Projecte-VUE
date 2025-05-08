<template>
    <div class="api-page">
      <HeaderNavbar />
      <main class="content">
        <h2>API de Attack on Titan</h2>
  
        <div v-if="loading" class="loading">Carregant...</div>
  
        <div v-else>
          <ul class="character-list">
            <li
              v-for="character in characters"
              :key="character.id"
              class="character-card"
            >
              <img
                v-if="character.img && isValidImageUrl(character.img)"
                :src="character.img"
                :alt="character.name"
                class="character-image"
              />
              <img
                v-else
                src="https://via.placeholder.com/350x350?text=Imatge+no+disponible"
                alt="Imatge no disponible"
                class="character-image"
              />
              <div class="character-info">
                <h3>{{ character.name }}</h3>
                <p>{{ character.description || 'Descripció no disponible' }}</p>
              </div>
            </li>
          </ul>
  
          <!-- Botó de paginació -->
          <button
            v-if="nextPage"
            @click="loadMoreCharacters"
            class="load-more"
          >
            Carregar més
          </button>
        </div>
      </main>
      <FooterInfo />
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import HeaderNavbar from '@/components/Header.vue'
  import FooterInfo from '@/components/Footer.vue'
  
  export default {
    name: 'ApiData',
    components: {
      HeaderNavbar,
      FooterInfo
    },
    data() {
      return {
        characters: [],
        loading: true,
        error: null,
        nextPage: null
      }
    },
    mounted() {
      this.loadCharacters('https://api.attackontitanapi.com/characters')
    },
    methods: {
      loadCharacters(url) {
        axios
          .get(url)
          .then((response) => {
            this.characters = this.characters.concat(response.data.results)
            this.nextPage = response.data.info.next_page
            this.loading = false
          })
          .catch((error) => {
            this.error = 'Error carregant les dades'
            console.error(error)
            this.loading = false
          })
      },
      loadMoreCharacters() {
        if (this.nextPage) {
          this.loadCharacters(this.nextPage)
        }
      },
      isValidImageUrl(url) {
        // Comprova si l'URL de la imatge és vàlida
        return (url && url.startsWith('http') && (url.endsWith('.png') || url.endsWith('.jpg')));
      }
    }
  }
  </script>
  
  <style scoped>
  .api-page {
    background-color: #0d0d0d;
    color: #e0e0e0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  .content {
    flex: 1;
    padding: 40px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  h2 {
    color: #00cc66;
    text-align: center;
    margin-bottom: 40px;
    text-shadow: 1px 1px 4px rgba(0, 204, 102, 0.4);
  }
  
  .loading {
    text-align: center;
    font-size: 1.2rem;
    color: #aaaaaa;
  }
  
  .character-list {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  
  .character-card {
    background-color: #1a1a1a;
    border: 1px solid #00cc66;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 0 15px rgba(0, 204, 102, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: transform 0.2s ease;
  }
  
  .character-card:hover {
    transform: scale(1.02);
    box-shadow: 0 0 25px rgba(0, 204, 102, 0.3);
  }
  
  .character-image {
    width: 100%;
    height: auto;
    max-height: 300px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
    border: 2px solid #00cc66;
  }
  
  .character-info {
    text-align: center;
  }
  
  .character-info h3 {
    margin: 0;
    font-size: 1.2rem;
    color: #66ffb3;
  }
  
  .character-info p {
    font-size: 0.95rem;
    margin-top: 10px;
    color: #cccccc;
  }
  
  .load-more {
    display: block;
    margin: 40px auto 0;
    padding: 12px 24px;
    font-size: 1rem;
    background-color: #006644;
    color: white;
    border: 2px solid #00cc66;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 600;
  }
  
  .load-more:hover {
    background-color: #00cc66;
    color: #0d0d0d;
  }
  </style>
  