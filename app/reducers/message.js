// Reducer
export default function message(state = '66哒' , action) {
  switch (action.type) {
    case 'a':
      return  Object.assign({},state,'123')
    case 'b':
      return Object.assign({},state,'234')
    default:
      return state
  }
}
// export default counter

//函数名就是 state的名称
