import './Input.css'
const Input = ({ textoLabel, onChange, textoPlaceholder, tipoInp, valor, textoId }) => {

    return (
        <section className='input-contenedor'>
            <div className='input-label'>
                <label htmlFor={textoId}> {textoLabel} </label>
            </div>
            <input
                className="input-input"
                id={textoId}
                placeholder={textoPlaceholder}
                type={tipoInp}
                value={valor}
                onChange={(e) => onChange(e.target.value)}
            />

        </section>

    );
};

export default Input;
