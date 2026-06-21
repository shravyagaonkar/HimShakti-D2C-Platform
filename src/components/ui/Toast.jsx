/**
 * Toaster Component
 * props:
 *  -message: The toast message
 */
function Toast({message}){
    return(
        <div classname = "fixed top-5 right-5 bg-emerald-600 text-white px-4 py-2 rounded">
            {message}
        </div>
    );
}
export default Toast;