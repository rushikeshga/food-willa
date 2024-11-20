const Contact = ()=>{
    return <div>
       <h3 className="font-bold text-3xl p-4 m-4">Contact Us......</h3> 
       <form>
        <input type="text" className = "border-2 border-emerald-950 rounded m-2 p-2" placeholder="Name"></input>
        <input type="text" className = "border-2 border-emerald-950 rounded m-2 p-2" placeholder="Message"></input>
        <button type="submit" className = "border-2 border-emerald-950 rounded m-2 p-2"> Submit</button>
       </form>
    </div>
}

export default Contact;