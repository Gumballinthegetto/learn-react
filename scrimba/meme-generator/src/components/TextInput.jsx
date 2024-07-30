import PropTypes from 'prop-types'

export default function TextInput(props) {
    return (
        <div className='w-full flex flex-col py-2'>
            <label htmlFor={props.inputName} className="">{props.labelText}</label>
            <input 
                type="text" 
                id={props.inputName} 
                name={props.inputName} 
                value={props.value}
                onChange={props.handleChange}
                className="px-2 py-3 border rounded-md shadow-sm mt-2" 
                placeholder={props.placeholder} />
        </div>
    )
}

TextInput.propTypes = {
    labelText: PropTypes.string.isRequired,
    inputName: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
}