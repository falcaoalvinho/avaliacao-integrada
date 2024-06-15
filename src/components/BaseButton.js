function BaseButton({Function, Text, Color}) {
    return (
        <button onClick={() =>Function}>
            {Text}
        </button>
    )
}

export default BaseButton;