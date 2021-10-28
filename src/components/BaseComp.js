export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        focusAfterMount: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        focus() {
            this.$el.focus();
        },
        blur() {
            this.$el.blur();
        },
        onfocus() {
            this.$el.scrollIntoView({ behavior: 'smooth' });
        },
        focusNext() {
            this.$emit('focusNext');
        },
        focusPrev() {
            this.$emit('focusPrev');
        },
        focusUp() {
            this.$emit('focusUp');
        },
    },
    mounted() {
        if (this.focusAfterMount) {
            this.focus();
        }
    },
    emits: ['focusNext', 'focusPrev', 'focusUp'],
}