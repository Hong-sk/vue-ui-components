<template>
	<div class="menu" :class="{ active: menuOpenBool }">
		<div class="toggle" @click="menuOpen">
			<ion-icon :icon="shareSocial"></ion-icon>
		</div>
		<li v-for="value in valueArr" :key="value">
			<a href="#">
				<ion-icon :icon="value"></ion-icon>
			</a>
		</li>
	</div>
</template>

<script>
import { IonIcon } from '@ionic/vue';
import {
	shareSocial,
	logoFacebook,
	logoYoutube,
	logoGithub,
	logoTwitch,
	logoLinkedin,
	logoTwitter,
	logoAndroid,
	logoPinterest,
} from 'ionicons/icons';
import { ref, reactive } from 'vue';

export default {
	components: { IonIcon },
	setup() {
		const menuOpenBool = ref(false);
		const menuOpen = () => {
			menuOpenBool.value = !menuOpenBool.value;
		};
		const aa = ref('--i');
		const bb = ref('--clr');
		const valueArr = reactive([
			logoYoutube,
			logoPinterest,
			logoAndroid,
			logoTwitter,
			logoLinkedin,
			logoFacebook,
			logoTwitch,
			logoGithub,
		]);
		return {
			shareSocial,
			valueArr,
			logoFacebook,
			logoYoutube,
			logoTwitter,
			logoGithub,
			logoTwitch,
			logoLinkedin,
			logoAndroid,
			logoPinterest,
			menuOpen,
			menuOpenBool,
			aa,
			bb,
		};
	},
};
</script>

<style scoped>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
body {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background: linear-gradient(45deg, #9ad751, #2196f3);
}
.menu {
	position: relative;
	width: 280px;
	height: 280px;
	display: flex;
	justify-content: center;
	align-items: center;
}
.menu .toggle {
	position: relative;
	width: 60px;
	height: 60px;
	background: #fff;
	border-radius: 50%;
	box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #333;
	cursor: pointer;
	font-size: 2em;
	transition: 1.25s;
	z-index: 1000;
}
.menu.active .toggle {
	transform: rotate(360deg);
	box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15), 0 0 0 2px #333, 0 0 0 8px #fff;
}
.menu li {
	position: absolute;
	left: 0;
	list-style: none;
	transition: 0.5s;
	transform: rotate(calc(360deg / 8 * var(--i)));
	transform-origin: 140px;
	scale: 0;
	transition-delay: calc(0.05s * var(--i));
}
.menu.active li {
	scale: 1;
}
.menu li a {
	position: relative;
	display: flex;
	transform: rotate(calc(360deg / -8 * var(--i)));
	width: 60px;
	height: 60px;
	background: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	font-size: 1.75em;
	color: var(--clr);
	box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
	transition: 0.5s;
}
.menu li:hover a {
	font-size: 2.5em;
	box-shadow: 0 0 0 2px var(--clr), 0 0 0 6px #fff;
}

.menu li:nth-child(2) {
	--i: 0;
	--clr: #f70000;
}
.menu li:nth-child(3) {
	--i: 1;
	--clr: #e71a21;
}
.menu li:nth-child(4) {
	--i: 2;
	--clr: #3bd580;
}
.menu li:nth-child(5) {
	--i: 3;
	--clr: #52a8e7;
}
.menu li:nth-child(6) {
	--i: 4;
	--clr: #0076b5;
}
.menu li:nth-child(7) {
	--i: 5;
	--clr: #3b5998;
}
.menu li:nth-child(8) {
	--i: 6;
	--clr: #6c2498;
}
.menu li:nth-child(9) {
	--i: 7;
	--clr: #000000;
}
</style>
