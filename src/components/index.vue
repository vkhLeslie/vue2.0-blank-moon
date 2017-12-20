<style lang="less" scoped>
	@import "~assets/css/index.less";
</style>
<template>
	<div v-hello>Hello World.{{"JAN" | dictFilter("languageType")}}
		<a href="http://www.css88.com/doc/webpack2/development/release-process/"><button>click me</button></a>
	
	</div>
</template>
<script>
export default {};
</script>
