import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomeComponent() {
  return (
    <div className="flex flex-col items-center pt-16">
      <h1 className="text-3xl">This is the home page</h1>
      <p className="p-8">Welcome to the app,</p>
      <p className="text-left w-4/6 ">Welcome to our vibrant community! 🎉 Prepare to embark on an exciting journey filled with insights, connections, and endless possibilities. Whether you're here to learn, share, or simply explore, you've found your home. Let's inspire, empower, and grow together! </p>
      <Link className="pt-8" to={'/posts'}>
        <Button variant="contained">Read posts</Button>
      </Link>

    </div>
  )
}
