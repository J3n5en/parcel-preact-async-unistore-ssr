import { Component, h } from 'preact'
import { connect } from 'unistore/preact'
import { actions } from '../../store/store'

class Users extends Component {
  render({ count, increment, decrement }) {
    return (
      <div class="page-users">
        {count}
        <button class="increment-btn" onClick={increment}>
          Increment
        </button>
        <button class="decrement-btn" onClick={decrement}>
          Decrement
        </button>
        Rhoncus habitasse pellentesque. Ut aliquam eu. Et risus lectus. Dictum
        sit natoque et commodo posuere amet tempor eros lacus tincidunt
        facilisis rhoncus tellus ac. Pulvinar laoreet magna mauris justo
        viverra. Metus deleniti lacinia sed lacinia vestibulum pede id tincidunt
        imperdiet vestibulum magna vestibulum curabitur
      </div>
    )
  }
}
export default connect('count', actions)(Users)
