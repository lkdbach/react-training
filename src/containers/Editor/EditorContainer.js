import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createArticle, updateArticle } from '../../stores/actions';
import { Editor } from '../../components';

const mapStateToProps = state => ({
  ...state.editor
});

const mapDispatchToProps = dispatch => ({
  dispatch,
  ...bindActionCreators({
    createArticle,
    updateArticle
  },
  dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
