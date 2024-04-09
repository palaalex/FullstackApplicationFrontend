import { Button, Divider, IconButton, TextField } from "@mui/material";
import { useState } from "react"
import toast from "react-hot-toast";

export default function PostComponent() {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");

  const submitForm = async (e: any) => {
    console.log(name);
    if (name != "" && email != "") {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, email: email })
      };
      try {
        await fetch('http://localhost:8080/demo/add', requestOptions);
        toast.success("User created!");
      } catch (error) {
        toast.error("Something went wrong.")
      }
    }
    setName("");
    setEmail("");
  }

  return (
    <>
      <div className="p-4">PostComponent</div>
      <div className="flex flex-row gap-6">
        <TextField id="filled-basic" label="Name" value={name} variant="outlined" onChange={(e) => setName(e.target.value)} />
        <TextField id="filled-basic" label="Email" value={email} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
        <Button variant="contained" type="submit" className='h-12' onClick={(e) => submitForm(e)}>Submit</Button>
      </div>

      <Divider className='pt-8'></Divider>
    </>
  )
}
