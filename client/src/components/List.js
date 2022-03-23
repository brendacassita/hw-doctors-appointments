import StringifyJSON from "./StringifyJSON"

const List = ({data, renderItem})=>{
  const renderList = ()=>{

      // if i don't render Item ill default to Json.stringfy
      if(!renderItem){
          return <StringifyJSON data={data}/>
      }
      /* give it a function to tell me how to render 1 thing*/
      return data.map(renderItem)
  }
  return(
      <div>
         {renderList()}
      </div>
  )
}

export default List