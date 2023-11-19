export default function Signheader (props) {
  return (
    <>
     <div className="flex items-center w-full p-3 px-4 justify-evenly ">
      <div className="inline-block w-1/3">
        <i className="px-4 py-2 text-xl text-left bg-white rounded-full fas fa-chevron-left"></i>
      </div>
       
       <h1 className="inline-block w-2/3 text-md font-semibold text-center">{props.message}</h1>
       <div className="w-1/3"></div>
      </div>   
    </>
  )
}
