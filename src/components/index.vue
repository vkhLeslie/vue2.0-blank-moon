<style lang="less" scoped>
	@import "~assets/css/index.less";
</style>
<template>
	<div v-hello>Hello World.{{"JAN" | dictFilter("languageType")}}
	</div>
</template>
<script>
/* eslint-disable */
import platform from '../platform';
export default {};
</script>
