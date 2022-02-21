import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type AddTaskTypeProps = {
    addTask: (title: string) => void
}

const AddTask: React.FC<AddTaskTypeProps> = ({addTask}) => {

    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
    }


    const onClickHandler = () => {
        const trimmedTitle = title.trim()
        if (trimmedTitle) {
            addTask(trimmedTitle);
        } else {setError(true)}
        setTitle('');

    }

    //условный рендеринг ошибки
    const errorMessageStyle = {backgroundColor: 'red', color: 'white'}
    const errorMessage = error
        ? <div style={errorMessageStyle}>title is require!!!</div>
        : null
    const errorInputClass = error ?"error" : ''

    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={errorInputClass}
            />
            <button onClick={onClickHandler}>+</button>
            {errorMessage}
        </div>
    );
};

export default AddTask;