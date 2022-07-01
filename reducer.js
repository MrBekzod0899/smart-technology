const initialState=[]
export const reducer=(state=initialState,{type,payload})=>{
  console.log(payload)
  console.log('dispatch',type)
  switch(type){
    case "ADD_ITEM":
      return {
        ...state,
        value:state.value+1
      }
    
    default :return state
  }
}