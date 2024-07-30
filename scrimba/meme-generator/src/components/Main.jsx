import MemeImage from "./MemeImage";
import TextInput from "./TextInput";
import { useState, useEffect } from "react";
import axios from 'axios';

export default function Main() {
    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg',
    })
    const [allMemes, setAllMemes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.imgflip.com/get_memes")
                setAllMemes(response.data.data.memes)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [])

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    function getMemeImgUrl(e) {
        e.preventDefault()
        const memeArr = allMemes
        const randomNum = Math.floor(Math.random() * memeArr.length)
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: memeArr[randomNum].url
            }
        })
    }

    function handleChange(e) {
        e.preventDefault()
        const {name, value} = e.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name]: value,
            }
        })
    }

    return (
        <main className="px-10">
            <form action="" className="text-[0.9rem] mx-auto max-w-[670px]">
                <div className="flex flex-col items-center py-8 sm:flex-row sm:space-x-8">
                    <TextInput
                        labelText="Top Text"
                        inputName="topText"
                        value={meme.topText}
                        handleChange={handleChange}
                        placeholder="Enter top text" />
                    <TextInput
                        labelText="Bottom Text"
                        inputName="bottomText"
                        value={meme.bottomText}
                        handleChange={handleChange}
                        placeholder="Enter bottom text" />
                </div>
                <div className="w-full flex flex-row justify-center">
                    <button 
                        type="submit" 
                        className="font-[500] border rounded-lg px-8 py-4 text-white bg-slate-700 shadow-sm text-[0.8rem]"
                        onClick={getMemeImgUrl}>
                        <span>Get a new meme image</span>
                    </button>
                </div>
            </form>
            <MemeImage 
                url={meme.randomImage}
                topText={meme.topText}
                bottomText={meme.bottomText} />
        </main>
    )
}