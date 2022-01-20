import React, { useState } from 'react';
import { IState as Props } from '../App';

interface IProps {
    mountains: Props['mountains']
    setMountains: React.Dispatch<React.SetStateAction<Props['mountains']>>
}

const AddToList: React.FC<IProps> = ({mountains, setMountains}) => {

    const [input, setInput] = useState({
        name: "",
        img: "",
        height: "",
        location: "",
        description: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if(
            !input.name ||
            !input.img ||
            !input.height ||
            !input.location
        ) {
            return;
        }

        setMountains([
            ...mountains,
            {
                name: input.name,
                url: input.img,
                height: parseInt(input.height),
                location: input.location,
                description: input.description
            }
        ]);

        setInput({
            name: "",
            img: "",
            height: "",
            location: "",
            description: ""
        })
    }

    return (
        <div className='AddToList'>
            <input 
                type='text'
                placeholder='Name'
                className='AddToList-input'
                value={input.name}
                onChange={handleChange}
                name="name"
            />
            <input 
                type='text'
                placeholder='Image URL'
                className='AddToList-input'
                value={input.img}
                onChange={handleChange}
                name='img'
            />
            <input 
                type='number'
                placeholder='Height'
                className='AddToList-input'
                value={input.height}
                onChange={handleChange}
                name='height'
            />
            <input 
                type='text'
                placeholder='Location'
                className='AddToList-input'
                value={input.location}
                onChange={handleChange}
                name='location'
            />
            <textarea
                placeholder='Description'
                className='AddToList-input'
                value={input.description}
                onChange={handleChange}
                name='description'
            />
            <button
                className='AddToList-btn'
                onClick={handleClick}
            >
                Add to List
            </button>
        </div>
    )
}

export default AddToList;