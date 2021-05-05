import React from "react";
import {HmiSprite, Sprites} from "../../../redux/reducers/types";
import {useFormik} from "formik";
import {connect} from "react-redux";
import {RootState} from "../../../redux/store";
import {updateScreenSingleSprite, updateScreenSprites} from "../../../redux/reducers/screen-reducer/screen-reducer";

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
        <div>
          meta:
          <div>
            id: <input name="meta.id" type="number" value={formik.values.meta.id}/>
          </div>
          <div>
            description: <input name="meta.description" type="text" value={formik.values.meta.description} onChange={formik.handleChange}/>
          </div>
        </div>
        <div>
          spec:
          <div>
            spec things {JSON.stringify(spec)}
          </div>
        </div>
        <div>
          position:
          <div>
            x: <input name="position.x" type="number" value={formik.values.position.x} onChange={formik.handleChange}/>
          </div>
          <div>
            y: <input name="position.y" type="number" value={formik.values.position.y} onChange={formik.handleChange}/>
          </div>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

const mstp = (state: RootState): StateProps => ({

});

export default connect<StateProps, DispatchProps, OwnProps, RootState>(mstp, {
  updateSingleSprite: updateScreenSingleSprite,
})(HmiRedactorForm);