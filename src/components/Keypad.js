

function Keypad() {

    function handleChange() {
        console.log("Entering password...")
    } 

  return (
       <div> 
          <form>
                <input onChange={handleChange} type="password" placeholder="Enter Password" />  
          </form>  
       </div>
   ) 
}

export default Keypad
