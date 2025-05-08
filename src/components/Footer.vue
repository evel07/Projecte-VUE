<template>
  <footer class="footer">
    <p>&copy; Attack on Titan fet per Evelyn Nofuentes</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  background-color: #0f0f0f; /* Negre profund */
  color: #f1c232; /* Or militar desgastat */
  text-align: center;
  padding: 20px 10px;
  font-size: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  border-top: 2px solid #00cc66; /* Verd Legió de Reconeixement */
  box-shadow: 0 -4px 6px rgba(0, 204, 102, 0.2);
}

.footer p {
  margin: 0;
  letter-spacing: 1px;
}
</style>
