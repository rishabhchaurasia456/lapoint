import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import config from "../config/config";
import { Link } from "react-router-dom";

const Admin_Myteam = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        img: null,
        name: "",
        nickname: "",
        position: "",
        totalExp: "",
        shortIntro: "",
        fullIntro: "",
        destination: "",
        kiteactiveExp: "",
        dob: "",
        homeSpot: "",
        kiteSince: "",
        teachingSince: "",
        favoriteTrick: "",
        favoritediscip: "",
        favoritelocation: "",
    });

    // Fetch team members
    const fetchTeamMembers = async () => {
        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_myteam`);
            setTeamMembers(response.data);
        } catch (error) {
            console.error("Error fetching team members:", error);
        }
    };

    useEffect(() => {
        fetchTeamMembers();
    }, []);

    const handleOpenModal = () => {
        setFormData({
            img: null,
            name: "",
            nickname: "",
            position: "",
            totalExp: "",
            shortIntro: "",
            fullIntro: "",
            destination: "",
            kiteactiveExp: "",
            dob: "",
            homeSpot: "",
            kiteSince: "",
            teachingSince: "",
            favoriteTrick: "",
            favoritediscip: "",
            favoritelocation: "",
        });
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleInputChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "img") {
            setFormData({ ...formData, img: files[0] });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        try {
            const response = await axios.post(
                `${config.API_BASE_URL}/api/admin/create_myteam`,
                formDataToSend,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            console.log(response.data);
            fetchTeamMembers();
            handleCloseModal();
        } catch (error) {
            console.error("Error submitting form:", error.response?.data || error.message);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this team member?")) {
            try {
                const response = await axios.delete(`${config.API_BASE_URL}/api/admin/delete_myteam/${id}`);
                if (response.status === 200) {
                    alert(response.data.message);
                    setTeamMembers((prevData) => prevData.filter((member) => member._id !== id));
                }
            } catch (error) {
                console.error("Error deleting team member:", error);
            }
        }
    };

    return (
        <div className="container">
            <h1>Admin Team Management</h1>
            <Button onClick={handleOpenModal}>Add New Team Member</Button>

            <h2>Team Members</h2>
            <ul>
                {Array.isArray(teamMembers) && teamMembers.length > 0 ? (
                    teamMembers.map((member) => (
                        <li key={member._id}>
                            <h3>{member.name}</h3>
                            <Link className="btn btn-primary me-2" to={`/admin/edit/myteam/${member._id}`}>
                                Edit
                            </Link>
                            <Button variant="danger" onClick={() => handleDelete(member._id)}>
                                Delete
                            </Button>
                        </li>
                    ))
                ) : (
                    <p>Loading or no data available.</p>
                )}
            </ul>

            {/* Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Team Member</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="file"
                            name="img"
                            onChange={handleInputChange}
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Name"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="nickname"
                            value={formData.nickname}
                            onChange={handleInputChange}
                            placeholder="Nickname"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            placeholder="Position"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="totalExp"
                            value={formData.totalExp}
                            onChange={handleInputChange}
                            placeholder="Total Experience"
                            className="form-control mb-3"
                            required
                        />
                        <textarea
                            name="shortIntro"
                            value={formData.shortIntro}
                            onChange={handleInputChange}
                            placeholder="Short Introduction"
                            className="form-control mb-3"
                            required
                        ></textarea>
                        <textarea
                            name="fullIntro"
                            value={formData.fullIntro}
                            onChange={handleInputChange}
                            placeholder="Full Introduction"
                            className="form-control mb-3"
                            required
                        ></textarea>
                        <input
                            type="text"
                            name="destination"
                            value={formData.destination}
                            onChange={handleInputChange}
                            placeholder="Destination"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="kiteactiveExp"
                            value={formData.kiteactiveExp}
                            onChange={handleInputChange}
                            placeholder="Kiteactive Experience"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            placeholder="Date of Birth"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="homeSpot"
                            value={formData.homeSpot}
                            onChange={handleInputChange}
                            placeholder="Home Spot"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="kiteSince"
                            value={formData.kiteSince}
                            onChange={handleInputChange}
                            placeholder="Kite Since"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="teachingSince"
                            value={formData.teachingSince}
                            onChange={handleInputChange}
                            placeholder="Teaching Since"
                            className="form-control mb-3"
                            required
                        />
                        <input
                            type="text"
                            name="favoriteTrick"
                            value={formData.favoriteTrick}
                            onChange={handleInputChange}
                            placeholder="Favorite Trick"
                            className="form-control mb-3"
                        />
                        <input
                            type="text"
                            name="favoritediscip"
                            value={formData.favoritediscip}
                            onChange={handleInputChange}
                            placeholder="Favorite Discipline"
                            className="form-control mb-3"
                        />
                        <input
                            type="text"
                            name="favoritelocation"
                            value={formData.favoritelocation}
                            onChange={handleInputChange}
                            placeholder="Favorite Location"
                            className="form-control mb-3"
                        />
                        <Button type="submit">Create</Button>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default Admin_Myteam;
