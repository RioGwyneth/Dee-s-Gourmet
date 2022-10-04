export default function Textfield({
   padding = "p-3",
  

    placeholder,

  
  }) {
    return (
      <div>
        <div
          className={`
    
            flex items-center rounded-lg shadow-sm border border-1  outline-2 outline-Bt focus-within:outline`}
        >
          
          <input
    
            placeholder={placeholder}
            className={`${padding} h-full w-full rounded-lg outline-none`}
         
          />
        </div>
      
      </div>
    );
  }
  