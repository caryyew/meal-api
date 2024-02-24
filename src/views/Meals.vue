<template>
<div>
<Header />
    <div class="container">
      <div class="row">
        <div v-for="category in categories" :key="category.idCategory" class="col-md-4 mb-4 mt-5">
          <div class="card">
            <img :src="category.strCategoryThumb" class="card-img-top" :alt="category.strCategory">
            <div class="card-body">
              <h5 class="card-title">{{ category.strCategory }}</h5>
              <p class="card-text">{{ category.strCategoryDescription.substring(0, 100) }} ... </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  import axios from 'axios'
  import Header from "@/components/Header.vue"
  
  export default {
    components : {
      Header,
    },
    data() {
      return {
        categories: null,
      };
    },
    created() {
      axios.get("https://www.themealdb.com/api/json/v1/1/categories.php").then(res => {
        this.categories = res.data.categories;
      })
    }
  }
  </script>
  
  <style scoped>
  .card {
    transition: all 0.3s ease;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  </style>
  