import {ReactNode, useState} from 'react'

function Amount({children}:{children: (state: number) => ReactNode}){
  const [state, stateSet] = useState({amount: 0})
  return (
    <div>
      {state.amount}
      <button data-testid='amount-add' onClick={() => stateSet(state => ({amount: state.amount + 1}))}>+</button>
      <button data-testid='amount-subtract' onClick={() => stateSet(state => ({amount: state.amount - 1}))}>-</button>
      {children(state.amount)}
    </div>
  )
}

export default Amount