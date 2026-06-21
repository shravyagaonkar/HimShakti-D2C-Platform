/**
 * Button Component
 * Props:
 * - text: Button label
 * - onClick: Function to be done on click
 */
function Button({text,onClick}){
    return(
        <button
            onClick={onClick}
            className = "bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700"
        >
            {text}
        </button>
    );
}
export default Button;