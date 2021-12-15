import React from 'react';

export default function Form(props){
    const { values, update, submit } = props;

    const onChange = evt => {
        console.log(evt);
        const { name, value } = evt.target;
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }



    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Name
                    <input
                        name='name'
                        type='text'
                        placeholder='Type name here'
                        maxLength='30'
                        value={values.name}
                        onChange={onChange}
                    />
                </label>
                <label>Email
                    <input
                        name='email'
                        type='email'
                        placeholder='Type email here'
                        maxLength='30'
                        value={values.email}
                        onChange={onChange}
                    />
                </label>
                <label>Role
                    <select value={values.role} name='role' onChange={onChange}>
                        <option value=''>== Select a role ==</option>
                        <option value='Frontend'>Frontend</option>
                        <option value='Backend'>Backend</option>
                     </select>
                </label>
                <div>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}