<template>
	<div class="container">
		<div class="inputBox">
			<input type="text" required="required" />
			<span>Full Name</span>
			<i></i>
		</div>
	</div>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
.container {
	position: relative;
	padding: 50px;
	background-color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 8px;
	box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
}
.container .inputBox {
	position: relative;
	width: 350px;
}
.container .inputBox input {
	position: relative;
	padding: 8px 10px;
	border: none;
	outline: none;
	/* background-color: #333; */
	background-color: transparent;
	color: #fff;
	font-size: 1.25em;
	letter-spacing: 0.05em;
	z-index: 2;
}
.container .inputBox span {
	position: absolute;
	left: 0;
	padding: 10px 0;
	/* 이게 뭘까? */
	pointer-events: none;
	font-size: 1em;
	transition: 0.5s;
	color: #333;
	letter-spacing: 0.05em;
}
.container .inputBox input:valid ~ span,
.container .inputBox input:focus ~ span {
	font-size: 0, 85em;
	transform: translateY(-32px);
}
.container .inputBox i {
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 3px;
	background: linear-gradient(45deg, #2196f3, #ff4685);
	transition: 0.5s;
	z-index: 1;
	border-radius: 4px;
	pointer-events: none;
}
.container .inputBox input:valid ~ i,
.container .inputBox input:focus ~ i {
	height: 100%;
	box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.25);
}
</style>
