export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
      const newItems = [...state.people, action.payload]
      return {...state, people:newItems, isModalOpen:true, modalContent: 'Item added'}
    }
  
    else if (action.type === 'NO NAME') {
      console.log("no name dispatched");
      return {...state, isModalOpen: true, modalContent: 'please enter value'};
    }
  
    else if (action.type === 'CLOSE_MODAL') {
      return {...state, isModalOpen: false};
    }
  
    else if (action.type === 'REMOVE_ITEM') {
      const newItems = state.people.filter((person) => person.id !== action.payload)
      return {...state, people:newItems, isModalOpen:true, modalContent: 'Item added'}
    }
  
  
  
    throw new Error ('no name')
    
  }
