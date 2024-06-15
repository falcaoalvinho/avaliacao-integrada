function Input({Value, Type }){
    return(
        <input 
            style={{border: 'none'}}
            type={Type}
            defaultValue={Value}
        />
    )
}

export default Input;
