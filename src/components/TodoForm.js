import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })
        
        // to change value ininput field with setinput
        const handlechange = e => {
            setInput(e.target.value);
        };

        // for submit the form,without this its refreshing
        const handleSubmit = e => {
            e.preventDefault();
        
        // onsumit with random number * 1000
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
            
        setInput('');

    };



    return (
        <form className='todo-form' onSubmit={handleSubmit}>

            {props.edit ? (
                <>
                  <input
                type='text'
                placeholder='Update your Item'
                value={input}
                name='text'
                className='todo-input edit'
                onChange={handlechange}
                ref={inputRef}
            />
                    <button className='todo-button edit'>Update</button>
                </>
                ) : (
                <>
                <input
                type='text'
                placeholder='Add a todo'
                value={input}
                name='text'
                className='todo-input'
                onChange={handlechange}
                ref={inputRef}
            />
                <button className='todo-button'>Add a todo</button>
            </>
            ) 
            
                
        }
          
        </form>
    );
}

export default TodoForm;
