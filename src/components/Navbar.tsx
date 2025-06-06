import './Navbar.css'
export default function Navbar(){
    return(
        <div className="navbar">
            <div className="logo">
                <h1>🎬 CinemaManager</h1>
            </div>
            <div className="btn">
                <button>+ Adicionar Filme</button>
            </div>
        </div>
    );
}