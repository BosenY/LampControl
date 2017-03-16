// Reducer
export default function counter(state =    0 , action) {
  switch (action.type) {
    case 'increase':
      return state + 1
    case 'decrement':
      return state - 1
    default:
      return state
  }
}
// export default counter

//函数名就是 state的名称
