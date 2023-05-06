
// import React, { useContext, useState } from 'react';
// import { AppContext } from '../context/AppContext';

// const Budget = () => {
//   const { budget, updateBudget } = useContext(AppContext);
//   const [newBudget, setNewBudget] = useState(budget);

//   const handleInput = (e) => {
//     const value = e.target.value;
//     if (!isNaN(value)) {
//       const newValue = parseInt(value, 10);
//       if (newValue > 20000) {
//         // Show an error message if the value exceeds the upper limit
//         alert('Budget cannot exceed £20000');
//       } else {
//         // Only update the newBudget value if the input is a valid number and within the upper limit
//         setNewBudget(newValue);
//       }
//     }
//   };

//   const handleSave = () => {
//     updateBudget(newBudget);
//   };

//   return (
//     <div className="alert alert-secondary">
//       <span>Budget: £</span>
//       <input type="text" value={newBudget} onChange={handleInput} />
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
  
// };

// export default Budget;

import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, updateBudget, currency, updateCurrency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);

  const handleInput = (e) => {
    const value = e.target.value;
    if (!isNaN(value)) {
      const newValue = parseInt(value, 10);
      if (newValue > 20000) {
        alert('Budget cannot exceed £20000');
      } else {
        setNewBudget(newValue);
      }
    }
  };

  const handleSave = () => {
    updateBudget(newBudget);
  };

  const handleCurrencyChange = (e) => {
    const newCurrency = e.target.value;
    updateCurrency(newCurrency);
  };

  return (
    <div className='alert alert-secondary'>
      <span>Budget:</span>
      <input type='text' value={newBudget} onChange={handleInput} />
      <select value={currency} onChange={handleCurrencyChange}>
        <option value='£'>£ Pound</option>
        <option value='$'>$ Dollar</option>
        <option value='€'>€ Euro</option>
        <option value='₹'>₹ Ruppee</option>
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Budget;

 
  

