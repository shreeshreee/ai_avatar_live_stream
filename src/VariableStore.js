import { create } from 'zustand'


const useStore = create((set,get) => ({
    darkTheme:localStorage.getItem('DARKTHEME')==='false'?true : false,
    toggleDarkTheme: (currentValue) => { set({ darkTheme: !currentValue}); console.log(Boolean(localStorage.getItem('DARKTHEME')),currentValue) },
    getTheme:()=> (get().darkTheme),
    
}))
export default useStore;



