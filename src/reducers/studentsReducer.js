export default function (state = ["Emil", "Bartek", "Piotr", "Mariola", "Agnieszka", "Paweł", "Kasia"], action) {

  switch(action.type) {
    case 'ADD_STUDENT':
    return [...state, action.payload]
  }

  return state;
}
