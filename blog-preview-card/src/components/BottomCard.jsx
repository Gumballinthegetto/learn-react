import avatarIcon from '../assets/images/image-avatar.webp'

export default function BottomCard() {
    return (
        <div className="py-6 space-y-4">
            <div className="bg-yellow w-fit py-1 px-3 font-[700] rounded-md">
                <span className='text-sm'>Learning</span>
            </div>
            <h4 className="text-md">Published 21 Dec 2023</h4>
            <h1 className="text-xl font-bold">HTML & CSS foundations</h1>
            <p className='text-gray-500'>
                These languages are the backbone of every website,
                defining structure, content, and presentation.
            </p>
            <div className="flex items-center pt-2 space-x-3">
                <img className='w-8' src={avatarIcon} alt="Avatar icon" />
                <span className='text-sm font-[600]'>Greg Hopper</span>
            </div>
        </div>
    )
}