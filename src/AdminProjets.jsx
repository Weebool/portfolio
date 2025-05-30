import { useState } from 'react';
import './App.css';

function AdminProjets() {
    const [formData, setFormData] = useState({
        titre: '',
        description: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'image' ? files[0] : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('titre', formData.titre);
        formDataToSend.append('description', formData.description);
        formDataToSend.append('image', formData.image);

        fetch('api/add_projet.php', {
            method: 'POST',
            body: formDataToSend
        }).then(response => response.json())
            .then(data => alert(data.message));
    };

    return (
        <div className="admin-container">
            <h1>Administration des Projets</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="titre"
                    placeholder="Titre"
                    required
                    onChange={handleChange}
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    required
                    onChange={handleChange}
                ></textarea>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    required
                    onChange={handleChange}
                />
                <button type="submit">Ajouter</button>
            </form>
        </div>
    );
}

export default AdminProjets;