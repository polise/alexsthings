import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Homepage from './Homepage';

import { setMessage } from './redux/actions/message';

const mapStateToProps = state => Object.assign({}, { message: state.messageReducer.message });

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ setMessage }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
