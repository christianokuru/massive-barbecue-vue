<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const isLoading = ref(false);
const errors = ref({
  email: "",
  message: "",
});
const toasts = ref<{ id: number; title: string; description: string }[]>([]);

const addToast = (title: string, description: string) => {
  const id = Date.now();
  toasts.value.push({ id, title, description });
  setTimeout(() => {
    toasts.value = toasts.value.filter((toast) => toast.id !== id);
  }, 3000); // Remove toast after 3 seconds
};

const handleSubmit = async (e: Event) => {
  e.preventDefault();
  isLoading.value = true;
  errors.value = { email: "", message: "" };

  const formData = new FormData(e.target as HTMLFormElement);
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  // Validate email
  if (!email) {
    errors.value.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.value.email = "Please enter a valid email address";
  }

  // Validate message
  if (!message) {
    errors.value.message = "Message is required";
  } else if (message.length < 10) {
    errors.value.message = "Message must be at least 10 characters long";
  }

  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1000));
  isLoading.value = false;

  // If no errors, show success message
  if (!errors.value.email && !errors.value.message) {
    addToast("Message sent!", "Thanks, we will reach out to you.");
    (e.target as HTMLFormElement).reset();
  }
};
</script>

<template>
  <div class=" flex items-center justify-center p-4">
    <Card class="w-full max-w-md bg-input text-black border-stone-400 border-x-4 shadow-xl">
      <CardHeader>
        <CardTitle class="text-2xl font-bold text-center">Contact Us</CardTitle>
      </CardHeader>
      <CardContent>
        <form @submit="handleSubmit" class="space-y-6">
          <div class="space-y-2">
            <Label for="email" class="text-black font-semibold">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="massivebarbeque@gmail.com"
              class="bg-card border-border text-black placeholder:text-stone-400"
              :disabled="isLoading"
            />
            <p v-if="errors.email" class="text-red-700 text-sm">
              {{ errors.email }}
            </p>
          </div>

          <div class="space-y-2">
            <Label for="message" class="text-black font-semibold">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about your Barbecue needs..."
              class="bg-card border-border text-black placeholder:text-stone-400 min-h-[120px]"
              :disabled="isLoading"
            />
            <p v-if="errors.message" class="text-red-700 text-sm">
              {{ errors.message }}
            </p>
          </div>

          <Button
            type="submit"
            class="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold"
            :disabled="isLoading"
          >
            {{ isLoading ? "Sending..." : "Send Message" }}
          </Button>
        </form>
      </CardContent>
    </Card>

    <!-- Toast Container -->
    <div class="fixed bottom-4 right-4 space-y-2">
      <div
        v-for="toast in toasts"
        :key="toast.id"
        class="p-4 bg-orange-800 text-white rounded-md shadow-lg"
      >
        <strong>{{ toast.title }}</strong>
        <p>{{ toast.description }}</p>
      </div>
    </div>
  </div>
</template>
