import React, {  useReducer } from "react";
import data from "./dataJson";
import { useHistory } from "react-router-dom";
import 'react-bulma-components/dist/react-bulma-components.min.css';
import style from "./Input.module.css"
const Form = props => {
  const references = {};
  const allData = [{ dataForm: data }];

  const state2 = {
		submissions: []
	}
  const history = useHistory();
  const navigateTo = () => history.push('/submissions');
  const getOrCreateRef =id => {
    if (!references.hasOwnProperty(id)) {
      references[id] = React.createRef();
    }
    return references[id];
  }
  const handleFormSubmit = e => {
    e.preventDefault();
    const formData = {};
    for (const field in references) {
      formData[field] = references[field].current.value;
    }
    state2.submissions.push(formData)
  };
  function reducer(state = allData, action) {
    switch (action.type) {
      case 'SEND':
        return {
          ...state2,
          isConfirmed: true,
        }
      default:
        throw Error('unknown action')
    }
  }

  const [state, dispatch] = useReducer(reducer, state2.submissions)
  return (
    <div >
      <h1 class="title is-2"style={{
                color: "green"
              }}>Edit your information</h1>
    <form   onSubmit={handleFormSubmit} onClick={() => dispatch({ type: 'SEND' })}>
      {allData[0].dataForm.inputFields.map((e, i) => (
        <div   key={e.id}>
          <label className={style.form_item}>
            {e.label}
            <input className={style.form_item}
              ref={getOrCreateRef(e.id)}
              placeholder={e.placeholder}
              type={e.type}
              maxLength={e.maxLength}
            />
          </label>
        </div>
      ))}
       <button class="button is-success is-light"  onClick={navigateTo}>Send submission</button>
    </form>
    </div>
  );
};


export default Form;
