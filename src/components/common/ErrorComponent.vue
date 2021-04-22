<template>
  <div>
    <h1>error {{ age + " " + name }}</h1>
    <el-button @click="handleEmit">按钮</el-button>
  </div>
</template>
<script lang="ts">
export default {
  //   emits: ["~"],
  props: {
    name: {
      type: String,
      required: true,
      default: "jerry",
      validator: (value: string) => {
        return ["jerry", "sherry", "doreen"].indexOf(value) !== -1;
      },
    },
    age: Number,
  },
  setup: (props, context) => {
    // console.log("props", props.name, props.age);
    let handleEmit = () => {
      console.log('h',context.slots,context.attrs)
      context.emit("~", "hello");
      
    };
    return { handleEmit };
  },
};
</script>
