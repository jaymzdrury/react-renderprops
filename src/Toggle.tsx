import {ReactElement, useState} from 'react'

const Toggle = ({children} : {children: (greeting: string, toggle: () => void, on: boolean) => ReactElement}) => {
    const [on, setOn] = useState(false)
    const toggle = () => setOn(prev => !prev)
    return children('Hello', toggle, on)
}
export default Toggle