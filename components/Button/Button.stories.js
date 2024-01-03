import Button from '../Button/Button.vue'

export default {
  component: Button,
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button :content="args.content" :attributes="args.attributes" />',
})

export const ButtonElement = Template.bind({})