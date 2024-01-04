import Button from '../Button/Button.vue'

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

export const ButtonValueX = Template.bind({})
ButtonValueX.args = {
  content: {
    value: 'X',
  },
}

export const ButtonNameY = Template.bind({})
ButtonNameY.args = {
  attributes: {
    name: 'Y',
  },
}

export const ButtonClickAlert = Template.bind({})
ButtonClickAlert.args = {
  content: {
    value: 'Click on me for alert',
  },
  attributes: {
    name: 'clickOnMeForAlert',
  },
  options: {
    onClick: () => alert('You clicked on me!'),
  }
}

export const ButtonNameValueZ = Template.bind({})
ButtonNameValueZ.args = {
  content: {
    value: 'Z',
  },
  attributes: {
    name: 'Z',
  },
}