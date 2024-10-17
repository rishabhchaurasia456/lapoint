import React, { useState } from 'react';

const Packages = ({packagesData, selectedLanguage}) => {
  const [activeTab, setActiveTab] = useState(0); // Use 0 as the default index

  return (
    <>
      <div className="container">
        <div className="text-center mb-2 my-3">
          {packagesData.levelsData.map((level, index) => (
            <button
              className="package_btn"
              key={index}
              onClick={() => setActiveTab(index)} // Use onClick to update the activeTab
            >
              <p>{level.levelName}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="output-container">
          <div className="row">
            <p className='level_desc'>{packagesData.levelsData[activeTab]?.desc[selectedLanguage]}</p> {/* Access the correct index */}
          </div>
          <div className='container mt-5'>
            {packagesData.levelsData[activeTab]?.imgsect.map((item, index) => (
              <div className='row mt-5' key={index}>
                {item.imgPosition === 'left' && (
                  <div className='col-md-6'>
                    <div className='lifestyle_div'>
                      <img src={item.imgSrc} className='lifestyle' alt="lifestyle" />
                    </div>
                  </div>
                )}
                <div className='col-md-6'>
                  <div className="life_style_div">
                    <p className='lifestyle_package_text'>{item.text[selectedLanguage]}</p>
                    <div className="lifestyle_package_para">
                      <p>{item.para[selectedLanguage]}</p>
                    </div>
                  </div>
                </div>
                {item.imgPosition === 'right' && (
                  <div className='col-md-6'>
                    <div className='lifestyle_div'>
                      <img src={item.imgSrc} className='lifestyle' alt="lifestyle" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="container-fluid">
            <div className="row">
              <p className='sum2_heading'>{packagesData.levelsData[activeTab]?.acordation_head[selectedLanguage]}</p>
            </div>
            <div className="row sum2_container">
              {packagesData.levelsData[activeTab]?.acordation_data.map((item, index) => (
                <div className="col-md-4" key={index}>
                  <details>
                    <summary className='sum2'>{item.title[selectedLanguage]}</summary>
                    <div className="sum2__content fs-5 mb-2">
                      <p>{item.info[selectedLanguage]}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <p className='p_faq_heading'>{packagesData.levelsData[activeTab]?.faq_head[selectedLanguage]}</p>
            </div>
            <div className="row p_faq_container">
              {packagesData.levelsData[activeTab]?.faq_data.map((item, index) => (
                <details key={index}>
                  <summary className='p_faq'>{item.title[selectedLanguage]}</summary>
                  <div className="p_faq__content fs-5 mb-2">
                    <p>{item.info[selectedLanguage]}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>

          
           <div className='container-fluid'>
             <div className="row">
               <div className="col">
                 <div>
                   <h2 className='text-center'>{packagesData.Kitegear_rental.title[selectedLanguage]}</h2>
                   <p className='text-center'>{packagesData.Kitegear_rental.para1[selectedLanguage]}</p>
                   <p className='text-center'>{packagesData.Kitegear_rental.para2[selectedLanguage]}</p>
                 </div>
                 <div>
                   <h2 className='text-center'>{packagesData.Disclaimer.title[selectedLanguage]}</h2>
                   <p className='text-center'>{packagesData.Disclaimer.para1[selectedLanguage]}</p>
                   <p className='text-center'>{packagesData.Disclaimer.para2[selectedLanguage]}</p>
                 </div>
               </div>
             </div>
           </div>

          <div className="container-fluid">
            <div className="row logocard_container">
              {packagesData.levelsData[activeTab].logo_img.map((item, index) => (
                <div className="col-md-3">
                  <div className='logo_img_contaienr'>
                    <img src={item.img} alt="lifestyle" className='logo_img' />
                  </div>
                  <p className='text-center p-3 fs-6'><b>{item.title[selectedLanguage]}</b></p>
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