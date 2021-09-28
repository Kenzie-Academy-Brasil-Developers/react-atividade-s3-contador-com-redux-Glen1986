import {useSelector} from "react-redux";

const Display = () => {

  const result = useSelector((store) => store.exemplo);
  return (
    <div>{result}</div>
  )
}
export default Display;
