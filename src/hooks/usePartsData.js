import { useEffect, useState } from "react";

const usePartsData= () => {
    const [parts, setParts] = useState([])
    useEffect(() => {
      fetch('http://localhost:5000/parts')
      .then(res=>res.json())
      .then(data=>setParts(data))
    }, [])
    return[parts, setParts]
}

export default usePartsData;