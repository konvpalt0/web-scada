import React from "react";
import {HmiSprite} from "../../../redux/reducers/types";
import {useFormik} from "formik";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {updateScreenSingleSprite} from "../../../redux/reducers/screen-reducer/screen-reducer";
import style from "./Hmi.module.css";

type OwnProps = HmiSprite;
type StateProps = {};
type DispatchProps = {
  updateSingleSprite: typeof updateScreenSingleSprite,
};
type Props = OwnProps & StateProps & DispatchProps;

const HmiRedactorForm: React.FC<Props> = ({meta, spec, position, updateSingleSprite}) => {
  const formik = useFormik<HmiSprite>({
    enableReinitialize: true,
    initialValues: {
      meta: meta,
      spec: spec,
      position: position,
    },
    onSubmit: values => {
      console.log(values);
      updateSingleSprite(values.meta.id, values);
    },
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className={style.block}>
          <div className={style.field}>
            <div>
              id:
            </div>
            <input name="meta.id" type="number" value={formik.values.meta.id}/>
          </div>
          <div className={style.field}>
            <div>
              description:
            </div>
            <input name="meta.description" type="text" value={formik.values.meta.description}
                   onChange={formik.handleChange}/>
          </div>
          <div className={style.field}>
            <div>spec:</div>
            <input value={JSON.stringify(spec)}/>
          </div>
          <div className={style.field}>
            <div>
              x:
            </div>
            <input name="position.x" type="number" value={formik.values.position.x} onChange={formik.handleChange}/>
          </div>
          <div className={style.field}>
            <div>
              y:
            </div>
            <input name="position.y" type="number" value={formik.values.position.y} onChange={formik.handleChange}/>
          </div>
          <div className={style.field}>
            <button type="submit" className={style.button}>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

const mstp = (state: RootState): StateProps => ({});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
  updateSingleSprite: updateScreenSingleSprite,
})(HmiRedactorForm);