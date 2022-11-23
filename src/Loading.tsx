import {useState, useEffect} from 'react'
interface Object {
  loading: boolean,
  error: boolean,
  data: string
}
function Load({children}:{children: (value: Object) => JSX.Element}) {
  const [state, stateSet] = useState({loading: true, error: false, data: ''})
  useEffect(() => {
    setTimeout(() => {
      stateSet({loading: false, error: false, data: 'data'})
    },500)
  },[])
  return children(state)
}
export default Load