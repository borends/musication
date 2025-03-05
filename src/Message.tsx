function Message() {
    const name = '';
    if (name)
        return <h1>Витаю, {name}</h1>;
    else
        return <h1>Зрада</h1>
}

export default Message;