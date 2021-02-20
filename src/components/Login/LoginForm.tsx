import {useFormik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/system-reducer/system-reducer";
import {RootState} from "../../redux/store";

type DispatchProps = {
  login: (email: string, password: string, rememberMe: boolean) => void,
}
type OwnProps = {}
type StateProps = {}
type Props = DispatchProps & OwnProps & StateProps;

const LoginForm: React.FC<Props> = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: values => {
      props.login(values.email, values.password, values.rememberMe);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <input name="email" type="email" placeholder="Enter email" value={formik.values.email}
               onChange={formik.handleChange}/>
      </div>
      <div>
        <input name="password" type="password" placeholder="Enter password" value={formik.values.password}
               onChange={formik.handleChange}/>
      </div>
      <div>
        <input name="rememberMe" type="checkbox" checked={formik.values.rememberMe} onChange={formik.handleChange}/>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

const mapStateToProps = (): StateProps => ({});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, {
  login,
})(LoginForm);
