import cardImg from '../assets/images/illustration-article.svg'

export default function TopCard() {
    return (
        <div>
            <img className='rounded-xl' src={cardImg} alt="Card Image" />
        </div>
    )
}