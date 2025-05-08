<template>
  <div class="landing">
    <HeaderNavbar />

    <div class="hero">
      <img src="@/assets/attack-on-titan.png" alt="Attack on Titan" class="main-image" />
      <h1 class="title">Benvingut a la pàgina de Attack on Titan</h1>
      <p class="subtitle">Explora els titans i gestiona els teus personatges favorits</p>
      <div class="buttons">
        <button class="cta" @click="navigateToApi">Explora l'API</button>
        <button class="cta" @click="navigateToCrud">Control de personatges</button>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #0d0d0d;
}

.landing {
  background-color: #0d0d0d;
  color: #e0e0e0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-image: url('@/assets/p.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: brightness(0.85);
}

.hero {
  flex: 1;
  text-align: center;
  padding: 60px 20px;
  background-color: rgba(0, 0, 0, 0.7); /* Llegeix millor per sobre la imatge */
  border-radius: 10px;
  margin: 40px auto;
  max-width: 1000px;
}

.main-image {
  max-width: 500px;
  width: 90%;
  margin: 20px auto;
  border-radius: 12px;
  box-shadow: 0 0 25px rgba(0, 255, 153, 0.3);
}

.title {
  font-size: 3rem;
  margin-top: 30px;
  font-weight: 700;
  color: #00cc66; /* Verd inspirat en el Cos d’Exploració */
  text-shadow: 1px 1px 5px rgba(0, 204, 102, 0.6);
}

.subtitle {
  font-size: 1.4rem;
  margin: 15px 0 40px;
  color: #b0b0b0;
}

.buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
}

.cta {
  background-color: #006644;
  color: white;
  font-size: 1.1rem;
  padding: 14px 28px;
  border: 2px solid #00cc66;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.cta:hover {
  background-color: #009966;
  transform: scale(1.05);
}
</style>
