import Button from './Button2.vue'

export default {
  component: Button,
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button :content="args.content" :attributes="args.attributes" :options="args.options" />',
})

export const ButtonDefault = Template.bind({})
ButtonDefault.args = {
  content: {
    value: 'Default',
  },
}