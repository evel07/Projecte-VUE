<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/api-data">API</router-link></li>
      <li><router-link to="/crud">CRUD</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.navbar {
  background-color: #111; /* Negre profund */
  padding: 20px 0;
  border-bottom: 2px solid #00cc66; /* Verd militar inspirat en la Legió de Reconeixement */
  box-shadow: 0 4px 6px rgba(0, 204, 102, 0.2);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.navbar ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 40px;
}

.navbar li {
  display: inline;
}

.navbar a {
  color: #f1c232; /* Or antic inspirat en la uniformitat militar */
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.navbar a.router-link-exact-active {
  background-color: #00cc66; /* Verd actiu */
  color: #000;
}

.navbar a:hover {
  color: #ff0000; /* Vermell intens — sang, lluita */
  background-color: rgba(255, 0, 0, 0.1);
  text-shadow: 1px 1px 5px #ff0000;
}
</style>
