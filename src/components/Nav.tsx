const Nav = () => {
  return (
    <nav class="backdrop-blur-sm">
      <div class="mx-auto max-w-6xl h-14 flex justify-between items-center">
        <div>
          <h1 class="text-xl font-bold">
            AuthorsLog<span class="text-xs">.com</span>
          </h1>
        </div>
        <div>
          <ul class="flex gap-4">
            <li class="px-2 py-1 cursor-pointer">Login</li>
            <li class="px-3 py-1 cursor-pointer rounded-xl bg-black text-white">Sign Up</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
