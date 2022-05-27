import { useEffect, useState } from "react";

const usePartsData= () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
      fetch('https://cryptic-springs-54649.herokuapp.com/parts')
      .then(res=>res.json())
      .then(data=>setParts(data))
    }, [])
    return[parts, setParts]
}

export default usePartsData;