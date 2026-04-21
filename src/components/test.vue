<template>
  <div>
    <button @click="increase">
      Click me! {{ count.nested2.count }}
    </button>
  </div>
</template>

<script>
import { shallowRef } from "vue";

export default {
  setup() {
    const count = shallowRef({
      nested: { count: 0 },
      nested2: { count: 0 },
    });

   function increase() {
  count.value = {
    ...count.value,
    nested: {
      ...count.value.nested,
      count: count.value.nested.count + 1,
    },
    nested2: {
      ...count.value.nested2,
      count: count.value.nested2.count + 1,
    }
  }
}

    return { count, increase };
  },
};
</script>