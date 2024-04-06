import Star from '../assets/star.svg'

const Rating = ({value}) => {
    const stars = Array(value).fill(Star)
    return (
       <>
           {
               stars.map((star, i) => (<img key={i} src={star} alt="Star" width='14' height='14'/>))
           }
       </>
    );
};

export default Rating;
