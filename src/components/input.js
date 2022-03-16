export const Input =(props)=>{
  const onChange = (e) => {
    props.onChange(e);
  };

  return <input type="text" value={props.value} onChange={onChange}/>
}