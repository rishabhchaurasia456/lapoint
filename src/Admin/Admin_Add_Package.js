import axios from 'axios';
import React, { useState } from 'react';
import config from '../config/config';

const Admin_Add_Package = () => {
  const [formData, setFormData] = useState({
    tripName: '',
    levelData: [
      {
        levelName: '',
        desc: '',
        img1: null,
        text1: '',
        para1: '',
        img2: null,
        text2: '',
        para2: '',
        accomodationTitle: '',
        accomodationData: [{ title: '', para: '' }],
        faqTitle: '',
        faqData: [{ title: '', para: '' }],
        logoimg1: null,
        logotext1: '',
        logoimg2: null,
        logotext2: '',
        logoimg3: null,
        logotext3: '',
        logoimg4: null,
        logotext4: '',
      },
    ],
    kitegearHeading: '',
    kitegearPara1: '',
    kitegearPara2: '',
    disclaimerHeading: '',
    disclaimerPara1: '',
    disclaimerPara2: '',
  });

  const handleInputChange = (e, field, levelIndex = null, subfield = null) => {
    if (levelIndex !== null && subfield) {
      const updatedLevels = [...formData.levelData];
      updatedLevels[levelIndex][subfield] =
        e.target.type === 'file' ? e.target.files[0] : e.target.value;
      setFormData({ ...formData, levelData: updatedLevels });
    } else {
      setFormData({
        ...formData,
        [field]: e.target.type === 'file' ? e.target.files[0] : e.target.value,
      });
    }
  };

  const handleAddLevel = () => {
    setFormData({
      ...formData,
      levelData: [
        ...formData.levelData,
        {
          levelName: '',
          desc: '',
          img1: null,
          text1: '',
          para1: '',
          img2: null,
          text2: '',
          para2: '',
          accomodationTitle: '',
          accomodationData: [{ title: '', para: '' }],
          faqTitle: '',
          faqData: [{ title: '', para: '' }],
          logoimg1: null,
          logotext1: '',
          logoimg2: null,
          logotext2: '',
          logoimg3: null,
          logotext3: '',
          logoimg4: null,
          logotext4: '',
        },
      ],
    });
  };

  const handleRemoveLevel = (index) => {
    const updatedLevels = [...formData.levelData];
    updatedLevels.splice(index, 1);
    setFormData({ ...formData, levelData: updatedLevels });
  };

  const handleAddAccomodation = (levelIndex) => {
    const updatedLevels = [...formData.levelData];
    updatedLevels[levelIndex].accomodationData.push({ title: '', para: '' });
    setFormData({ ...formData, levelData: updatedLevels });
  };

  const handleRemoveAccomodation = (levelIndex, accIndex) => {
    const updatedLevels = [...formData.levelData];
    updatedLevels[levelIndex].accomodationData.splice(accIndex, 1);
    setFormData({ ...formData, levelData: updatedLevels });
  };

  const handleAddFaq = (levelIndex) => {
    const updatedLevels = [...formData.levelData];
    updatedLevels[levelIndex].faqData.push({ title: '', para: '' });
    setFormData({ ...formData, levelData: updatedLevels });
  };

  const handleRemoveFaq = (levelIndex, faqIndex) => {
    const updatedLevels = [...formData.levelData];
    updatedLevels[levelIndex].faqData.splice(faqIndex, 1);
    setFormData({ ...formData, levelData: updatedLevels });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
  
    // Populate formDataToSend with the data
    Object.keys(formData).forEach((key) => {
      if (Array.isArray(formData[key])) {
        formData[key].forEach((item, index) => {
          Object.keys(item).forEach((subKey) => {
            if (item[subKey] instanceof File) {
              // Append file objects directly
              formDataToSend.append(`${key}[${index}][${subKey}]`, item[subKey]);
            } else if (typeof item[subKey] === "object") {
              // Stringify nested objects/arrays
              formDataToSend.append(`${key}[${index}][${subKey}]`, JSON.stringify(item[subKey]));
            } else {
              formDataToSend.append(`${key}[${index}][${subKey}]`, item[subKey]);
            }
          });
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });
  
    try {
      const response = await axios.post(`${config.API_BASE_URL}/api/admin/create_package`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.data.success) {
        console.log('Form submitted successfully:', response.data);
        alert('Data submitted successfully!');
      } else {
        console.error('Submission failed:', response.data.message);
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };
  
  return (
    <div className="container mt-4">
      <h2>Add Package</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="tripName" className="form-label">
            Trip Name
          </label>
          <input
            type="text"
            className="form-control"
            id="tripName"
            value={formData.tripName}
            onChange={(e) => handleInputChange(e, 'tripName')}
            required
          />
        </div>

        {formData.levelData.map((level, index) => (
          <div key={index} className="border p-3 mb-3">
            <h5>Level {index + 1}</h5>

            <div className="mb-3">
              <label htmlFor={`levelName-${index}`} className="form-label">
                Level Name
              </label>
              <input
                type="text"
                className="form-control"
                id={`levelName-${index}`}
                value={level.levelName}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'levelName')}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`desc-${index}`} className="form-label">
                Description
              </label>
              <textarea
                className="form-control"
                id={`desc-${index}`}
                value={level.desc}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'desc')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`img1-${index}`} className="form-label">
                Image1
              </label>
              <input
                type="file"
                className="form-control"
                id={`img1-${index}`}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'img1')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`text1-${index}`} className="form-label">
                Text1
              </label>
              <input
                type="text1"
                className="form-control"
                id={`text1-${index}`}
                value={level.text1}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'text1')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`para1-${index}`} className="form-label">
                Paragraph1
              </label>
              <textarea
                className="form-control"
                id={`para1-${index}`}
                value={level.para1}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'para1')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`img2-${index}`} className="form-label">
                Image2
              </label>
              <input
                type="file"
                className="form-control"
                id={`img2-${index}`}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'img2')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`text2-${index}`} className="form-label">
                Text2
              </label>
              <input
                type="text2"
                className="form-control"
                id={`text2-${index}`}
                value={level.text2}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'text2')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`para2-${index}`} className="form-label">
                Paragraph2
              </label>
              <textarea
                className="form-control"
                id={`para2-${index}`}
                value={level.para2}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'para2')}
              />
            </div>

            <div className="mb-3">
              <label htmlFor={`accomodationTitle-${index}`} className="form-label">
                Accommodation Title
              </label>
              <input
                type="text"
                className="form-control"
                id={`accomodationTitle-${index}`}
                value={level.accomodationTitle}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'accomodationTitle')}
              />
            </div>

            {level.accomodationData.map((acc, accIndex) => (
              <div key={accIndex} className="mb-3">
                <label htmlFor={`accomodationDataTitle-${index}-${accIndex}`} className="form-label">
                  Accommodation Data Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`accomodationDataTitle-${index}-${accIndex}`}
                  value={acc.title}
                  onChange={(e) => {
                    const updatedLevels = [...formData.levelData];
                    updatedLevels[index].accomodationData[accIndex].title = e.target.value;
                    setFormData({ ...formData, levelData: updatedLevels });
                  }}
                />

                <label htmlFor={`accomodationDataPara-${index}-${accIndex}`} className="form-label">
                  Accommodation Data Paragraph
                </label>
                <textarea
                  className="form-control"
                  id={`accomodationDataPara-${index}-${accIndex}`}
                  value={acc.para}
                  onChange={(e) => {
                    const updatedLevels = [...formData.levelData];
                    updatedLevels[index].accomodationData[accIndex].para = e.target.value;
                    setFormData({ ...formData, levelData: updatedLevels });
                  }}
                />

                <button
                  type="button"
                  className="btn btn-danger mt-2"
                  onClick={() => handleRemoveAccomodation(index, accIndex)}
                >
                  Remove Accommodation
                </button>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={() => handleAddAccomodation(index)}
            >
              Add Accommodation
            </button>

            <div className="mb-3">
              <label htmlFor={`faqTitle-${index}`} className="form-label">
                FAQ Title
              </label>
              <input
                type="text"
                className="form-control"
                id={`faqTitle-${index}`}
                value={level.faqTitle}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'faqTitle')}
              />
            </div>

            {level.faqData.map((faq, faqIndex) => (
              <div key={faqIndex} className="mb-3">
                <label htmlFor={`faqDataTitle-${index}-${faqIndex}`} className="form-label">
                  FAQ Data Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id={`faqDataTitle-${index}-${faqIndex}`}
                  value={faq.title}
                  onChange={(e) => {
                    const updatedLevels = [...formData.levelData];
                    updatedLevels[index].faqData[faqIndex].title = e.target.value;
                    setFormData({ ...formData, levelData: updatedLevels });
                  }}
                />

                <label htmlFor={`faqDataPara-${index}-${faqIndex}`} className="form-label">
                  FAQ Data Paragraph
                </label>
                <textarea
                  className="form-control"
                  id={`faqDataPara-${index}-${faqIndex}`}
                  value={faq.para}
                  onChange={(e) => {
                    const updatedLevels = [...formData.levelData];
                    updatedLevels[index].faqData[faqIndex].para = e.target.value;
                    setFormData({ ...formData, levelData: updatedLevels });
                  }}
                />

                <button
                  type="button"
                  className="btn btn-danger mt-2"
                  onClick={() => handleRemoveFaq(index, faqIndex)}
                >
                  Remove FAQ
                </button>
              </div>
            ))}

            <button
              type="button"
              className="btn btn-secondary mb-3"
              onClick={() => handleAddFaq(index)}
            >
              Add FAQ
            </button>

            <div className="mb-3">
              <label htmlFor={`logoimg1-${index}`} className="form-label">
                Logo Image 1
              </label>
              <input
                type="file"
                className="form-control"
                id={`logoimg1-${index}`}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'logoimg1')}
              />
              <label htmlFor={`logotext1-${index}`} className="form-label mt-2">
                Logo Text 1
              </label>
              <input
                type="text"
                className="form-control"
                id={`logotext1-${index}`}
                value={level.logotext1}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'logotext1')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`logoimg2-${index}`} className="form-label">
                Logo Image 2
              </label>
              <input
                type="file"
                className="form-control"
                id={`logoimg2-${index}`}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'logoimg2')}
              />
              <label htmlFor={`logotext2-${index}`} className="form-label mt-2">
                Logo Text 2
              </label>
              <input
                type="text"
                className="form-control"
                id={`logotext2-${index}`}
                value={level.logotext2}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'logotext2')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`logoimg3-${index}`} className="form-label">
                Logo Image 3
              </label>
              <input
                type="file"
                className="form-control"
                id={`logoimg3-${index}`}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'logoimg3')}
              />
              <label htmlFor={`logotext3-${index}`} className="form-label mt-2">
                Logo Text 3
              </label>
              <input
                type="text"
                className="form-control"
                id={`logotext3-${index}`}
                value={level.logotext3}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'logotext3')}
              />
            </div>
            <div className="mb-3">
              <label htmlFor={`logoimg4-${index}`} className="form-label">
                Logo Image 4
              </label>
              <input
                type="file"
                className="form-control"
                id={`logoimg4-${index}`}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'logoimg4')}
              />
              <label htmlFor={`logotext4-${index}`} className="form-label mt-2">
                Logo Text 4
              </label>
              <input
                type="text"
                className="form-control"
                id={`logotext4-${index}`}
                value={level.logotext4}
                onChange={(e) => handleInputChange(e, 'levelData', index, 'logotext4')}
              />
            </div>

            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleRemoveLevel(index)}
            >
              Remove Level
            </button>
          </div>
        ))}

        <div className="mb-3">
          <label htmlFor="kitegearHeading" className="form-label">
            Kitegear Heading
          </label>
          <input
            type="text"
            className="form-control"
            id="kitegearHeading"
            value={formData.kitegearHeading}
            onChange={(e) => handleInputChange(e, 'kitegearHeading')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kitegearPara1" className="form-label">
            Kitegear Paragraph 1
          </label>
          <textarea
            className="form-control"
            id="kitegearPara1"
            value={formData.kitegearPara1}
            onChange={(e) => handleInputChange(e, 'kitegearPara1')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="kitegearPara2" className="form-label">
            Kitegear Paragraph 2
          </label>
          <textarea
            className="form-control"
            id="kitegearPara2"
            value={formData.kitegearPara2}
            onChange={(e) => handleInputChange(e, 'kitegearPara2')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="disclaimerHeading" className="form-label">
            Disclaimer Heading
          </label>
          <input
            type="text"
            className="form-control"
            id="disclaimerHeading"
            value={formData.disclaimerHeading}
            onChange={(e) => handleInputChange(e, 'disclaimerHeading')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="disclaimerPara1" className="form-label">
            Disclaimer Paragraph 1
          </label>
          <textarea
            className="form-control"
            id="disclaimerPara1"
            value={formData.disclaimerPara1}
            onChange={(e) => handleInputChange(e, 'disclaimerPara1')}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="disclaimerPara2" className="form-label">
            Disclaimer Paragraph 2
          </label>
          <textarea
            className="form-control"
            id="disclaimerPara2"
            value={formData.disclaimerPara2}
            onChange={(e) => handleInputChange(e, 'disclaimerPara2')}
          />
        </div>

        <button type="button" className="btn btn-secondary mb-3" onClick={handleAddLevel}>
          Add Level
        </button>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Admin_Add_Package;
