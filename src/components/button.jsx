export function Btn({ label }) {
    return (
      <button id="prompt">
        {label}
      </button>
    );
  }

  export function Close({ iconX, id, question }) {
    return (
      <button id={id}>
        <img src={iconX} id={question} alt="Close" />
      </button>
    );
  }

export function Expectancy( {iconX}) {
    return(
        <div id="expectancy">
            <p id="warning">WARNING</p>
            <Close id="closeX"></Close>
        </div>

    )
}