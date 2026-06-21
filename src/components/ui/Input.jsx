/**
 * Input Component
 * Props:
 * - type: Input type
 * - placeholder: Placeholder text
 * - value: Input value
 * - onChange: Change handler
 */
function Input({type="text", placeholder, value, onChange}){
    return(
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 rounded w-full"
      />
    );
}
export default Input;