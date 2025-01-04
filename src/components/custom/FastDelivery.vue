<script setup>
import fastDelivery from "@/assets/images/fastDelivery.png";
</script>

<template>
  <section class="px-4 py-8 md:px-16 lg:px-24">
    <!-- Mobile Layout -->
    <div class="md:hidden text-center space-y-4">
      <h1 class="text-2xl font-semibold">Fast Delivery</h1>
      <p class="text-base text-gray-600">Experience lightning-fast delivery service tailored to your needs!</p>
      <img :src="fastDelivery" alt="Fast Delivery" class="w-full h-auto rounded-lg shadow-md" loading="lazy" />
    </div>

    <!-- Tablet/Desktop Layout -->
    <div class="hidden md:flex items-center space-x-8">
      <div class="flex-1 space-y-6">
        <h1 class="text-4xl font-bold text-gray-800">Fast Delivery</h1>
        <p class="text-lg text-gray-600">
          Enjoy our premium delivery service, ensuring your orders arrive at your doorstep in record time. 
          Whether it's a bustling city or a quiet neighborhood, we've got you covered!
        </p>
        <p class="text-lg text-gray-600">
          Get your orders delivered within <span class="font-semibold text-orange-500">3 hours</span> anywhere in Lagos. 
          Speed and reliability guaranteed.
        </p>
      </div>
      <img 
        :src="fastDelivery" 
        alt="Fast Delivery" 
        class="flex-1 w-1/2 h-auto rounded-lg shadow-md object-cover"
        loading="lazy"
      />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #f9f9f9; 
}
</style>

