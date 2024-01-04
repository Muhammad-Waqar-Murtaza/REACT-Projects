import { useState, useEffect } from "react"

const useFetch = (url) => {
    
    const [blogs, setBlogs] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

            fetch(url)
            .then((res)=>{
                if(!res.ok){
                    throw Error('could not find resource')
                }
                return res.json()  
            }).then((data)=>{
                setBlogs(data)
                setIsPending(false)
                setError(null)
            }).catch((err)=>{
                if(err.name === "AbortError"){
                    console.log("Aborted")
                } else {
                    setIsPending(false)
                    setError(err.message)
                }
            })

    }, [url])

    return {blogs, isPending, error}
}

export default useFetch;