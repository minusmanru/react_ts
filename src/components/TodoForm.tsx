import React, {useState, useRef} from 'react';

export const TodoForm: React.FunctionComponent = () => {
    //const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    // const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (event.key === 'Enter') {
            
    //         console.log(title)
    //         setTitle('')
    //     }
    // }



    const ref = useRef<HTMLInputElement>(null)
    const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            console.log(ref.current!.value)
            ref.current!.value = ''
           // console.log(title)
           // setTitle('')
        }
    }

    return (
        <div className="input-field mt2 ">
            <input 
               // value={title}
               // onChange={changeHandler}
                onKeyPress={keyPressHandler}
                ref={ref}
                type="text"
                id="title"
                placeholder="Введите название"
               
                
            />
            <label htmlFor="title" className="active">
                Введите название
            </label>
        </div>
    )
}
