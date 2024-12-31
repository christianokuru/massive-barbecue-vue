<script setup>
import { ref } from "vue";
import { useMenuStore } from "@/stores/menu";
import hero from '@/assets/images/aboutHero.png';

const store = useMenuStore();

const heroBackground = ref({
  backgroundImage: `url(${hero})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundBlendMode: "overlay",
});


const features = ref([
  {
    icon: 'fa-user-friends',
    title: "Expert Chefs",
    description: "Skilled pitmasters with years of experience",
  },
  {
    icon: 'fa-award',
    title: "Quality First",
    description: "Premium cuts and fresh ingredients",
  },
  {
    icon: 'fa-regular-clock',
    title: "Slow-Cooked",
    description: "Patiently smoked for perfect flavor",
  },
  {
    icon: 'md-familyrestroom',
    title: "Family Owned",
    description: "Three generations of BBQ expertise",
  },
]);
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-[500px] flex items-center justify-center">
      <div
        class="absolute inset-0 bg-black/60 z-10"
        :style="heroBackground"
      />
      <div class="relative z-20 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">
          Crafting Perfect barbecue Since 2020
        </h1>
        <p class="text-xl text-gray-200 max-w-2xl mx-auto">
          Where passion meets flavor in every perfectly smoked piece
        </p>
      </div>
    </section>

    <!-- Story Section -->
    <section class="py-20 px-4 bg-[#FDF8F3]">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6 text-[#2C1810]">Our Story</h2>
            <p class="text-lg text-[#5C3D2E] mb-6">
              Started in a small backyard with a single smoker and a dream, our
              journey began with a simple mission: to serve the most flavorful,
              tender barbecue in town. Today, we've grown into a beloved
              establishment, but our commitment to quality remains unchanged.
            </p>
            <p class="text-lg text-[#5C3D2E] mb-6">
              Every piece of meat is carefully selected, seasoned with our
              secret blend of spices, and slow-smoked to perfection using
              traditional methods passed down through generations.
            </p>
            <div class="flex gap-4 mt-8">
              <button class="bg-[#D35400] hover:bg-[#A04000] text-white px-4 py-2 rounded">
                Our Location
              </button>
              <button
                class="border-[#D35400] border text-[#D35400] hover:bg-[#D35400] hover:text-white px-4 py-2 rounded"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div class="relative">
            <img
              :src="store.image"
              alt="Master BBQ chef at work"
              class="rounded-lg shadow-xl"
            />
            <div class="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <p class="text-4xl font-bold text-[#D35400]">25+</p>
              <p class="text-[#5C3D2E]">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties Section -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-12 text-[#2C1810]">
          Our Specialties
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div
            v-for="item in store.theMenuItems.slice(0, 4)"
            :key="item.id"
            class="overflow-hidden rounded-lg shadow-lg border"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2 text-[#2C1810]">
                {{ item.name }}
              </h3>
              <p class="text-[#5C3D2E]">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 px-4 bg-[#2C1810] text-white">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-8">
          <div
            v-for="(feature, index) in features"
            :key="index"
            class="text-center"
          >
            <div class="bg-[#D35400] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
               <v-icon :name="feature.icon" class="w-8 h-8 text-white" />
            </div>
            <h3 class="font-bold text-xl mb-2">{{ feature.title }}</h3>
            <p class="text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-4 bg-[#FDF8F3]">
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="text-3xl font-bold mb-6 text-[#2C1810]">
          Come Experience Our BBQ
        </h2>
        <p class="text-lg text-[#5C3D2E] mb-8">
          Join us for an unforgettable dining experience. Whether it's a family dinner,
          special occasion, or catering event, we're here to serve you the best BBQ in
          town.
        </p>
        <button
          class="bg-[#D35400] hover:bg-[#A04000] text-white text-lg px-8 py-6 rounded"
        >
          Place an Order
        </button>
      </div>
    </section>
  </div>
</template>
