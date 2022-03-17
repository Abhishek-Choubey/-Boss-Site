export function Mobile(props){
    return <>
      <h1>{props.head}</h1>
      {props.arr.map((e, index)=><li key={index}>{e}</li>)}
    </>
}

