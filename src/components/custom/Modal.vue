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

const whatsappNumber = '2348102569891';
const message = `TEST: [Hello, I'm coming from your website and I would love to make an order. 😊]`;
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
</script>

<template>
  <transition name="modal-fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center"
      @click="closeOnOutsideClick"
    >
      <transition name="content-scale">
        <div class="bg-white rounded-lg p-6 max-w-md w-full" @click.stop>
          <div class="flex justify-between items-center mb-4">
            <h2
              class="text-xl font-semibold text-[#D84315] animate-fade-in"
            >{{ selectedItem?.name || 'Item' }}</h2>
            <button
              @click="closeModal"
              class="text-[#5D4037] hover:text-gray-700"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <transition name="content-fade">
            <img
              :src="selectedItem?.image"
              :alt="selectedItem?.name"
              class="w-full h-48 object-cover mb-4 rounded-md animate-slide-up"
            />
          </transition>
          <div class="space-y-4">
            <p class="animate-slide-up text-[#5D4037]">
              <strong>Description:</strong>
              {{ selectedItem?.description || 'No description available' }}
            </p>
            <p><strong class="text-[#5D4037]">Available Options:</strong></p>
            <ul>
              <li
                v-for="(price, index) in selectedItem?.prices || []"
                :key="index"
                class="animate-slide-up"
              >
                <div class="flex justify-between space-y-2 text-[#5D4037]">
                  <div class="text-xl">
                    <h1>{{ price.name }}</h1>
                  </div>
                  <div class="text-xl">
                    <h1>₦{{ price.price }}</h1>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="pt-5 animate-slide-up">
            <a :href="whatsappLink" target="_blank">
              <Button>Order Now</Button>
            </a>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<style scoped>
/* Modal fade-in and fade-out animation */
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

/* Content scale animation */
.content-scale-enter-from,
.content-scale-leave-to {
  transform: scale(0.9);
  opacity: 0;
}
.content-scale-enter-active,
.content-scale-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Content fade animation for images/texts */
.content-fade-enter-from,
.content-fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.content-fade-enter-active,
.content-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Custom staggered animations */
@keyframes slideUp {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.animate-slide-up {
  animation: slideUp 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease forwards;
}
</style>
