// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Admin_Add_Included = () => {
//   const [includedTab, setIncludedTab] = useState({
//     tripName: '',
//     cardData: [
//       {
//         levelName: '',
//         tabs: [
//           {
//             days: '',
//             price: '',
//             points: [{ title: '' }],
//           },
//         ],
//       },
//     ],
//   });

//   const handleInputChange = (e, path) => {
//     const { name, value } = e.target;
//     setIncludedTab((prev) => {
//       const newData = JSON.parse(JSON.stringify(prev));
//       let ref = newData;
//       path.slice(0, -1).forEach((key, index) => {
//         ref = ref[key][path[index + 1]];
//       });
//       ref[path[path.length - 1]] = value;
//       return newData;
//     });
//   };

//   const handleAddCard = () => {
//     setIncludedTab((prev) => ({
//       ...prev,
//       cardData: [...prev.cardData, { levelName: '', tabs: [{ days: '', price: '', points: [{ title: '' }] }] }],
//     }));
//   };

//   const handleRemoveCard = (cardIndex) => {
//     setIncludedTab((prev) => {
//       const newCardData = [...prev.cardData];
//       newCardData.splice(cardIndex, 1);
//       return { ...prev, cardData: newCardData };
//     });
//   };

//   const handleAddTab = (cardIndex) => {
//     setIncludedTab((prev) => {
//       const newCardData = [...prev.cardData];
//       newCardData[cardIndex].tabs.push({ days: '', price: '', points: [{ title: '' }] });
//       return { ...prev, cardData: newCardData };
//     });
//   };

//   const handleRemoveTab = (cardIndex, tabIndex) => {
//     setIncludedTab((prev) => {
//       const newCardData = [...prev.cardData];
//       newCardData[cardIndex].tabs.splice(tabIndex, 1);
//       return { ...prev, cardData: newCardData };
//     });
//   };

//   const handleAddPoint = (cardIndex, tabIndex) => {
//     setIncludedTab((prev) => {
//       const newCardData = [...prev.cardData];
//       newCardData[cardIndex].tabs[tabIndex].points.push({ title: '' });
//       return { ...prev, cardData: newCardData };
//     });
//   };

//   const handleRemovePoint = (cardIndex, tabIndex, pointIndex) => {
//     setIncludedTab((prev) => {
//       const newCardData = [...prev.cardData];
//       newCardData[cardIndex].tabs[tabIndex].points.splice(pointIndex, 1);
//       return { ...prev, cardData: newCardData };
//     });
//   };

//   return (
//     <div className="container">
//       <h1>Included Tab Editor</h1>
//       <div className="mb-3">
//         <label htmlFor="tripName" className="form-label">Trip Name</label>
//         <input
//           type="text"
//           id="tripName"
//           className="form-control"
//           value={includedTab.tripName}
//           onChange={(e) => setIncludedTab({ ...includedTab, tripName: e.target.value })}
//         />
//       </div>

//       {includedTab.cardData.map((card, cardIndex) => (
//         <div key={cardIndex} className="card mb-3">
//           <div className="card-body">
//             <div className="mb-3">
//               <label className="form-label">Level Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 value={card.levelName}
//                 onChange={(e) => {
//                   const updatedCardData = [...includedTab.cardData];
//                   updatedCardData[cardIndex].levelName = e.target.value;
//                   setIncludedTab({ ...includedTab, cardData: updatedCardData });
//                 }}
//               />
//             </div>

//             {card.tabs.map((tab, tabIndex) => (
//               <div key={tabIndex} className="border p-3 mb-3">
//                 <div className="mb-3">
//                   <label className="form-label">Days</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={tab.days}
//                     onChange={(e) => {
//                       const updatedCardData = [...includedTab.cardData];
//                       updatedCardData[cardIndex].tabs[tabIndex].days = e.target.value;
//                       setIncludedTab({ ...includedTab, cardData: updatedCardData });
//                     }}
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label className="form-label">Price</label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={tab.price}
//                     onChange={(e) => {
//                       const updatedCardData = [...includedTab.cardData];
//                       updatedCardData[cardIndex].tabs[tabIndex].price = e.target.value;
//                       setIncludedTab({ ...includedTab, cardData: updatedCardData });
//                     }}
//                   />
//                 </div>

//                 {tab.points.map((point, pointIndex) => (
//                   <div key={pointIndex} className="mb-3">
//                     <label className="form-label">Point Title</label>
//                     <input
//                       type="text"
//                       className="form-control"
//                       value={point.title}
//                       onChange={(e) => {
//                         const updatedCardData = [...includedTab.cardData];
//                         updatedCardData[cardIndex].tabs[tabIndex].points[pointIndex].title = e.target.value;
//                         setIncludedTab({ ...includedTab, cardData: updatedCardData });
//                       }}
//                     />
//                     <button
//                       className="btn btn-danger mt-2"
//                       onClick={() => handleRemovePoint(cardIndex, tabIndex, pointIndex)}
//                     >
//                       Remove Point
//                     </button>
//                   </div>
//                 ))}

//                 <button className="btn btn-primary mb-3" onClick={() => handleAddPoint(cardIndex, tabIndex)}>
//                   Add Point
//                 </button>

//                 <button className="btn btn-danger mb-2" onClick={() => handleRemoveTab(cardIndex, tabIndex)}>
//                   Remove Tab
//                 </button>
//               </div>
//             ))}

//             <button className="btn btn-primary mb-3" onClick={() => handleAddTab(cardIndex)}>
//               Add Tab
//             </button>

//             <button className="btn btn-danger" onClick={() => handleRemoveCard(cardIndex)}>
//               Remove Card
//             </button>
//           </div>
//         </div>
//       ))}

//       <button className="btn btn-primary" onClick={handleAddCard}>Add Card</button>
//     </div>
//   );
// };

// export default Admin_Add_Included;




import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import config from '../config/config';

const Admin_Add_Included = () => {
  const [includedTab, setIncludedTab] = useState({
    tripName: '',
    cardData: [
      {
        levelName: '',
        tabs: [
          {
            days: '',
            price: '',
            points: [{ title: '' }],
          },
        ],
      },
    ],
  });

  const handleInputChange = (e, path) => {
    const { name, value } = e.target;
    setIncludedTab((prev) => {
      const newData = JSON.parse(JSON.stringify(prev));
      let ref = newData;
      path.slice(0, -1).forEach((key, index) => {
        ref = ref[key][path[index + 1]];
      });
      ref[path[path.length - 1]] = value;
      return newData;
    });
  };

  const handleAddCard = () => {
    setIncludedTab((prev) => ({
      ...prev,
      cardData: [...prev.cardData, { levelName: '', tabs: [{ days: '', price: '', points: [{ title: '' }] }] }],
    }));
  };

  const handleRemoveCard = (cardIndex) => {
    setIncludedTab((prev) => {
      const newCardData = [...prev.cardData];
      newCardData.splice(cardIndex, 1);
      return { ...prev, cardData: newCardData };
    });
  };

  const handleAddTab = (cardIndex) => {
    setIncludedTab((prev) => {
      const newCardData = [...prev.cardData];
      newCardData[cardIndex].tabs.push({ days: '', price: '', points: [{ title: '' }] });
      return { ...prev, cardData: newCardData };
    });
  };

  const handleRemoveTab = (cardIndex, tabIndex) => {
    setIncludedTab((prev) => {
      const newCardData = [...prev.cardData];
      newCardData[cardIndex].tabs.splice(tabIndex, 1);
      return { ...prev, cardData: newCardData };
    });
  };

  const handleAddPoint = (cardIndex, tabIndex) => {
    setIncludedTab((prev) => {
      const newCardData = [...prev.cardData];
      newCardData[cardIndex].tabs[tabIndex].points.push({ title: '' });
      return { ...prev, cardData: newCardData };
    });
  };

  const handleRemovePoint = (cardIndex, tabIndex, pointIndex) => {
    setIncludedTab((prev) => {
      const newCardData = [...prev.cardData];
      newCardData[cardIndex].tabs[tabIndex].points.splice(pointIndex, 1);
      return { ...prev, cardData: newCardData };
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_included`, includedTab);
      console.log('Data submitted successfully:', response.data);
      alert('Data submitted successfully!');
    } catch (error) {
      console.error('Error submitting data:', error);
      alert('Failed to submit data.');
    }
  };

  return (
    <div className="container">
      <h1>Included Tab Editor</h1>
      <div className="mb-3">
        <label htmlFor="tripName" className="form-label">Trip Name</label>
        <input
          type="text"
          id="tripName"
          className="form-control"
          value={includedTab.tripName}
          onChange={(e) => setIncludedTab({ ...includedTab, tripName: e.target.value })}
        />
      </div>

      {includedTab.cardData.map((card, cardIndex) => (
        <div key={cardIndex} className="card mb-3">
          <div className="card-body">
            <div className="mb-3">
              <label className="form-label">Level Name</label>
              <input
                type="text"
                className="form-control"
                value={card.levelName}
                onChange={(e) => {
                  const updatedCardData = [...includedTab.cardData];
                  updatedCardData[cardIndex].levelName = e.target.value;
                  setIncludedTab({ ...includedTab, cardData: updatedCardData });
                }}
              />
            </div>

            {card.tabs.map((tab, tabIndex) => (
              <div key={tabIndex} className="border p-3 mb-3">
                <div className="mb-3">
                  <label className="form-label">Days</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tab.days}
                    onChange={(e) => {
                      const updatedCardData = [...includedTab.cardData];
                      updatedCardData[cardIndex].tabs[tabIndex].days = e.target.value;
                      setIncludedTab({ ...includedTab, cardData: updatedCardData });
                    }}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Price</label>
                  <input
                    type="text"
                    className="form-control"
                    value={tab.price}
                    onChange={(e) => {
                      const updatedCardData = [...includedTab.cardData];
                      updatedCardData[cardIndex].tabs[tabIndex].price = e.target.value;
                      setIncludedTab({ ...includedTab, cardData: updatedCardData });
                    }}
                  />
                </div>

                {tab.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="mb-3">
                    <label className="form-label">Point Title</label>
                    <input
                      type="text"
                      className="form-control"
                      value={point.title}
                      onChange={(e) => {
                        const updatedCardData = [...includedTab.cardData];
                        updatedCardData[cardIndex].tabs[tabIndex].points[pointIndex].title = e.target.value;
                        setIncludedTab({ ...includedTab, cardData: updatedCardData });
                      }}
                    />
                    <button
                      className="btn btn-danger mt-2"
                      onClick={() => handleRemovePoint(cardIndex, tabIndex, pointIndex)}
                    >
                      Remove Point
                    </button>
                  </div>
                ))}

                <button className="btn btn-primary mb-3" onClick={() => handleAddPoint(cardIndex, tabIndex)}>
                  Add Point
                </button>

                <button className="btn btn-danger mb-2" onClick={() => handleRemoveTab(cardIndex, tabIndex)}>
                  Remove Tab
                </button>
              </div>
            ))}

            <button className="btn btn-primary mb-3" onClick={() => handleAddTab(cardIndex)}>
              Add Tab
            </button>

            <button className="btn btn-danger" onClick={() => handleRemoveCard(cardIndex)}>
              Remove Card
            </button>
          </div>
        </div>
      ))}

      <button className="btn btn-primary" onClick={handleAddCard}>Add Card</button>
      <button className="btn btn-success mt-3" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Admin_Add_Included;

