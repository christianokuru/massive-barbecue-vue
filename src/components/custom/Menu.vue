<script setup>
import { ref } from 'vue';
import menuItems from "@/components/custom/menuItems";
import Modal from "@/components/custom/Modal.vue";

// State to control modal visibility
const isModalOpen = ref(false);
const selectedItem = ref(null);

// Function to open the modal with the selected item
const openModal = (item) => {
  selectedItem.value = item;
  isModalOpen.value = true;
};

// Function to close the modal
const closeModal = () => {
  isModalOpen.value = false;
  selectedItem.value = null;
};
</script>

<template>
  <div class="p-4">
    <div class="pb-7">
      <h2 class="text-2xl font-semibold text-center md:text-4xl md:pt-7">
        Our Menu
      </h2>
      <p class="text-center">Check out our delicious menu below</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="item in menuItems.slice(0, 4)"   
        :key="item.id"
        class="bg-white shadow-lg rounded-lg overflow-hidden border cursor-pointer"
        @click="openModal(item)"
      >
        <img :src="item.image" :alt="item.name" class="w-full h-48 object-cover" />
        <div class="p-4">
          <h3 class="text-lg font-bold text-gray-800">{{ item.name }}</h3>
        </div>
      </div>
    </div>

    <!-- See More Button -->
    <div class="mt-6 text-center">
      <router-link
        to="/menu"
        class="inline-block text-primary font-medium bg-gray-100 px-6 py-2 rounded-lg shadow-md hover:bg-gray-200 transition"
      >
        See More
      </router-link>
    </div>

    <!-- Modal Component -->
    <Modal 
      :isOpen="isModalOpen" 
      :selectedItem="selectedItem" 
      @close="closeModal"
    />
  </div>
</template>

<style scoped>
.text-primary {
  color: #e63946;
}
</style>
