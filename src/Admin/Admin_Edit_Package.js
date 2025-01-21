// Frontend Component: Admin_Edit_Package
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const Admin_Edit_Package = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        const fetchPackage = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_package/${id}`);
                const data = response.data;

                if (!data.levelData) data.levelData = [];
                data.levelData.forEach(level => {
                    if (!level.accomodationData) level.accomodationData = [];
                    if (!level.faqData) level.faqData = [];
                });

                setFormData(data);
            } catch (error) {
                console.error('Error fetching package details:', error);
            }
        };
        fetchPackage();
    }, [id]);


    // const handleInputChange = (e, field, levelIndex = null, subfield = null, subIndex = null) => {
    //     const value = e.target.value;
    //     setFormData(prevFormData => {
    //         const updatedData = { ...prevFormData };
    //         if (levelIndex !== null) {
    //             if (subfield) {
    //                 if (subIndex !== null) {
    //                     updatedData.levelData[levelIndex][field][subIndex][subfield] = value;
    //                 } else {
    //                     updatedData.levelData[levelIndex][subfield] = value;
    //                 }
    //             } else {
    //                 updatedData.levelData[levelIndex][field] = value;
    //             }
    //         } else {
    //             updatedData[field] = value;
    //         }
    //         return updatedData;
    //     });
    // };

    // const handleImageChange = (e, field, levelIndex = null) => {
    //     setFormData(prevFormData => {
    //         const updatedData = { ...prevFormData };
    //         if (levelIndex !== null) {
    //             if(e.target.files && e.target.files[0]){
    //                 updatedData.levelData[levelIndex][field] = e.target.files[0];
    //             }else{
    //                 updatedData.levelData[levelIndex][field] = prevFormData.levelData[levelIndex][field];
    //             }
    //         } else {
    //             if(e.target.files && e.target.files[0]){
    //                 updatedData[field] = e.target.files[0];
    //             }else{
    //                 updatedData[field] = prevFormData[field];
    //             }
    //         }
    //         return updatedData;
    //     });
    // };


    const handleInputChange = (e, field, levelIndex = null, subfield = null) => {
        setFormData(prevFormData => {
            const updatedFormData = { ...prevFormData };

            if (levelIndex !== null) {
                // Updating fields within levelData
                updatedFormData.levelData = updatedFormData.levelData.map((level, index) => {
                    if (index === levelIndex) {
                        if (subfield) {
                            // Updating nested fields (like in accomodationData or faqData)
                            return { ...level, [subfield]: e.target.value };
                        } else {
                            // Updating direct level fields (levelName, desc, text1, etc.)
                            return { ...level, [field]: e.target.value };
                        }
                    }
                    return level;
                });
            } else {
                // Updating top-level fields (tripName, etc.)
                updatedFormData[field] = e.target.value;
            }

            return updatedFormData;
        });
    };


    // const handleImageChange = (e, field, levelIndex = null) => {
    //     setFormData(prevFormData => {
    //         const updatedFormData = { ...prevFormData };
    //         if (levelIndex !== null) {
    //             updatedFormData.levelData = updatedFormData.levelData.map((level, index) => {
    //                 if (index === levelIndex) {
    //                     return { ...level, [field]: e.target.files[0] || level[field] };
    //                 }
    //                 return level;
    //             });
    //         } else {
    //             updatedFormData[field] = e.target.files[0] || updatedFormData[field];
    //         }
    //         return updatedFormData;
    //     });
    // };

    const handleImageChange = (e, field, levelIndex) => {
        setFormData(prevFormData => {
            const updatedFormData = { ...prevFormData };
            updatedFormData.levelData = updatedFormData.levelData.map((level, index) => {
                if (index === levelIndex) {
                    return { ...level, [field]: e.target.files[0] };
                }
                return level;
            });
            return updatedFormData;
        });
    };





    const handleAddLevel = () => {
        const updatedData = { ...formData };
        updatedData.levelData.push({
            levelName: '',
            img1: '',
            img2: '',
            text1: '',
            para1: '',
            text2: '',
            para2: '',
            accomodationData: [],
            faqData: []
        });
        setFormData(updatedData);
    };

    const handleRemoveLevel = (index) => {
        const updatedData = { ...formData };
        updatedData.levelData.splice(index, 1);
        setFormData(updatedData);
    };

    const handleAddAccommodation = (levelIndex) => {
        const updatedData = { ...formData };
        updatedData.levelData[levelIndex].accomodationData.push({ title: '', para: '' });
        setFormData(updatedData);
    };

    const handleRemoveAccommodation = (levelIndex, accIndex) => {
        const updatedData = { ...formData };
        updatedData.levelData[levelIndex].accomodationData.splice(accIndex, 1);
        setFormData(updatedData);
    };

    const handleAddFaq = (levelIndex) => {
        const updatedData = { ...formData };
        updatedData.levelData[levelIndex].faqData.push({ title: '', para: '' });
        setFormData(updatedData);
    };

    const handleRemoveFaq = (levelIndex, faqIndex) => {
        const updatedData = { ...formData };
        updatedData.levelData[levelIndex].faqData.splice(faqIndex, 1);
        setFormData(updatedData);
    };

    const validateFormData = (formData) => {
        for (let i = 0; i < formData.levelData.length; i++) {
            const level = formData.levelData[i];
            if (!level.img1) {
                console.error(`Invalid img1 at levelData[${i}]: img1 is missing.`);
                return false;
            }

            // Check if img1 is a File object (if uploaded in the frontend)
            if (typeof level.img1 !== 'string' && !(level.img1 instanceof File)) {
                console.error(`Invalid img1 at levelData[${i}]: img1 must be a string or File.`);
                return false;
            }
        }
        return true;
    };



    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setSuccess(null);

    //     const formDataToSend = new FormData();
    //     for (const key in formData) {
    //         if (key === 'levelData') {
    //         formDataToSend.append(key, JSON.stringify(formData[key]));
    //         } else if (formData[key] instanceof File) {
    //         formDataToSend.append(key, formData[key]); // Append image files
    //         } else if (typeof formData[key] === 'string' || typeof formData[key] === 'number') {
    //         formDataToSend.append(key, formData[key]);
    //         }
    //     }

    //     try {
    //         const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_package/${id}`, formDataToSend, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         setSuccess('Package updated successfully!');
    //         navigate('/admin/packages');
    //     } catch (error) {
    //         console.error('Error updating package:', error);
    //         setSuccess('Error updating package.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setLoading(true);
    //     setSuccess(null);

    //     const formDataToSend = new FormData();

    //     for (const key in formData) {
    //         if (key === 'levelData') {
    //             formDataToSend.append(key, JSON.stringify(formData[key]));
    //         } else if (formData[key] instanceof File) {
    //             formDataToSend.append(key, formData[key], formData[key].name); // Add filename here
    //         } else {
    //             formDataToSend.append(key, formData[key]);
    //         }
    //     }

    //     try {
    //         const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_package/${id}`, formDataToSend, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data',
    //             },
    //         });
    //         setSuccess('Package updated successfully!');
    //         navigate('/admin/packages');
    //     } catch (error) {
    //         console.error('Error updating package:', error);
    //         setSuccess('Error updating package.');
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess(null);

        const formDataToSend = new FormData();

        // for (const key in formData) {
        //     if (key === 'levelData') {
        //         formData.levelData.forEach((level, levelIndex) => {
        //             for (const levelKey in level) {
        //                 if (level[levelKey] instanceof File) {
        //                     formDataToSend.append(`levelData[${levelIndex}][${levelKey}]`, level[levelKey], level[levelKey].name);
        //                 } else {
        //                     formDataToSend.append(`levelData[${levelIndex}][${levelKey}]`, level[levelKey]);
        //                 }
        //             }
        //         });
        //     } else {
        //         formDataToSend.append(key, formData[key]);
        //     }
        // }

        for (const key in formData) {
            if (key === 'levelData') {
                formData.levelData.forEach((level, levelIndex) => {
                    for (const levelKey in level) {
                        if (levelKey === 'accomodationData' || levelKey === 'faqData') {
                            // Stringify the nested arrays
                            formDataToSend.append(`levelData[${levelIndex}][${levelKey}]`, JSON.stringify(level[levelKey]));
                        } else if (level[levelKey] instanceof File) {
                            formDataToSend.append(`levelData[${levelIndex}][${levelKey}]`, level[levelKey], level[levelKey].name);
                        } else {
                            formDataToSend.append(`levelData[${levelIndex}][${levelKey}]`, level[levelKey]);
                        }
                    }
                });
            } else {
                formDataToSend.append(key, formData[key]);
            }
        }

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_package/${id}`, formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setSuccess('Package updated successfully!');
            navigate('/admin/packages');
        } catch (error) {
            console.error('Error updating package:', error);
            setSuccess('Error updating package.');
        } finally {
            setLoading(false);
        }
    };



    if (!formData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-4">
            <h2>Edit Package</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="tripName" className="form-label">Trip Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tripName"
                        value={formData.tripName || ''}
                        onChange={(e) => handleInputChange(e, 'tripName')}
                        required
                    />
                </div>

                {formData.levelData.map((level, levelIndex) => (
                    <div key={levelIndex} className="border p-3 mb-3">
                        <h5>Level {levelIndex + 1}</h5>

                        {/* <button type="button" className="btn btn-danger mb-3" onClick={() => removeLevel(levelIndex)}>
                            Remove Level
                        </button> */}

                        <div className="mb-3">
                            <label htmlFor={`levelName-${levelIndex}`} className="form-label">Level Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`levelName-${levelIndex}`}
                                value={level.levelName || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'levelName')}
                                required
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-3">
                            <label htmlFor={`levelDesc-${levelIndex}`} className="form-label">Description</label>
                            <textarea
                                className="form-control"
                                id={`levelDesc-${levelIndex}`}
                                rows="3"
                                value={level.desc || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'desc')}
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image 1</label>
                            <input type="file" className="form-control" onChange={(e) => handleImageChange(e, 'img1', levelIndex)} />
                            {level.img1 && (
                                <img
                                    src={level.img1 instanceof File ? URL.createObjectURL(level.img1) : `${config.API_BASE_URL}/${level.img1}`}
                                    alt={`Level ${levelIndex} Image 1`}
                                    style={{ width: '200px', marginTop: '10px' }}
                                />
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`text1-${levelIndex}`} className="form-label">Text1</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`text1-${levelIndex}`}
                                value={level.text1 || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'text1')}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`para1-${levelIndex}`} className="form-label">Para1</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`para1-${levelIndex}`}
                                value={level.para1 || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'para1')}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Image 2</label>
                            <input type="file" className="form-control" onChange={(e) => handleImageChange(e, 'img2', levelIndex)} />
                            {level.img2 && (
                                <img
                                    src={level.img2 instanceof File ? URL.createObjectURL(level.img2) : `${config.API_BASE_URL}/${level.img2}`}
                                    alt={`Level ${levelIndex} Image 2`}
                                    style={{ width: '200px', marginTop: '10px' }}
                                />
                            )}
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`text2-${levelIndex}`} className="form-label">Text2</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`text2-${levelIndex}`}
                                value={level.text2 || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'text2')}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor={`para2-${levelIndex}`} className="form-label">Para2</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`para2-${levelIndex}`}
                                value={level.para2 || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'para2')}
                                required
                            />
                        </div>



                        <div className="mb-3">
                            <label htmlFor={`levelaccomodationTitle-${levelIndex}`} className="form-label">Accomodation Title</label>
                            <input
                                type='text'
                                className="form-control"
                                id={`levelaccomodationTitle-${levelIndex}`}
                                rows="3"
                                value={level.accomodationTitle || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'accomodationTitle')}
                            />
                        </div>
                        {level.accomodationData.map((acc, accIndex) => (
                            <div key={accIndex} className="mb-3">
                                <label htmlFor={`accTitle-${levelIndex}-${accIndex}`} className="form-label">Accommodation Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`accTitle-${levelIndex}-${accIndex}`}
                                    value={acc.title || ''}
                                    onChange={(e) => {
                                        const updatedLevels = [...formData.levelData];
                                        updatedLevels[levelIndex].accomodationData[accIndex].title = e.target.value;
                                        setFormData({ ...formData, levelData: updatedLevels });
                                    }}
                                />
                                <textarea
                                    className="form-control"
                                    id={`accPara-${levelIndex}-${accIndex}`}
                                    rows="2"
                                    value={acc.para || ''}
                                    onChange={(e) => {
                                        const updatedLevels = [...formData.levelData];
                                        updatedLevels[levelIndex].accomodationData[accIndex].para = e.target.value;
                                        setFormData({ ...formData, levelData: updatedLevels });
                                    }}
                                ></textarea>
                                <button type="button" className="btn btn-danger" onClick={() => handleRemoveAccommodation(levelIndex, accIndex)}>
                                    Remove Accommodation
                                </button>
                            </div>
                        ))}

                        <button type="button" className="btn btn-success mb-3" onClick={() => handleAddAccommodation(levelIndex)}>
                            Add Accommodation
                        </button>

                        <div className="mb-3">
                            <label htmlFor={`levelfaqTitle-${levelIndex}`} className="form-label">Faq Title</label>
                            <input
                                type='text'
                                className="form-control"
                                id={`levelfaqTitle-${levelIndex}`}
                                rows="3"
                                value={level.faqTitle || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'faqTitle')}
                            />
                        </div>
                        {level.faqData.map((faq, faqIndex) => (
                            <div key={faqIndex} className="mb-3">
                                <label htmlFor={`faqTitle-${levelIndex}-${faqIndex}`} className="form-label">FAQ Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id={`faqTitle-${levelIndex}-${faqIndex}`}
                                    value={faq.title || ''}
                                    onChange={(e) => {
                                        const updatedLevels = [...formData.levelData];
                                        updatedLevels[levelIndex].faqData[faqIndex].title = e.target.value;
                                        setFormData({ ...formData, levelData: updatedLevels });
                                    }}
                                />
                                <textarea
                                    className="form-control"
                                    id={`faqPara-${levelIndex}-${faqIndex}`}
                                    rows="2"
                                    value={faq.para || ''}
                                    onChange={(e) => {
                                        const updatedLevels = [...formData.levelData];
                                        updatedLevels[levelIndex].faqData[faqIndex].para = e.target.value;
                                        setFormData({ ...formData, levelData: updatedLevels });
                                    }}
                                ></textarea>
                                <button type="button" className="btn btn-danger" onClick={() => handleRemoveFaq(levelIndex, faqIndex)}>
                                    Remove FAQ
                                </button>
                            </div>
                        ))}

                        <button type="button" className="btn btn-success mb-3" onClick={() => handleAddFaq(levelIndex)}>
                            Add FAQ
                        </button>

                        <div className="mb-3">
                            <div className="mb-3">
                                <label className="form-label">Logo Image 1</label>
                                <input type="file" className="form-control" onChange={(e) => handleImageChange(e, 'logoimg1', levelIndex)} />
                                {level.logoimg1 && (
                                    <img
                                        src={level.logoimg1 instanceof File ? URL.createObjectURL(level.logoimg1) : `${config.API_BASE_URL}/${level.logoimg1}`}
                                        alt={`Logo Image 1`}
                                        style={{ width: '200px', marginTop: '10px' }}
                                    />
                                )}
                            </div>
                            <label htmlFor={`logotext1-${levelIndex}`} className="form-label">Logo Text1</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`logotext1-${levelIndex}`}
                                value={level.logotext1 || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'logotext1')}
                                required
                            />
                        </div>
                        <div className="mb-3">

                            <div className="mb-3">
                                <label className="form-label">Logo Image 2</label>
                                <input type="file" className="form-control" onChange={(e) => handleImageChange(e, 'logoimg2', levelIndex)} />
                                {level.logoimg2 && (
                                    <img
                                        src={level.logoimg2 instanceof File ? URL.createObjectURL(level.logoimg2) : `${config.API_BASE_URL}/${level.logoimg2}`}
                                        alt={`Logo Image 2`}
                                        style={{ width: '200px', marginTop: '10px' }}
                                    />
                                )}
                            </div>
                            <label htmlFor={`logotext2-${levelIndex}`} className="form-label">Logo Text2</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`logotext2-${levelIndex}`}
                                value={level.logotext2 || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'logotext2')}
                                required
                            />
                        </div>
                        <div className="mb-3">

                            <div className="mb-3">
                                <label className="form-label">Logo Image 3</label>
                                <input type="file" className="form-control" onChange={(e) => handleImageChange(e, 'logoimg3', levelIndex)} />
                                {level.logoimg3 && (
                                    <img
                                        src={level.logoimg3 instanceof File ? URL.createObjectURL(level.logoimg3) : `${config.API_BASE_URL}/${level.logoimg3}`}
                                        alt={`Logo Image 3`}
                                        style={{ width: '200px', marginTop: '10px' }}
                                    />
                                )}
                            </div>

                            <label htmlFor={`logotext3-${levelIndex}`} className="form-label">Logo Text3</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`logotext3-${levelIndex}`}
                                value={level.logotext3 || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'logotext3')}
                                required
                            />
                        </div>
                        <div className="mb-3">

                            <div className="mb-3">
                                <label className="form-label">Logo Image 4</label>
                                <input type="file" className="form-control" onChange={(e) => handleImageChange(e, 'logoimg4', levelIndex)} />
                                {level.logoimg4 && (
                                    <img
                                        src={level.logoimg4 instanceof File ? URL.createObjectURL(level.logoimg4) : `${config.API_BASE_URL}/${level.logoimg4}`}
                                        alt={`Logo Image 4`}
                                        style={{ width: '200px', marginTop: '10px' }}
                                    />
                                )}
                            </div>
                            <label htmlFor={`logotext4-${levelIndex}`} className="form-label">Logo Text4</label>
                            <input
                                type="text"
                                className="form-control"
                                id={`logotext4-${levelIndex}`}
                                value={level.logotext4 || ''}
                                onChange={(e) => handleInputChange(e, 'levelData', levelIndex, 'logotext4')}
                                required
                            />
                        </div>
                    </div>

                ))}

                {/* <button type="button" className="btn btn-primary mb-3" onClick={handleAddLevel}>
                    Add Level
                </button> */}

                {/* Kitegear Heading */}
                <div className="mb-3">
                    <label htmlFor="kitegearHeading" className="form-label">Kitegear Heading</label>
                    <input
                        type="text"
                        className="form-control"
                        id="kitegearHeading"
                        value={formData.kitegearHeading || ''}
                        onChange={(e) => handleInputChange(e, 'kitegearHeading')}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="KitegearPara1" className="form-label">Kitegear Paragraph 1</label>
                    <textarea
                        className="form-control"
                        id="kitegearPara1"
                        rows="2"
                        value={formData.kitegearPara1 || ''}
                        onChange={(e) => handleInputChange(e, 'kitegearPara1')}
                    ></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="KitegearPara2" className="form-label">Kitegear Paragraph 2</label>
                    <textarea
                        className="form-control"
                        id="kitegearPara2"
                        rows="2"
                        value={formData.kitegearPara2 || ''}
                        onChange={(e) => handleInputChange(e, 'kitegearPara2')}
                    ></textarea>
                </div>

                {/* Disclaimer */}
                <div className="mb-3">
                    <label htmlFor="disclaimerHeading" className="form-label">Disclaimer Heading</label>
                    <input
                        type="text"
                        className="form-control"
                        id="disclaimerHeading"
                        value={formData.disclaimerHeading || ''}
                        onChange={(e) => handleInputChange(e, 'disclaimerHeading')}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="disclaimerPara1" className="form-label">Disclaimer Paragraph 1</label>
                    <textarea
                        className="form-control"
                        id="disclaimerPara1"
                        rows="2"
                        value={formData.disclaimerPara1 || ''}
                        onChange={(e) => handleInputChange(e, 'disclaimerPara1')}
                    ></textarea>
                </div>

                <div className="mb-3">
                    <label htmlFor="disclaimerPara2" className="form-label">Disclaimer Paragraph 2</label>
                    <textarea
                        className="form-control"
                        id="disclaimerPara2"
                        rows="2"
                        value={formData.disclaimerPara2 || ''}
                        onChange={(e) => handleInputChange(e, 'disclaimerPara2')}
                    ></textarea>
                </div>
                {success && <div className="alert alert-success">{success}</div>}
                {loading ? (
                    <button type="submit" className="btn btn-primary" disabled>Loading...</button>
                ) : (
                    <button type="submit" className="btn btn-primary">Save Changes</button>
                )}
            </form>
        </div>
    );

};

export default Admin_Edit_Package;