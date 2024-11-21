import React from 'react'

export default function SubjectName() {
function product(item){
    alert(`${item} is purched`);
}




let Sname=['C','#C','C++','Java','Python','Php']



  return (
    <div className='container'>
     <div className='row'>
       <div className='col-sm-2'>
        
       </div>
       <div className='col-sm-8'>
        <ul className="list-group border border-danger">
            {Sname.map((item=><li className="list-group-item">{item}
                <button onClick={()=>product(item)} className='btn btn-primary' style={{float:'right'}}>Buy</button>
            </li> )) }
         
    
      </ul>
     </div>

       <div className='col-sm-2'> </div>
     </div>
  
    </div>
  )
}
