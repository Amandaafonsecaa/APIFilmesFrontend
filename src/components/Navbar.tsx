import { useState } from 'react';
import AddMovieModal from './AddMovieModal';
import './Navbar.css'

export default function Navbar(){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return(
        <>
            <div className="navbar">
                <div className="logo">
                    <h1>🎬 CinemaManager</h1>
                </div>
                <div className="btn">
                    <button onClick={handleOpenModal}>+ Adicionar Filme</button>
                </div>
            </div>
            <AddMovieModal
                open={isModalOpen}
                onClose={handleCloseModal}
            />
        </>
    );
}