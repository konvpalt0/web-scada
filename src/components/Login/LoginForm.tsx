import {useFormik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/system-reducer/system-reducer";
import {RootState} from "../../redux/store";
import gStyle from "../../GlobalStyle.module.css";

type DispatchProps = {
  login: (email: string, password: string) => void,
}
type OwnProps = {}
type StateProps = {}
type Props = DispatchProps & OwnProps & StateProps;

const LoginForm: React.FC<Props> = (props) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: values => {
      props.login(values.email, values.password);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={gStyle.loginForm}>
      <div className={gStyle.inputValue}>
        <input name="email" type="email" placeholder="Enter email" value={formik.values.email}
               onChange={formik.handleChange}/>
      </div>
      <div className={gStyle.inputValue}>
        <input name="password" type="password" placeholder="Enter password" value={formik.values.password}
               onChange={formik.handleChange}/>
      </div>
      <div className={gStyle.buttonWrapper}>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

const mapStateToProps = (): StateProps => ({});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mapStateToProps, {
  login,
})(LoginForm);
