import { For } from "solid-js";
import { A } from "solid-start";

const ExploreList = () => {
  const articles = Array(10);
  return (
    <div class="max-w-3xl w-full px-4 flex flex-col divide-y">
      <For each={articles}>
        {() => (
          <div class="w-full h-48 py-4">
            <A href="/article">
              <div class="flex gap-4">
                <img
                  src="https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt="Article thumbnail"
                  class="w-40 h-40"
                />
                <div class="flex flex-col gap-2">
                  <div class="flex justify-between">
                    <A href="/profile">
                      <div class="flex gap-2 items-center">
                        <img
                          src="https://images.unsplash.com/photo-1495615080073-6b89c9839ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80"
                          alt="name here"
                          class="w-6 h-6 rounded-full"
                        />
                        <p class="text-sm">Name of the Writer</p>
                      </div>
                    </A>
                    <div class="flex gap-2">
                      <span
                        class="material-symbols-outlined"
                        style={{
                          "font-variation-settings":
                            "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 20",
                        }}
                      >
                        bookmarks
                      </span>{" "}
                      <span
                        class="material-symbols-outlined"
                        style={{
                          "font-variation-settings":
                            "'FILL' 0, 'wght' 200, 'GRAD' 0, 'opsz' 20",
                        }}
                      >
                        share
                      </span>
                    </div>
                  </div>
                  <div class="flex flex-col gap-1">
                    <h2
                      class="overflow-hidden text-ellipsis"
                      style={{
                        "font-family": "Raleway, sans-serif",
                        display: "-webkit-box",
                        "-webkit-line-clamp": "2",
                        "-webkit-box-orient": "vertical",
                      }}
                    >
                      Hello There, This is a heading tag of the respected
                      article. I hope this heading looks good. If not... then
                      skip to the good part
                    </h2>
                    <h3
                      class="overflow-hidden text-ellipsis text-sm text-gray-500"
                      style={{
                        "font-family": "Raleway, sans-serif",
                        display: "-webkit-box",
                        "-webkit-line-clamp": "2",
                        "-webkit-box-orient": "vertical",
                      }}
                    >
                      Hello There, This is a heading tag of the respected
                      article. I hope this heading looks good. If not... then
                      skip to the good part
                    </h3>
                  </div>
                  <div class="flex gap-4 mt-auto text-xs text-gray-500">
                    3 month ago
                  </div>
                </div>
              </div>
            </A>
          </div>
        )}
      </For>
    </div>
  );
};

export default ExploreList;
