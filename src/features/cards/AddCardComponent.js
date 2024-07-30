// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { addCard } from "./cardsSlice"; // Adjust the path accordingly

// const AddCardComponent = () => {
//   const [front, setFront] = useState("");
//   const [back, setBack] = useState("");
//   const dispatch = useDispatch();

//   const handleAddCard = () => {
//     const id = Date.now().toString(); // Generate a unique ID
//     dispatch(addCard({ id, front, back }));
//     setFront("");
//     setBack("");
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Front of card"
//         value={front}
//         onChange={(e) => setFront(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Back of card"
//         value={back}
//         onChange={(e) => setBack(e.target.value)}
//       />
//       <button onClick={handleAddCard}>Add Card</button>
//     </div>
//   );
// };

// export default AddCardComponent;
