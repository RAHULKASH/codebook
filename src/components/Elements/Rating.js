
export const Rating = ({rating}) => {

 const arr=Array(5).fill(false);

 for(let i=0;i<rating;i++){
    arr[i]= ((i<rating)?true:false);
 }

  return (
    <div>
        {
        arr.map((star,index)=>{
            return (star?<i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>:<i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>);
        })
         }
    </div>
  )
}
