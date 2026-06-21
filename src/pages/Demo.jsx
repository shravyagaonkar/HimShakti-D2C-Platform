import { useState } from "react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Loader from "../components/ui/Loader";
import Toast from "../components/ui/Toast";
import Modal from "../components/ui/Modal";
function Demo(){
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
    const[showToast,setShowToast] = useState(false);
  const handleDemo = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setShowToast(true);
    }, 2000);
  };

    return(
        <div className="p-8 max-w-3xl mx-auto flex flex-col gap-6">
         <h1 className="text-3xl font-bold">UI Components Demo</h1>
         <Input placeholder = "Enter your name"/>
         <Button
         text = "Test Toast Component"
         onClick={()=>handleDemo()}
         />
        {loading && <Loader />}
        <Button
        text = "Test Modal Component"
        onClick={()=>setOpen(true)}
        />
        <Modal
        open = {open}
        close = {()=>setOpen(false)}
        />
        {showToast&&(<Toast message = " Toast component implemented  Successfully"/>)}
        </div>
    )
}
export default Demo;