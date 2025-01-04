<script setup>
import { useTestimonialStore } from "@/stores/testimonial.js";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper-bundle.css";
import { Card } from "@/components/ui/card";
import { computed } from "vue";

const theTestimonials = useTestimonialStore().theTestimonials;

const slidesPerView = computed(() => {
  // Responsive breakpoints for Swiper
  if (window.innerWidth <= 768) {
    return 1; // Mobile: 1 slide
  } else if (window.innerWidth <= 1024) {
    return 2; // Tablet: 2 slides
  } else {
    return 4; // Desktop: 4 slides
  }
});
</script>

<template>
  <div class="mt-6">
    <h1 class="text-2xl font-semibold text-center">Testimonials</h1>
    <p class="text-center">Read what our satisfied customers said.</p>
  </div>
  
  <div class="testimonial-slider">
    <swiper
      :slidesPerView="slidesPerView"
      spaceBetween="30"
      loop
      pagination
      class="mySwiper"
      :autoplay="{ delay: 1000, disableOnInteraction: false }"
    >
      <swiper-slide
        v-for="testimonial in theTestimonials"
        :key="testimonial.id"
      >
        <div class="card-container">
          <Card class="testimonial-card ">
            <div class="card-body">
              <h1 class="text-lg font-semibold">{{ testimonial.name }}</h1>
              <p class="review">{{ testimonial.review }}</p>
              <div class="footer">
                <span class="date">{{ testimonial.date }}</span>
                <span class="location">{{ testimonial.location }}</span>
              </div>
            </div>
          </Card>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<style scoped>
.testimonial-slider {
  width: 100%;
  padding: 2rem;
}

.testimonial-card {
  background-color: #fffaf9;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;
  color: #212121;
}

.card-body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

h3 {
  margin-bottom: 0.75rem;
}

.review {
  flex: 1;
  font-size: 0.875rem;
  margin-bottom: 0.5rem; 
}

.footer {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: #212121;
  padding-top: 0.5rem; 
}

.date {
  text-align: left;
}

.location {
  text-align: right;
}

@media (max-width: 1024px) {
  .testimonial-card {
    height: auto;
  }

  .review {
    margin-bottom: 1rem; 
  }
}
</style>
