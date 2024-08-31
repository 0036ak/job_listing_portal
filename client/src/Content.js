function Content(){
   return ( <div>
        <div>

       
     <h1>Find Your Dream Jobs Today!</h1>
     <p>Connecting Your Talent with Great Opportunity</p>
    <div>
        <div>
            <form>
            <input type="text" name="title_name" placeholder="titel or company"></input>
            <select>
            <option value="" hidden>Select Location</option>
                <option value="Delhi">Bengaluru</option>
                <option value="Delhi">Karnataka</option>
                <option value="Delhi">Delhi</option>
            </select>
            <select >
            <option value="" hidden>Select Category</option>
                <option value="web development">Web development</option>
                <option value="Data Science">Data Science</option>
                <option value="Java Programming">Java Programming</option>
                <option value="AI">AI</option>
                <option value="BlockChain">BlockChain</option>
                
            </select>
            <input type="submit" placeholder="Search"></input>
            </form>
       
        

        </div>
    </div>
     </div>
    </div>)
}
export default Content;