<template>
  <section
    class="min-h-screen bg-[#0f375a] text-white px-6 lg:px-[180px] py-16"
  >
    <div class="mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold">Contact Me</h1>
        <p class="text-gray-400 mt-4 text-sm max-w-xl mx-auto">
          Feel free to reach out. I’m always open to discussing new projects,
          ideas or opportunities.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div class="bg-[#fff] p-8 rounded-2xl shadow-lg">
          <h2 class="text-xl font-bold mb-6 text-black">Get in Touch</h2>

          <div class="space-y-4 text-sm">
            <a
              href="mailto:hokimthanh1234@gmail.com"
              class="flex items-center gap-3 text-black hover:text-pink-500 transition"
            >
              <Mail />
              <span>hokimthanh1234@gmail.com</span>
            </a>

            <a
              href="tel:0335044593"
              class="flex items-center gap-3 text-black hover:text-pink-500 transition"
            >
              <Phone />
              <span>0335044593</span>
            </a>

            <a
              href="https://www.google.com/maps?q=Da+Nang+Vietnam"
              target="_blank"
              class="flex items-center gap-3 text-black hover:text-pink-500 transition"
            >
              <MapPin />
              <span>Da Nang, Vietnam</span>
            </a>

            <a
              href="https://github.com/KimThanh1801"
              target="_blank"
              class="flex items-center gap-3 text-black hover:text-pink-500 transition"
            >
              <Github />
              <span>github.com/KimThanh1801</span>
            </a>
          </div>

          <div class="mt-8 text-sm text-gray-500 leading-relaxed">
            I usually respond within 24 hours, depending on the volume of
            messages I receive. Feel free to reach out anytime — I’ll get back
            to you as soon as possible. For urgent matters, please make it clear
            in your message so I can prioritize it.
          </div>
        </div>

        <div class="bg-[#fff] p-8 rounded-2xl shadow-lg">
          <h2 class="text-xl font-bold mb-6 text-black">Send Message</h2>

          <form @submit.prevent="submitForm" class="space-y-4">
            <input
              v-model="form.name"
              type="text"
              placeholder="Your Name"
              class="w-full p-3 placeholder:text-white rounded-lg bg-[#F891BB] text-white outline-none"
            />

            <input
              v-model="form.email"
              type="email"
              placeholder="Your Email"
              class="w-full p-3 text-white placeholder:text-white rounded-lg bg-[#F891BB] outline-none"
            />

            <textarea
              v-model="form.message"
              rows="5"
              placeholder="Your Message"
              class="w-full p-3 text-white placeholder:text-white rounded-lg bg-[#F891BB] outline-none"
            ></textarea>

            <button
              type="submit"
              class="w-full bg-[#F891BB] placeholder-white text-white hover:bg-[#F891BB] transition py-3 rounded-lg font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from "vue";
import { useContactComposable } from "../../composables/Contact";
import { Mail, Phone, MapPin, Github } from "lucide-vue-next";
import { toast } from "vue3-toastify";

const form = reactive({
  name: "",
  email: "",
  message: "",
});

const { loading, success, submitContact } = useContactComposable();

const submitForm = async () => {
  if (!form.name || !form.email || !form.message) {
    toast.error("Please fill in all fields!");
    return;
  }
  await submitContact(form);

  if (success.value) {
    form.name = "";
    form.email = "";
    form.message = "";
  }
  toast.success("Message sent successfully!");
};
</script>
