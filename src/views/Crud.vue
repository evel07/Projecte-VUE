<template>
  <div class="crud-page">
    <HeaderNavbar />
    <main class="content">
      <h1>Manage Attack on Titan Characters</h1>

      <!-- Formulari per afegir o editar personatge -->
      <div class="form-container">
        <h2>{{ isEditing ? 'Edit Character' : 'Add New Character' }}</h2>
        <form @submit.prevent="handleFormSubmit">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />

          <label for="surname">Surname:</label>
          <input type="text" id="surname" v-model="form.surname" required />

          <label for="imageUrl">Image URL:</label>
          <input type="url" id="imageUrl" v-model="form.imageUrl" required />

          <button type="submit">{{ isEditing ? 'Save Changes' : 'Add Character' }}</button>
        </form>
      </div>

      <!-- Llista de personatges -->
      <div class="characters-list">
        <h2>Existing Characters</h2>
        <ul>
          <li v-for="(character, index) in characters" :key="index">
            <img :src="character.imageUrl" alt="Character Image" class="character-image" />
            <span>{{ character.name }} {{ character.surname }}</span>
            <button @click="editCharacter(index)">Edit</button>
            <button @click="deleteCharacter(index)">Delete</button>
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
      characters: [],  // Array de personatges
      form: {
        name: '',
        surname: '',
        imageUrl: ''
      },
      isEditing: false,
      editIndex: null
    };
  },
  mounted() {
    // Carregar els personatges del localStorage quan el component es munta
    const storedCharacters = localStorage.getItem('characters');
    if (storedCharacters) {
      this.characters = JSON.parse(storedCharacters);
    }
  },
  methods: {
    // Afegeix o edita un personatge
    handleFormSubmit() {
      if (this.isEditing) {
        // Modificar un personatge existent
        this.characters[this.editIndex] = { ...this.form };
      } else {
        // Afegir un nou personatge
        this.characters.push({ ...this.form });
      }

      // Guardar els canvis al localStorage
      localStorage.setItem('characters', JSON.stringify(this.characters));

      // Reseteja el formulari després de l'operació
      this.resetForm();
    },

    // Edita un personatge
    editCharacter(index) {
      this.isEditing = true;
      this.editIndex = index;
      this.form = { ...this.characters[index] };
    },

    // Esborra un personatge
    deleteCharacter(index) {
      this.characters.splice(index, 1);
      // Guardar els canvis al localStorage
      localStorage.setItem('characters', JSON.stringify(this.characters));
    },

    // Reseteja el formulari
    resetForm() {
      this.form = {
        name: '',
        surname: '',
        imageUrl: ''
      };
      this.isEditing = false;
      this.editIndex = null;
    }
  }
}
</script>

<style scoped>
.crud-page {
  background-color: black;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  padding: 40px;
  text-align: center;
}

.form-container {
  margin-bottom: 40px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

label {
  margin: 10px 0 5px;
}

input {
  margin-bottom: 20px;
  padding: 10px;
  font-size: 1rem;
  width: 80%;
  max-width: 400px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #ff0000;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #b30000;
}

.characters-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.characters-list ul {
  list-style-type: none;
  padding: 0;
}

.characters-list li {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
}

.character-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

button {
  margin-left: 10px;
}
</style>
