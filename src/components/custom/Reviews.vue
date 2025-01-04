<script setup>
import { ref } from "vue";

const userName = ref("");
const userComment = ref("");
const formSubmitted = ref(false);

const submitReview = () => {
  if (!userName.value || !userComment.value) {
    alert("Please fill in your name and comment.");
    return;
  }

  // Create a mailto link for email submission
  const email = "support@barbeque.com";
  const subject = `New BBQ Review from ${userName.value}`;
  const body = encodeURIComponent(`Customer Name: ${userName.value}\n\nReview:\n${userComment.value}`);
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  // Simulate email submission
  window.location.href = mailtoLink;

  // Reset form after submission
  userName.value = "";
  userComment.value = "";
  formSubmitted.value = true;
};
</script>

<template>
  <section class="px-4 py-8 md:px-16 lg:px-24 bg-gray-100 rounded-lg shadow-md">
    <h1 class="text-2xl md:text-3xl font-bold text-center text-gray-800">Leave a Review</h1>
    <p class="text-center text-gray-600 mt-2">
      We value your feedback! Tell us what you loved about our barbeque.
    </p>

    <div class="mt-6 space-y-4">
      <input
        type="text"
        v-model="userName"
        placeholder="Your Name"
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      />
      <textarea
        v-model="userComment"
        rows="5"
        placeholder="Write your review here..."
        class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
      ></textarea>
      <button
        @click="submitReview"
        class="w-full px-4 py-2 text-white font-semibold bg-[#212121] rounded-md hover:bg-stone-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
      >
        Submit Review
      </button>
    </div>

    <div
      v-if="formSubmitted"
      class="mt-4 p-4 bg-green-100 text-green-800 rounded-md text-center"
    >
      Thank you for your review! We appreciate your feedback.
    </div>
  </section>
</template>

<style scoped>
section {
  max-width: 700px;
  margin: 0 auto;
}
</style>
