import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function HomeComponent() {
  return (
    <div className="flex flex-col items-center pt-16">
      <h1 className="text-3xl">This is the home page</h1>
      <p className="p-8">Welcome to the app,</p>
      <p className="text-left w-4/6 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non nibh ac ipsum pretium consectetur quis vitae ante. Aliquam varius dictum dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque consectetur tempor lectus, id accumsan dui ultricies non. Vivamus condimentum lectus nec ante maximus pellentesque. Donec vehicula vulputate metus vel ullamcorper. Nulla vehicula bibendum magna et semper. Sed facilisis, enim vel facilisis tincidunt, augue libero viverra eros, in congue nulla leo eget ipsum. Praesent et velit lobortis, pharetra nunc nec, semper lacus. Ut eget iaculis ante.</p>
      <Link className="pt-8" to={'/posts'}>
        <Button variant="contained">Read posts</Button>
      </Link>

    </div>
  )
}
