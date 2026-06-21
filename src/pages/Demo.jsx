import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
function Demo(){
  const [loading, setLoading] = useState(false);
  const handleDemo = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);

      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }, 2000);
  };
  const[showToast,setShowToast] = useState(false);
    return(
        <div className="p-8 space-y-6">
         <h1 className="text-3xl font-bold">UI Components Demo</h1>
         <Input placeholder = "Enter your name"/>
         <Button
         text = "Test Toast Component"
         onClick={()=>handleDemo()}
         />
        {loading && <Loader />}
        {showToast&&(<Toast message = "Action completed Successfully"/>)}
        </div>
    )
}
export default Demo;