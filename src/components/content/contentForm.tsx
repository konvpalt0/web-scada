import {useFormik} from "formik";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";

// interface LoginForm {
//   email: string,
//   password: string,
//   rememberMe: string,
// }


const ContentForm = (props: any) => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: "false",
    },
    onSubmit: values => {
      //TODO fix Boolean transformation
      props.login(values.email, values.password, Boolean(values.rememberMe));
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
        <input name="rememberMe" type="checkbox" value={formik.values.rememberMe} onChange={formik.handleChange}/>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {
  login,
})(ContentForm);
