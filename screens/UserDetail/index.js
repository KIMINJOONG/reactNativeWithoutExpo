import UserDetailContainer from "./UserDetailContainer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutAction, loadUser } from "../../reducers/user";

const mapStateToProps = state => ({
  me : state.user.me,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ logoutAction, loadUser }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetailContainer);