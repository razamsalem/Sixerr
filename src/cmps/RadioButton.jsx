export function RadioButton({ name, id, value,onChange, checked, text }) {

    // function onChange(e){
    //     console.log("ppppp");
    //   const { name } = e.target
    //   console.log('clicked  ==>', name)
    // }
    // console.log(checked);
  
    return (
      <label htmlFor={`${id}`} className="radio-label" >
        <input
          className="radio-input"
          type="radio"
          name={name}
          id={id}
          value={value}
          onChange={onChange}
          checked={checked}
        />
        <span className="custom-radio" />
            {text}
      </label>
    )
  }