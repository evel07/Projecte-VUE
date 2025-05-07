<template>
    <div class="landing">
      <HeaderNavbar />
  
      <div class="hero">
        <img src="@/assets/attack-on-titan.png" alt="Attack on Titan" class="main-image" />
        <h1 class="title">Welcome to the Attack on Titan Universe</h1>
        <p class="subtitle">Explore the titans and manage characters</p>
        <div class="buttons">
          <button class="cta" @click="navigateToApi">Go to API</button>
          <button class="cta" @click="navigateToCrud">Manage Characters</button>
        </div>
      </div>
  
      <FooterInfo />
    </div>
  </template>
  
  <script>
  import HeaderNavbar from '@/components/Header.vue'
  import FooterInfo from '@/components/Footer.vue'
  
  export default {
    components: {
      HeaderNavbar,
      FooterInfo
    },
    methods: {
      navigateToApi() {
        this.$router.push('/api-data')
      },
      navigateToCrud() {
        this.$router.push('/crud')
      }
    }
  }
  </script>
  
  <style scoped>
  .landing {
    background-color: black;
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .hero {
    flex: 1;
    text-align: center;
    padding: 40px 20px;
  }
  
  .main-image {
    max-width: 600px;
    width: 90%;
    margin: 20px auto;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(255, 0, 0, 0.6);
  }
  
  .title {
    font-size: 3rem;
    margin-top: 20px;
    font-weight: bold;
    color: #ff0000;
    text-shadow: 2px 2px 8px rgba(255, 0, 0, 0.5);
  }
  
  .subtitle {
    font-size: 1.3rem;
    margin: 10px 0 30px;
    color: #ccc;
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .cta {
    background-color: #ff0000;
    color: white;
    font-size: 1.1rem;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    border-radius: 6px;
    transition: background-color 0.3s ease;
  }
  
  .cta:hover {
    background-color: #b30000;
  }
  </style>
  