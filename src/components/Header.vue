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
    background-color: #2b2b2b; /* Gris fosc */
    padding: 15px 0;
    text-align: center;
  }
  
  .navbar ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }
  
  .navbar li {
    margin: 0 20px;
  }
  
  .navbar a {
    color: #f1c232; /* Color d'or clar inspirat en la sèrie */
    font-size: 1.2rem;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }
  
  .navbar a:hover {
    color: #ff0000; /* Vermell de l'anime */
  }
  </style>
  