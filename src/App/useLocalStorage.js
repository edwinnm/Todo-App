import {useState, useEffect} from 'react';

function useLocalStorage(itemName, initialValue){
    const [item, setItems] = useState(initialValue);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
      setTimeout(()=>{
        try{
          const localStorageItems = localStorage.getItem(itemName);
          let parsedItems;
          if(!localStorageItems){
            parsedItems = initialValue;
            localStorage.setItem(itemName, JSON.stringify(parsedItems));
          }else{
            parsedItems = JSON.parse(localStorageItems);
          }
          setItems(parsedItems);
          setLoading(false);
          
        }catch(err){
          setLoading(false);
          setError(true);
        }
        
      }, 1000)
      
    },[]);
  
    const saveItems = (newItems) =>{
      try{
        localStorage.setItem(itemName, JSON.stringify(newItems));
        setItems(newItems);
      }catch(err){
        setError(true)
      }
      
    }
    return {
      item,
      saveItems,
      loading,
      error
    };
  }

export {useLocalStorage};