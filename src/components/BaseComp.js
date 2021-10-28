export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            default: -1,
        },
        focusAfterMount: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            active: false,
        };
    },
    computed: {
        emitObj() {
            return {
                name: this.name,
                index: this.index,
            };
        },
    },
    methods: {
        focus() {
            this.$el.focus();
        },
        blur() {
            this.$el.blur();
        },
        activate() {
            this.active = true;
            this.$emit('activate', this.emitObj);
        },
        deactivate() {
            this.active = false;
            this.$emit('deactivate', this.emitObj);
        },
        toogleActive() {
            this.active = !this.active;
            this.$emit(this.active ? 'activate' : 'deactivate', this.emitObj);
        },
        onfocus() {
            this.$emit('focus', this.emitObj);
        },
        onblur() {
            this.$emit('blur', this.emitObj);
        },
        focusNext() {
            this.$emit('focusNext', this.emitObj);
        },
        focusPrev() {
            this.$emit('focusPrev', this.emitObj);
        },
        focusUp() {
            this.$emit('focusUp', this.emitObj);
        },
    },
    mounted() {
        if (this.focusAfterMount) {
            this.focus();
        }
    },
}