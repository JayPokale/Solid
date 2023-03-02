const Nav = () => {
  return (
    <nav class="bg-white fixed w-full top-0 px-4 left-0 border-b" style={{"z-index":"20"}}>
      <div class="mx-auto max-w-screen-2xl h-14 flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold" style={{ "font-family": "Signika" }}>
            AuthorsLog<span class="text-xs">.com</span>
          </h1>
        </div>
        <div>
          <ul class="flex gap-4">
            <li class="px-2 py-1 cursor-pointer">Login</li>
            <li class="px-3 py-1 cursor-pointer rounded-xl bg-black text-white">
              Sign Up
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
