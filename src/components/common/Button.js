function Button({ icon, color, text, srcUrl }) {
    return (
        <div>
            <a href={srcUrl}>
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
