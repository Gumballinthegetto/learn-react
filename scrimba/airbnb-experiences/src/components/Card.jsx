import star from '../../src/assets/star.png'
import PropTypes from 'prop-types'

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "Sold out"
    } else if (props.location === "Online") {
        badgeText = "Online"
    }

    return (
        <div className='relative overflow-hidden w-[175px] space-y-2'>
           <div className='relative flex flex-col items-center justify-center px-12'>
                <img className='max-w-full h-auto rounded-lg min-w-[170px] object-cover' src={`../../src/assets/${props.coverImg}`} alt="First card image" /> 
                {badgeText &&
                <div className='absolute top-2 left-2 flex justify-center items-center bg-white py-1 px-2 rounded-[3px] shadow-sm'>
                    <span className='uppercase text-[10px] font-[300]'>{badgeText}</span>
                </div>
                }
            </div> 
            <div className='text-[12px]'>
                <div className='flex items-center space-x-1'>
                    <img className='w-[12px] h-[12px]' src={star} alt="Star icon" />
                    <h4>{props.stats.rating}</h4>
                    <span className='text-gray-400 font-[300]'>(6) • {props.location}</span>
                </div>
                <div className='pt-2 space-y-1'>
                    <h2 className='font-[200]'>{props.title}</h2>
                    <p><strong className='font-[500]'>From {props.price}$</strong><span className='font-[200]'> / person</span></p>
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    openSpots: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    coverImg: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}