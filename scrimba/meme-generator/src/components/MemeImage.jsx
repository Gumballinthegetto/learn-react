import PropTypes from 'prop-types'

export default function MemeImage({ url, topText, bottomText }) {
    return (
        <div className="py-10 flex justify-center mx-auto">
            <div className='relative w-[500px] border flex flex-col justify-center items-center'>
                {url && <img className='max-w-full h-auto z-0' src={url} alt="Meme image" />}
                {topText && <h1 className='inputText z-10 -mt-[300px]'>{topText}</h1>}
                {bottomText && <h2 className='inputText z-10 -mt-[50px]'>{bottomText}</h2>}
            </div>
        </div>
    )
}

MemeImage.propTypes = {
    url: PropTypes.string.isRequired,
    topText: PropTypes.string.isRequired,
    bottomText: PropTypes.string.isRequired,
}