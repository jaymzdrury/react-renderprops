import {useState, ReactNode} from 'react'

function Counter({header, children} : {header?: (num: number) => ReactNode, children: (num: number) => ReactNode}){
    const [state, stateSet] = useState<number>(1)
    return (
      <>
        {header && <h2>{header?.(state)}</h2>}
        <button onClick={() => 
          stateSet((number) => {
            return number + 1
          }
        )}>
          {children(state)}{' '}Add
        </button>
      </>
    )
}

export default Counter