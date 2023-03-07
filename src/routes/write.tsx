import { createSignal } from "solid-js";
import { unstable_clientOnly } from "solid-start";

const editor = unstable_clientOnly(() => import("../components/Editor"));

const write = () => {
  const [title, setTitle] = createSignal("");
  const [subtitle, setSubtitle] = createSignal("");
  const [thumbnail, setThumbnail] = createSignal("");

  return (
    <div class="max-w-screen-2xl mx-auto flex justify-center">
      <main class="max-w-3xl w-full px-4 py-8 flex flex-col gap-4">
        <div class="w-full" style={{ "font-family": "Raleway, sans-serif" }}>
          <div
            contentEditable={true}
            class={`w-full px-4 py-2 text-2xl outline-none border-l ${
              title() ? "border-transparent" : "border-gray-300"
            } focus:border-gray-300 duration-75 group`}
            onInput={(e) => setTitle((e.target as HTMLElement).innerText)}
          >
            {!title() && (
              <span class="text-gray-500 font-sans group-focus:hidden pointer-events-none">
                Title
              </span>
            )}
          </div>
          <div
            contentEditable={true}
            class="w-full px-4 py-2 text-xl outline-none border-l border-transparent focus:border-gray-300 duration-75 group text-gray-500"
            onInput={(e) => setSubtitle((e.target as HTMLElement).innerText)}
          >
            {!subtitle() && (
              <span class="text-gray-500 font-sans group-focus:hidden pointer-events-none">
                Subtitle
              </span>
            )}
          </div>
        </div>
        {thumbnail() && (
          <label for="thumbnail">
            <img src={thumbnail()} class="max-w-2xl w-full mx-auto" />
          </label>
        )}
        {!thumbnail() && (
          <label
            for="thumbnail"
            class="flex gap-2 justify-center items-center text-gray-500 rounded-md border py-4 drop-shadow-sm cursor-pointer bg-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <rect
                width="14"
                height="14"
                x="5"
                y="5"
                stroke="currentColor"
                stroke-width="2"
                rx="4"
              ></rect>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.13968 15.32L8.69058 11.5661C9.02934 11.2036 9.48873 11 9.96774 11C10.4467 11 10.9061 11.2036 11.2449 11.5661L15.3871 16M13.5806 14.0664L15.0132 12.533C15.3519 12.1705 15.8113 11.9668 16.2903 11.9668C16.7693 11.9668 17.2287 12.1705 17.5675 12.533L18.841 13.9634"
              ></path>
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.7778 9.33331H13.7867"
              ></path>
            </svg>
            Select an image
          </label>
        )}
        <input
          type="file"
          id="thumbnail"
          class="hidden"
          accept=".jpg, .jpeg, .png"
          onchange={(e) => {
            if ((e.target as HTMLInputElement).files?.[0]) {
              setThumbnail(
                URL.createObjectURL((e.target as HTMLInputElement).files![0])
              );
            }
          }}
        />
        <div>
          <div id="editorjs" class="cursor-text"></div>
        </div>
      </main>
    </div>
  );
};

export default write;
