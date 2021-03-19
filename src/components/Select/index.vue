<template>
  <a-select
    show-search
    placeholder="请选择"
    option-filter-prop="children"
    style="width: 200px"
    :filter-option="filterOption"
    @focus="handleFocus"
    @blur="handleBlur"
    @change="handleChange"
  >
    <a-select-option
      v-for="selectItem in dataSource"
      :key="selectItem.value"
      :value="selectItem.value"
    >
      {{ selectItem.label }}
    </a-select-option>
  </a-select>
</template>

<script>
export default {
  name: "index",
  props: {
    dataSource: {
      type: Array,
      required: true,
      default: () => {}
    }
  },
  methods: {
    handleChange(value) {
      this.$emit("handleChange", value);
    },
    handleBlur() {},
    handleFocus() {},
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    }
  }
};
</script>

<style scoped></style>
