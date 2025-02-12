// import React, { useState } from 'react';

// const Packages = ({ packagesData, selectedLanguage }) => {

//   console.log("packagesDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", packagesData)
//   const [activeTab, setActiveTab] = useState(0); // Use 0 as the default index

//   return (
//     <>
//       <div className="container pack_cont ">
//         <div className="row">
//           <div className="col text-center m-auto">
//             <div className="text-center justify-center m-auto ">
//               {packagesData.levelsData.map((level, index) => (
//                 <button
//                   className="package_btn"
//                   key={index}
//                   onClick={() => setActiveTab(index)} // Use onClick to update the activeTab
//                 >
//                   <p>{level.levelName}</p>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container">
//         <div className="output-container">
//           <div className="row">
//             <p className='surf_para text-center'>{packagesData.levelsData[activeTab]?.desc[selectedLanguage]}</p> {/* Access the correct index */}
//           </div>
//           <div className='container mt-5'>
//             {packagesData.levelsData[activeTab]?.imgsect.map((item, index) => (
//               <div className='row mt-5' key={index}>
//                 {item.imgPosition === 'left' && (
//                   <div className='col-md-6'>
//                     <div className='lifestyle_div'>
//                       <img src={item.imgSrc} className='lifestyle' alt="lifestyle" />
//                     </div>
//                   </div>
//                 )}
//                 <div className='col-md-6'>
//                   <div className="life_style_div">
//                     <p className='lifestyle_text'>{item.text[selectedLanguage]}</p>
//                     <div className="lifestyle_para">
//                       <p>{item.para[selectedLanguage]}</p>
//                     </div>
//                   </div>
//                 </div>
//                 {item.imgPosition === 'right' && (
//                   <div className='col-md-6'>
//                     <div className='lifestyle_div'>
//                       <img src={item.imgSrc} className='lifestyle' alt="lifestyle" />
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>

//           <div className="container-fluid">
//             <div className="row">
//               <p className='sum2_heading'>{packagesData.levelsData[activeTab]?.acordation_head[selectedLanguage]}</p>
//             </div>
//             <div className="row sum2_container">
//               {packagesData.levelsData[activeTab]?.acordation_data.map((item, index) => (
//                 <div className="col-md-4" key={index}>
//                   <details>
//                     <summary className='sum2'>{item.title[selectedLanguage]}</summary>
//                     <div className="sum2__content fs-5 mb-2">
//                       <p>{item.info[selectedLanguage]}</p>
//                     </div>
//                   </details>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="container-fluid">
//             <div className="row">
//               <p className='p_faq_heading'>{packagesData.levelsData[activeTab]?.faq_head[selectedLanguage]}</p>
//             </div>
//             <div className="row p_faq_container">
//               {packagesData.levelsData[activeTab]?.faq_data.map((item, index) => (
//                 <details key={index}>
//                   <summary className='p_faq'>{item.title[selectedLanguage]}</summary>
//                   <div className="p_faq__content fs-5 mb-2">
//                     <p>{item.info[selectedLanguage]}</p>
//                   </div>
//                 </details>
//               ))}
//             </div>
//           </div>


//           {/* Kitegear rental  container here  */}
//           <div className='container-fluid'>
//             <div className="row">
//               <div className="col">
//                 <div>
//                   <h2 className='surf_text text-center'>{packagesData.Kitegear_rental.title[selectedLanguage]}</h2>
//                   <p className='text-center surf_para fs-5'>{packagesData.Kitegear_rental.para1[selectedLanguage]}</p>
//                   <p className='text-center surf_para fs-5'>{packagesData.Kitegear_rental.para2[selectedLanguage]}</p>
//                 </div>
//                 <div>
//                   <h2 className='text-center surf_text mt-5 pt-5'>{packagesData.Disclaimer.title[selectedLanguage]}</h2>
//                   <p className='text-center surf_para fs-5'>{packagesData.Disclaimer.para1[selectedLanguage]}</p>
//                   <p className='text-center surf_para fs-6'>{packagesData.Disclaimer.para2[selectedLanguage]}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="container-fluid">
//             <div className="row logocard_container">
//               {packagesData.levelsData[activeTab].logo_img.map((item, index) => (
//                 <div className="col-md-3">
//                   <div className='logo_img_contaienr'>
//                     <img src={item.img} alt="lifestyle" className='logo_img' />
//                   </div>
//                   <p className='text-center p-3 fs-6'><b>{item.title[selectedLanguage]}</b></p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Packages;


import React, { useState } from 'react';
import config from '../../../config/config';

const Packages = ({ packagesData }) => {
  console.log("packagesDataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", packagesData)
  const [activeTab, setActiveTab] = useState(0); // Default index is 0

  return (
    <>
      <div className="container pack_cont">
        <div className="row">
          <div className="col text-center m-auto m-0 p-0 ">
            <div className="package_btn_div m-0 p-0 ">
              {packagesData.levelData.map((level, index) => (
                <button
                  className="package_btn"
                  key={index}
                  onClick={() => setActiveTab(index)} // Update activeTab on click
                >
                  <p>{level.levelName}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="output-container">
          <div className="row">
            <p className="surf_para text-center">
              {packagesData.levelData[activeTab]?.desc}
            </p>
          </div>

          <div className="container mt-5">
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="lifestyle_div">
                  <img src={`${config.API_BASE_URL}/${packagesData.levelData[activeTab]?.img1}`} className="lifestyle" alt="lifestyle" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="life_style_div">
                  <p className="lifestyle_text">{packagesData.levelData[activeTab]?.text1}</p>
                  <div className="lifestyle_para">
                    <p>{packagesData.levelData[activeTab]?.para1}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-6">
                <div className="life_style_div">
                  <p className="lifestyle_text">{packagesData.levelData[activeTab]?.text2}</p>
                  <div className="lifestyle_para">
                    <p>{packagesData.levelData[activeTab]?.para2}</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="lifestyle_div">
                  <img src={`${config.API_BASE_URL}/${packagesData.levelData[activeTab]?.img2}`} className="lifestyle" alt="lifestyle" />
                </div>
              </div>

            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <p className="sum2_heading">
                {packagesData.levelData[activeTab]?.accomodationTitle}
              </p>
            </div>
            <div className="row sum2_container">
              {packagesData.levelData[activeTab]?.accomodationData?.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <details>
                    <summary className="sum2">{item.title}</summary>
                    <div className="sum2__content fs-5 mb-2">
                      <p>{item.para}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <p className="p_faq_heading">
                {packagesData.levelData[activeTab]?.faqTitle}
              </p>
            </div>
            <div className="row p_faq_container">
              {packagesData.levelData[activeTab]?.faqData?.map((item, index) => (
                <details key={index}>
                  <summary className="p_faq">{item.title}</summary>
                  <div className="p_faq__content fs-5 mb-2">
                    <p>{item.para}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

           <div className="container-fluid">
             <div className="row logocard_container">
               {/* {packagesData.levelsData[activeTab].logo_img.map((item, index) => ( */}
                 <div className="col-md-3">
                   <div className='logo_img_contaienr'>
                     <img src={`${config.API_BASE_URL}/${packagesData.levelData[activeTab]?.logoimg1}`} alt="lifestyle" className='logo_img' />
                   </div>
                   <p className='text-center p-3 fs-6'><b>{packagesData.levelData[activeTab]?.logotext1}</b></p>
                 </div>
                 <div className="col-md-3">
                   <div className='logo_img_contaienr'>
                     <img src={`${config.API_BASE_URL}/${packagesData.levelData[activeTab]?.logoimg2}`} alt="lifestyle" className='logo_img' />
                   </div>
                   <p className='text-center p-3 fs-6'><b>{packagesData.levelData[activeTab]?.logotext2}</b></p>
                 </div>
                 <div className="col-md-3">
                   <div className='logo_img_contaienr'>
                     <img src={`${config.API_BASE_URL}/${packagesData.levelData[activeTab]?.logoimg3}`} alt="lifestyle" className='logo_img' />
                   </div>
                   <p className='text-center p-3 fs-6'><b>{packagesData.levelData[activeTab]?.logotext3}</b></p>
                 </div>
                 <div className="col-md-3">
                   <div className='logo_img_contaienr'>
                     <img src={`${config.API_BASE_URL}/${packagesData.levelData[activeTab]?.logoimg4}`} alt="lifestyle" className='logo_img' />
                   </div>
                   <p className='text-center p-3 fs-6'><b>{packagesData.levelData[activeTab]?.logotext4}</b></p>
                 </div>
               {/* ))} */}
             </div>
           </div>

          {/* Kitegear rental and disclaimer */}
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <div>
                  <h2 className="surf_text text-center">
                    {packagesData.kitegearHeading}
                  </h2>
                  <p className="text-center surf_para fs-5">
                    {packagesData.kitegearPara1}
                  </p>
                  <p className="text-center">
                    {packagesData.kitegearPara2}
                  </p>
                </div>

                {/* second div  */}
                <div>
                  <h2 className="text-center surf_text mt-5 pt-5">
                    {packagesData.disclaimerHeading}
                  </h2>
                  <p className="text-center surf_para fs-5">
                    {packagesData.disclaimerPara1}
                  </p>
                  <p className="text-center surf_para fs-6">
                    {packagesData.disclaimerPara2}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row logocard_container">
              {packagesData.levelData[activeTab]?.logo_img?.map((item, index) => (
                <div className="col-md-3" key={index}>
                  <div className="logo_img_container">
                    <img src={item.img} alt="lifestyle" className="logo_img" />
                  </div>
                  <p className="text-center p-3 fs-6">
                    <b>{item.title}</b>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Packages;
