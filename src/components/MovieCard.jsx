import {getImgUrl} from "../utils/cine-utility.js";
import Rating from "./Rating.jsx";
import {useContext, useState} from "react";
import MovieDetailModal from "./MovieDetailModal.jsx";
import {MovieContext} from "../context/indexContext.js";
import {  toast } from 'react-toastify';


const MovieCard = ({movie}) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedMovie, setSelectedMovie] = useState(null);
    const {state, dispatch} = useContext(MovieContext)


    function handleCloseModal() {
        setShowModal(false);
        setSelectedMovie(null);
    }

    function handleMovieSelection(movie) {
        setShowModal(true);
        setSelectedMovie(movie);
    }


    function handleAddToCart(e, movie) {
        e.stopPropagation();

        const found = state.cartData.find(item => item.id === movie.id);

        if (!found){
            dispatch({
                type: 'ADDCART',
                payload: {
                    ...movie,
                }
            });

            toast.success(`Movie ${movie.title} added successfully`, {
                position: "bottom-right",
                className: 'foo-bar'
            })

        } else {
            toast.error(`The movie ${movie.title} has been added to the Cart Already`, {
                position: "bottom-right",
            })
        }
    }

    return (
        <>
            {
                showModal && <MovieDetailModal movie={selectedMovie} onClose={handleCloseModal} onCartAdd={handleAddToCart}/>
            }

            <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
                <a onClick={() => handleMovieSelection(movie)}>
                    <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt={movie.title}/>
                    <figcaption className="pt-4">
                        <h3 className="text-xl mb-1">{movie.title}</h3>
                        <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
                        <div className="flex items-center space-x-1 mb-5">
                            <Rating value={movie.rating}/>
                        </div>
                        <button className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                           href="#" onClick={(e) => handleAddToCart(e, movie)}>
                            <img src="../../src/assets/tag.svg" alt=""/>
                            <span>{movie.price} | Add to Cart</span>
                        </button>
                    </figcaption>
                </a>
            </figure>
        </>

    )
        ;
};

export default MovieCard;
