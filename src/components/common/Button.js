function Button({ icon, color, text, srcUrl }) {
    return (
        <div>
            <a href={srcUrl} target="_blank">
                <button className='button-style' style={{ backgroundColor: color }}>
                    {icon ? <img src={icon} alt="Ícone" /> : null}
                    {text}
                </button>
            </a>
        </div>
    );
}

Button.defaultProps = {
    text: 'Tenho Interesse',
    srcUrl: '#'
};

export default Button;
