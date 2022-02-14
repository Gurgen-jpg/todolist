import React, {ChangeEvent, useState, KeyboardEvent} from 'react';

type AddTaskTypeProps = {
    addTask: (title: string) => void
}

const AddTask: React.FC<AddTaskTypeProps> = ({addTask}) => {

    const [title, setTitle] = useState<string>('')

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
      setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
          onClickHandler()
      }
    }


    const onClickHandler = () => {
        addTask(title);
        setTitle('');

    }
    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

export default AddTask;