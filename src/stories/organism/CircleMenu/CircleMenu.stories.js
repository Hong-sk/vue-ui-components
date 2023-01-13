import CircleMenu from './CircleMenu.vue';

export default {
	title: 'CircleMenu',
	component: CircleMenu,
};

const Template = () => ({
	components: { CircleMenu },
	template: '<CircleMenu/>',
});

export const CircleMenuCompo = Template.bind({});
