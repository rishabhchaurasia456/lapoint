import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config/config';

const Admin_Edit_Myteam = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    const [position, setPosition] = useState('');
    const [totalExp, setTotalExp] = useState('');
    const [shortIntro, setShortIntro] = useState('');
    const [fullIntro, setFullIntro] = useState('');
    const [destination, setDestination] = useState('');
    const [kiteactiveExp, setKiteactiveExp] = useState('');
    const [dob, setDob] = useState('');
    const [homeSpot, setHomeSpot] = useState('');
    const [kiteSince, setKiteSince] = useState('');
    const [teachingSince, setTeachingSince] = useState('');
    const [favoriteTrick, setFavoriteTrick] = useState('');
    const [favoritediscip, setFavoriteDiscip] = useState('');
    const [favoritelocation, setFavoriteLocation] = useState('');
    const [img, setImg] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamMember = async () => {
            try {
                const response = await axios.post(`${config.API_BASE_URL}/api/admin/get_single_myteam/${id}`);
                const {
                    name,
                    nickname,
                    position,
                    totalExp,
                    shortIntro,
                    fullIntro,
                    destination,
                    kiteactiveExp,
                    dob,
                    homeSpot,
                    kiteSince,
                    teachingSince,
                    favoriteTrick,
                    favoritediscip,
                    favoritelocation,
                    img,
                } = response.data;

                setName(name);
                setNickname(nickname);
                setPosition(position);
                setTotalExp(totalExp);
                setShortIntro(shortIntro);
                setFullIntro(fullIntro);
                setDestination(destination);
                setKiteactiveExp(kiteactiveExp);
                setDob(dob);
                setHomeSpot(homeSpot);
                setKiteSince(kiteSince);
                setTeachingSince(teachingSince);
                setFavoriteTrick(favoriteTrick);
                setFavoriteDiscip(favoritediscip);
                setFavoriteLocation(favoritelocation);
                setImg(img);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching team member:', err);
                setError('Failed to load team member details.');
                setLoading(false);
            }
        };

        fetchTeamMember();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('nickname', nickname);
        formData.append('position', position);
        formData.append('totalExp', totalExp);
        formData.append('shortIntro', shortIntro);
        formData.append('fullIntro', fullIntro);
        formData.append('destination', destination);
        formData.append('kiteactiveExp', kiteactiveExp);
        formData.append('dob', dob);
        formData.append('homeSpot', homeSpot);
        formData.append('kiteSince', kiteSince);
        formData.append('teachingSince', teachingSince);
        formData.append('favoriteTrick', favoriteTrick);
        formData.append('favoritediscip', favoritediscip);
        formData.append('favoritelocation', favoritelocation);

        if (img instanceof File) {
            formData.append('img', img);
        }

        try {
            const response = await axios.post(`${config.API_BASE_URL}/api/admin/update_myteam/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            alert('Team member updated successfully!');
            navigate('/admin/myteam');
        } catch (err) {
            console.error('Error updating team member:', err);
            alert('Failed to update team member.');
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h2>Edit Team Member</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Nickname</label>
                    <input
                        type="text"
                        className="form-control"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Position</label>
                    <input
                        type="text"
                        className="form-control"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Total Experience</label>
                    <input
                        type="text"
                        className="form-control"
                        value={totalExp}
                        onChange={(e) => setTotalExp(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Short Introduction</label>
                    <textarea
                        className="form-control"
                        value={shortIntro}
                        onChange={(e) => setShortIntro(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Full Introduction</label>
                    <textarea
                        className="form-control"
                        value={fullIntro}
                        onChange={(e) => setFullIntro(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Destination</label>
                    <input
                        type="text"
                        className="form-control"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Kiteactive Experience</label>
                    <input
                        type="text"
                        className="form-control"
                        value={kiteactiveExp}
                        onChange={(e) => setKiteactiveExp(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of Birth</label>
                    <input
                        type="text"
                        className="form-control"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Home Spot</label>
                    <input
                        type="text"
                        className="form-control"
                        value={homeSpot}
                        onChange={(e) => setHomeSpot(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Kiting Since</label>
                    <input
                        type="number"
                        className="form-control"
                        value={kiteSince}
                        onChange={(e) => setKiteSince(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Teaching Since</label>
                    <input
                        type="number"
                        className="form-control"
                        value={teachingSince}
                        onChange={(e) => setTeachingSince(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Favorite Trick</label>
                    <input
                        type="text"
                        className="form-control"
                        value={favoriteTrick}
                        onChange={(e) => setFavoriteTrick(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Favorite Discipline</label>
                    <input
                        type="text"
                        className="form-control"
                        value={favoritediscip}
                        onChange={(e) => setFavoriteDiscip(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Favorite Location</label>
                    <input
                        type="text"
                        className="form-control"
                        value={favoritelocation}
                        onChange={(e) => setFavoriteLocation(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Profile Image</label>
                    {img && !(img instanceof File) ? (
                        <img
                            src={`${config.API_BASE_URL}/${img.replace(/\\/g, '/')}`}
                            alt="Profile"
                            style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                        />
                    ) : img && (
                        <img
                            src={URL.createObjectURL(img)}
                            alt="Profile Preview"
                            style={{ width: '200px', height: 'auto', marginBottom: '10px' }}
                        />
                    )}
                    <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImg(e.target.files[0])}
                    />
                </div>

                <button type="submit" className="btn btn-primary mt-3">
                    Save Changes
                </button>
            </form>
        </div>
    );
};

export default Admin_Edit_Myteam;
