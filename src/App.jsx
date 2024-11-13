import { useEffect, useState } from "react"

function App() {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const url = "https://catfact.ninja/fact"

  async function fetchAPI() {
    setLoading(true)
    setError(null)

    try{
      const response = await fetch(url);
      if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const result = await response.json()
      setData(result)
    }
    catch(error) {
      setError(error.message)
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <>

    <div className="bg-[#D8D2C2] flex justify-center items-center min-h-screen h-full p-2 sm:px-10 md:px-20">  
      <div className="text-center bg-[#B17457] pt-10 pb-5 px-16 rounded-2xl shadow-md">  
            {loading && <h2 className="text-[#4A4947] my-1">Loading...</h2>}
            {error && <p className="text-[#4A4947]">{error}</p>}
            {data && <h1 className="text-[#4A4947] font-bold text-2xl">{data.fact}</h1>}
          <button onClick={fetchAPI} className="px-5 py-2 border-2 border-[#4A4947] text-[#4A4947] m-5 rounded-md font-bold hover:bg-[#4A4947] hover:text-[#B17457] transition-all duration-300">Another one</button>
      </div> 
    </div>

    </>
  )
}

export default App
