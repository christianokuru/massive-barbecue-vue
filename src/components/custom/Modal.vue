<!-- src/components/Modal.vue -->
<script setup>
import { defineProps, defineEmits } from 'vue';
import Button from '../ui/button/Button.vue';

const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
  selectedItem: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['close']);

// Close modal handler
const closeModal = () => {
  emit('close');
};

// Close modal if clicked outside of modal content
const closeOnOutsideClick = (event) => {
  if (event.target === event.currentTarget) {
    closeModal();
  }
};
</script>

<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center"
    @click="closeOnOutsideClick"
  >
    <div class="bg-white rounded-lg p-6 max-w-md w-full" @click.stop>
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold text-[#D84315]">{{ selectedItem.name }}</h2>
        <button
          @click="closeModal"
          class="text-[#5D4037] hover:text-gray-700"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <img :src="selectedItem.image" :alt="selectedItem.name" class="w-full h-48 object-cover mb-4 rounded-md" />
      <div class="space-y-4">
        <p><strong>Description:</strong> {{ selectedItem.description }}</p>
        <p><strong>Available Options:</strong></p>
        <ul>
          <li v-for="(price, index) in selectedItem.prices" :key="index">
            <div class="flex justify-between space-y-2">
                <div class="text-xl">
                <h1>{{ price.name }}</h1>
            </div>
            <div  class="text-xl">
                <h1>₦{{ price.price }}</h1>
            </div>
            </div>
            <!-- <span>{{ price.name }}: ₦{{ price.price }}</span> -->
          </li>
        </ul>
      </div>
      <div class="pt-5">
        <Button>Order Now</Button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Optional styling */
.modal-content {
  max-width: 600px;
  width: 100%;
}
</style>
