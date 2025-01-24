import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config/config";

const Admin_Home = () => {
    const [homeData, setHomeData] = useState({
        text1: "",
        text2: "",
        text3: "",
        text4: "",
        sliderSubHeading: "",
        sliderHeading: "",
        whySectionHeading: "",
        whypara1: "",
        whypara2: "",
        whypara3: "",
        whypara4: "",
        kiteforlifesecHeading: "",
        kiteforlifesecPara: "",
        levelHeading: "",
        levelSubHeading: "",
        leveltitle1: "",
        levelpara1: "",
        leveltitle2: "",
        levelpara2: "",
        leveltitle3: "",
        levelpara3: "",
        leveltitle4: "",
        levelpara4: "",
        diggimgHeading: "",
        diggimgpara: "",
        teamimg: "",
        teamSubHeading: "",
        teamHeading: "",
        teamPara: "",
        img1: "",
        img2: "",
        img3: "",
        img4: "",
        levelimg1: "",
        levelimg2: "",
        levelimg3: "",
        levelimg4: "",
        whySectionImg: "",
        whyimg1: "",
        whyimg2: "",
        whyimg3: "",
        whyimg4: "",
    });

    useEffect(() => {
        axios
            .post(`${config.API_BASE_URL}/api/admin/get_home`)
            .then((response) => {
                setHomeData(response.data);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setHomeData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files && files[0]) {
            setHomeData((prevData) => ({
                ...prevData,
                [name]: files[0],
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();

        Object.keys(homeData).forEach((key) => {
            if (homeData[key] instanceof File) {
                // Handle file inputs
                formData.append(key, homeData[key]);
            } else {
                // Handle text inputs
                formData.append(key, homeData[key]);
            }
        });

        axios
            .post(`${config.API_BASE_URL}/api/admin/update_home`, formData)
            .then((response) => {
                alert("Homepage data updated successfully");
            })
            .catch((err) => {
                alert("Error updating homepage data");
                console.error(err);
            });
    };

    return (
        <div>
            <div className="container">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    {/* Image Inputs */}
                    <div className="row">
                        {["img1", "img2", "img3", "img4"].map((key, index) => (
                            <div className="col-md-3" key={key}>
                                <label>{key}:</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name={key}
                                    onChange={handleFileChange}
                                />
                                <br />
                                <img
                                    src={`${config.API_BASE_URL}${homeData[key]}`}
                                    alt={key}
                                    style={{ width: "100%", height: "150px" }}
                                />
                                <label>text {key}:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name={`text${index + 1}`}
                                    value={homeData[`text${index + 1}`]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Slider Section */}
                    <div className="row">
                        <label>Slider Sub Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="sliderSubHeading"
                            value={homeData.sliderSubHeading}
                            onChange={handleChange}
                        />
                        <label>Slider Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="sliderHeading"
                            value={homeData.sliderHeading}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <label>Kiteactive for life sec Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="kiteforlifesecHeading"
                            value={homeData.kiteforlifesecHeading}
                            onChange={handleChange}
                        />
                        <label>Kiteactive for life sec Para:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="kiteforlifesecPara"
                            value={homeData.kiteforlifesecPara}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Why Section */}
                    <div className="row">
                        <label>Why Section Image:</label>
                        <input
                            type="file"
                            className="form-control"
                            name="whySectionImg"
                            onChange={handleFileChange}
                        />
                        <br />
                        {homeData.whySectionImg && (
                            <img
                                src={
                                    homeData.whySectionImg instanceof File
                                        ? URL.createObjectURL(homeData.whySectionImg)
                                        : `${config.API_BASE_URL}${homeData.whySectionImg}`
                                }
                                alt="Why Section"
                                style={{ width: "100%", height: "150px" }}
                            />
                        )}
                    </div>
                    <div className="row">
                        <label>Why Section Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="whySectionHeading"
                            value={homeData.whySectionHeading}
                            onChange={handleChange}
                        />
                        {["whyimg1", "whyimg2", "whyimg3", "whyimg4"].map((key, index) => (
                            <div className="col-md-3" key={key}>
                                <label>{key}:</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    name={key}
                                    onChange={handleFileChange}
                                />
                                <br />
                                <img
                                    src={`${config.API_BASE_URL}${homeData[key]}`}
                                    alt={key}
                                    style={{ width: "100%", height: "150px" }}
                                />
                                <label>Why {key} Title:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name={`whytitle${index + 1}`}
                                    value={homeData[`whytitle${index + 1}`]}
                                    onChange={handleChange}
                                />
                                <label>Why {key} Paragraph:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name={`whypara${index + 1}`}
                                    value={homeData[`whypara${index + 1}`]}
                                    onChange={handleChange}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Level Section */}
                    <div className="row">
                        <label>Level Section Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="levelHeading"
                            value={homeData.levelHeading}
                            onChange={handleChange}
                        />
                        <label>Level Section Sub Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="levelSubHeading"
                            value={homeData.levelSubHeading}
                            onChange={handleChange}
                        />
                        {["levelimg1", "levelimg2", "levelimg3", "levelimg4"].map(
                            (key, index) => (
                                <div className="col-md-3" key={key}>
                                    <label>{key}:</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        name={key}
                                        onChange={handleFileChange}
                                    />
                                    <br />
                                    <img
                                        src={`${config.API_BASE_URL}${homeData[key]}`}
                                        alt={key}
                                        style={{ width: "100%", height: "150px" }}
                                    />
                                    <label>Level {key} Title:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={`leveltitle${index + 1}`}
                                        value={homeData[`leveltitle${index + 1}`]}
                                        onChange={handleChange}
                                    />
                                    <label>Level {key} Paragraph:</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name={`levelpara${index + 1}`}
                                        value={homeData[`levelpara${index + 1}`]}
                                        onChange={handleChange}
                                    />
                                </div>
                            )
                        )}
                    </div>

                    <div className="row">
                        <label>Digg sec Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="diggimgHeading"
                            value={homeData.diggimgHeading}
                            onChange={handleChange}
                        />
                        <label>Digg sec Paragraph:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="diggimgpara"
                            value={homeData.diggimgpara}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="row">
                        <label>My team Image:</label>
                        <input
                            type="file"
                            className="form-control"
                            name="teamimg"
                            onChange={handleFileChange}
                        />
                        <br />
                        {homeData.teamimg && (
                            <img
                                src={
                                    homeData.teamimg instanceof File
                                        ? URL.createObjectURL(homeData.teamimg)
                                        : `${config.API_BASE_URL}${homeData.teamimg}`
                                }
                                alt="Why Section"
                                style={{ width: "100%", height: "150px" }}
                            />
                        )}


                        <label>My team sec Sub Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="teamSubHeading"
                            value={homeData.teamSubHeading}
                            onChange={handleChange}
                        />
                        <label>My team sec Heading:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="teamHeading"
                            value={homeData.teamHeading}
                            onChange={handleChange}
                        />
                        <label>My team sec Paragraph:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="teamPara"
                            value={homeData.teamPara}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="row">
                        <button type="submit" className="btn btn-success">
                            Update Homepage
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Admin_Home;
