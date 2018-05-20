import { storiesOf } from '@storybook/vue'
// Components
import button from '../components/Button.vue'

// Stories: Book Component

storiesOf('button', module)
  .add('active', () => ({
    components: { button },
    template: '<button>je teste storybook!</button>'
  }))
