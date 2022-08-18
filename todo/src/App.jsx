import { useEffect, useState } from "react";


function App() {
  const [posts, setPosts] = useState([]);



  useEffect(() => {
    const fetchedData = async () => {
      const response = await fetch('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=eEIlY0s6093KSITXAHFLUr4bwrRW2rM0');
      const data = await response.json();
      setPosts(data)
      console.log(data);
    }
    fetchedData();
    

  }, [])



  return (
    <div>
       {posts.status}
    </div>
    );
  }


export default App;
