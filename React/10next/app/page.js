"use client"

import Image from "next/image";
import todoService from '@/services/todoService';

export default function Home() {
     
  // Load todos on component mount
  useEffect (() => {
    loadTodos();
  },[])


  const [loads ,setLoadds] = useState([])



    const loadTodos =  async() => {
      try{
        const data = await todoService.getAllTodos();
        setTodos(data)
      }catch(error){

      }
    
    }
      
}
