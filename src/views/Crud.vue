<template>
  <div class="crud-page">
    <HeaderNavbar />
    <main class="content">
      <h1>Control de personatges de Attack on Titan</h1>

      <!-- Formulari per afegir o editar personatge -->
      <div class="form-container">
        <h2>{{ isEditing ? 'Edita Personatge' : 'Afegeix un Nou Personatge' }}</h2>
        <form @submit.prevent="handleFormSubmit">
          <label for="name">Nom:</label>
          <input type="text" id="name" v-model="form.name" required />

          <label for="surname">Cognom:</label>
          <input type="text" id="surname" v-model="form.surname" required />

          <label for="imageUrl">URL de la Imatge:</label>
          <input type="url" id="imageUrl" v-model="form.imageUrl" required />

          <button type="submit">{{ isEditing ? 'Desa Canvis' : 'Afegeix Personatge' }}</button>
        </form>
      </div>

      <!-- Llista de personatges -->
      <div class="characters-list">
        <h2>Personatges Existents</h2>
        <ul>
          <li v-for="(character, index) in characters" :key="index">
            <img :src="character.imageUrl" alt="Character Image" class="character-image" />
            <span>{{ character.name }} {{ character.surname }}</span>
            <button @click="editCharacter(index)">Edita</button>
            <button @click="deleteCharacter(index)">Esborra</button>
          </li>
        </ul>
      </div>
    </main>
    <FooterInfo />
  </div>
</template>

<script>
import HeaderNavbar from '@/components/Header.vue'
import FooterInfo from '@/components/Footer.vue'

export default {
  name: 'Crud',
  components: {
    HeaderNavbar,
    FooterInfo
  },
  data() {
    return {
      characters: [],
      form: {
        name: '',
        surname: '',
        imageUrl: ''
      },
      isEditing: false,
      editIndex: null
    }
  },
  mounted() {
    const storedCharacters = localStorage.getItem('characters')
    if (storedCharacters) {
      this.characters = JSON.parse(storedCharacters)
    }
  },
  methods: {
    handleFormSubmit() {
      if (this.isEditing) {
        this.characters[this.editIndex] = { ...this.form }
      } else {
        this.characters.push({ ...this.form })
      }
      localStorage.setItem('characters', JSON.stringify(this.characters))
      this.resetForm()
    },
    editCharacter(index) {
      this.isEditing = true
      this.editIndex = index
      this.form = { ...this.characters[index] }
    },
    deleteCharacter(index) {
      this.characters.splice(index, 1)
      localStorage.setItem('characters', JSON.stringify(this.characters))
    },
    resetForm() {
      this.form = {
        name: '',
        surname: '',
        imageUrl: ''
      }
      this.isEditing = false
      this.editIndex = null
    }
  }
}
</script>

<style scoped>
.crud-page {
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
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  color: #00cc66;
  margin-bottom: 40px;
  text-shadow: 1px 1px 4px rgba(0, 204, 102, 0.4);
}

h2 {
  color: #66ffb3;
  margin-bottom: 20px;
}

.form-container {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(0, 204, 102, 0.2);
  margin-bottom: 50px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin: 10px 0 5px;
  font-weight: 600;
  color: #cccccc;
}

input {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1rem;
  width: 90%;
  max-width: 400px;
  border: 1px solid #00cc66;
  border-radius: 6px;
  background-color: #1a1a1a;
  color: #ffffff;
}

button[type="submit"] {
  padding: 12px 24px;
  font-size: 1rem;
  background-color: #006644;
  color: white;
  border: 2px solid #00cc66;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 600;
}

button[type="submit"]:hover {
  background-color: #009966;
  transform: scale(1.05);
}

.characters-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.characters-list ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
}

.characters-list li {
  background-color: #1a1a1a;
  border: 1px solid #00cc66;
  border-radius: 10px;
  padding: 15px 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #f0f0f0;
  box-shadow: 0 0 15px rgba(0, 204, 102, 0.1);
}

.character-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  border: 2px solid #00cc66;
}

.characters-list span {
  flex: 1;
  text-align: left;
  font-size: 1.1rem;
}

.characters-list button {
  padding: 8px 14px;
  font-size: 0.9rem;
  margin-left: 10px;
  background-color: transparent;
  border: 2px solid #00cc66;
  color: #00cc66;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-weight: 600;
}

.characters-list button:hover {
  background-color: #00cc66;
  color: #0d0d0d;
}
</style>
