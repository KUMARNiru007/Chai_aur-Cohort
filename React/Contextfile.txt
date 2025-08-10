import {createContext, useContext, useState} from 'react';

const NotificationContext = createContext()
//a big object

export function NotificationProvider({children}) {
    const[count, setCount] = useState(0)

    const addNotification = () => {
        setCount((prev)=> prev+1)
    }


    const resetNotification=()=>{
        setCount(0);
    }

    return (
        <NotificationContext.Provider value={{count, addNotification,resetNotification}}> // wrapping what to expose

            {children}

        </NotificationContext.Provider>
    )
}


//custom hook

export function useNotification()  {
    return useContext(NotificationContext);
}