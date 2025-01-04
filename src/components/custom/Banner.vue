<script setup>
import heroSmall from '@/assets/images/homeBannersmall.webp';
import heroMedium from '@/assets/images/homeBannerMeduim.webp';
import heroLarge from '@/assets/images/homeBanner.webp';

const whatsappNumber = '2348102569891';
const whatsappLink = `https://wa.me/${whatsappNumber}`;
</script>

<template>
  <section class="relative w-full">
    <!-- Banner Image with Lazy Loading and Responsive srcset -->
    <img
      :src="heroLarge"
      :srcset="`${heroSmall} 480w, ${heroMedium} 768w, ${heroLarge} 1200w`"
      sizes="(max-width: 768px) 480px, (max-width: 1200px) 768px, 1200px"
      alt="Delicious BBQ Banner"
      class="w-full h-[400px] md:h-[600px] object-cover"
      loading="lazy"
    />
  
    <!-- Text Overlay -->
    <div class="absolute inset-0 flex items-center justify-end px-4 lg:px-16 text-white">
      <div class="bg-black/10 p-4 rounded-lg text-right max-w-md space-y-4">
        <h1 class="text-3xl md:text-5xl font-bold">
          Taste the Perfection of BBQ
        </h1>
        <p class="text-base md:text-lg text-gray-100 leading-relaxed">
          Indulge in the smoky flavors of perfectly grilled chicken, tender fish,
          and premium BBQ crafted to tantalize your taste buds. Your ultimate barbecue
          experience awaits.
        </p>
        <router-link
          to="/menu"
          class="inline-block bg-yellow-400 text-red-800 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-yellow-500 transition-all duration-200"
        >
          Order now!
        </router-link>
      </div>
    </div>
  </section>
</template>

<style>
/* Ensure the banner spans across the screen */
section {
  width: 100vw;
  overflow-x: hidden;
}
</style>
