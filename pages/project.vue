<script setup>
import { ref, onMounted } from "vue";
import abouts from "@/assets/json/project.json";

const items = ref(abouts);

// let index = ref(0);
// let rootEl, platform, frames, contentArea, width, limit;

// onMounted(() => {
//   const set_title = () => {
//     rootEl.querySelector(".heading").innerText =
//       frames[index.value].getAttribute("title");
//   };

//   const next = () => {
//     platform.style.right = `${width * ++index.value}px`;
//     set_title();
//   };

//   const prev = () => {
//     platform.style.right = `${width * --index.value}px`;
//     set_title();
//   };

//   const goto = (index) => {
//     platform.style.right = `${width * index}px`;
//     index.value = index;
//     set_title();
//   };

//   const rootEl = document.querySelector(".gallery");
//   const platform = rootEl.querySelector(".platform");
//   const frames = platform.querySelectorAll(".each-frame");
//   const contentArea = rootEl.querySelector(".content-area");
//   const width = parseInt(rootEl.style.width);
//   const limit = { start: 0, end: frames.length - 1 };

//   frames.forEach((each) => {
//     each.style.width = `${width}px`;
//   });

//   rootEl.addEventListener("click", (t) => {
//     const val = t.target.getAttribute("action");
//     if (val === "next" && index.value !== limit.end) {
//       next();
//     }
//     if (val === "prev" && index.value !== limit.start) {
//       prev();
//     }
//     if (val === "goto") {
//       let rv = t.target.getAttribute("goto");
//       rv = rv === "end" ? limit.end : rv;
//       goto(parseInt(rv));
//     }
//   });

//   document.addEventListener("keyup", (t) => {
//     const val = t.keyCode;
//     if (val === 39 && index.value !== limit.end) {
//       next();
//     }
//     if (val === 37 && index.value !== limit.start) {
//       prev();
//     }
//   });
// });

useHead({
  title: "My Project",
  meta: [
    {
      name: "description",
      content: "All My Project.",
    },
  ],
  titleTemplate: "Handri Hermawan - %s",
});
</script>

<template>
  <div class="mx-auto my-12 max-w-screen-xl overflow-hidden px-6 xl:px-1">
    <ProjectHero />
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mb-4">
      <ProjectCard
        v-for="item in items"
        :key="item.title"
        :link="item.link"
        :title="item.title"
        :image="item.image"
        :alt="item.title"
      />
    </div>
    <!-- <div class="mx-auto my-12 max-w-screen-xl overflow-hidden px-6 xl:px-1">
      <div
        class="gallery mx-auto m-5 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-slate-300"
        style="width: 750px"
      >
        <div class="top flex p-2 border-b select-none">
          <div
            class="heading text-gray-800 w-full pl-3 font-semibold my-auto"
          ></div>
          <div class="buttons ml-auto flex text-gray-600 mr-1">
            <svg
              action="prev"
              class="w-7 border-2 rounded-l-lg p-1 cursor-pointer border-r-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                action="prev"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <svg
              action="next"
              class="w-7 border-2 rounded-r-lg p-1 cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                action="next"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
        <div class="content-area w-full h-96 overflow-hidden">
          <div class="platform shadow-xl h-full flex">
            <div class="each-frame border-box flex-none h-full" title="Tiger">
              <div class="main flex w-full p-8">
                <div class="sub w-4/6 my-auto">
                  <img
                    class="w-full p-8"
                    src="https://images-na.ssl-images-amazon.com/images/I/81eJpEEQwYL._AC_SL1500_.jpg"
                    alt="test"
                  />
                </div>
                <div class="sub w-full my-auto">
                  <div class="head text-3xl font-bold mb-4">The Tiger</div>
                  <div class="long-text text-lg">
                    (Panthera tigris) is the largest extant cat species and a
                    member of the genus Panthera. It is most recognisable for
                    its dark vertical stripes on orange-brown fur with a lighter
                    underside. It is an apex predator, primarily preying on
                    ungulates such as deer and wild boar.
                  </div>
                  <div
                    class="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                    action="goto"
                    goto="2"
                  >
                    Goto Third Frame
                  </div>
                  <div
                    class="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                    action="goto"
                    goto="end"
                  >
                    Goto Last Frame
                  </div>
                </div>
              </div>
            </div>

            <div class="each-frame border-box flex-none h-full" title="Lion">
              <div class="main flex w-full p-8">
                <div class="sub w-4/6 my-auto">
                  <img
                    class="w-full p-8"
                    src="https://image.freepik.com/free-vector/cute-lion-cartoon_160606-353.jpg"
                    alt="test"
                  />
                </div>
                <div class="sub w-full my-auto">
                  <div class="head text-3xl font-bold mb-4">The Lion</div>
                  <div class="long-text text-lg">
                    The lion is a species in the family Felidae and a member of
                    the genus Panthera. It has a muscular, deep-chested body,
                    short, rounded head, round ears, and a hairy tuft at the end
                    of its tail. It is sexually dimorphic; adult male lions have
                    a prominent mane.
                  </div>
                </div>
              </div>
            </div>

            <div class="each-frame border-box flex-none h-full" title="Rat">
              <div class="main flex w-full p-8">
                <div class="sub w-4/6 my-auto">
                  <img
                    class="w-full p-8"
                    src="https://i.pinimg.com/originals/07/1d/d0/071dd09d7b36e49139fe2cf08ff728a8.jpg"
                    alt="test"
                  />
                </div>
                <div class="sub w-full my-auto">
                  <div class="head text-3xl font-bold mb-4">The Rat</div>
                  <div class="long-text text-lg">
                    Rats are various medium-sized, long-tailed rodents. Species
                    of rats are found throughout the order Rodentia, but
                    stereotypical rats are found in the genus Rattus. Other rat
                    genera include Neotoma, Bandicota and Dipodomys. Rats are
                    typically distinguished from
                  </div>
                </div>
              </div>
            </div>

            <div class="each-frame border-box flex-none h-full" title="Owl">
              <div class="main flex w-full p-8">
                <div class="sub w-4/6 my-auto">
                  <img
                    class="w-full p-8"
                    src="https://image.freepik.com/free-vector/cartoon-owl-tree-branch_194935-43.jpg"
                    alt="test"
                  />
                </div>
                <div class="sub w-full my-auto">
                  <div class="head text-3xl font-bold mb-4">The Owl</div>
                  <div class="long-text text-lg">
                    Owls are birds from the order Strigiformes, which includes
                    over 200 species of mostly solitary and nocturnal birds of
                    prey typified by an upright stance, a large, broad head,
                    binocular vision, binaural hearing, sharp talons, and
                    feathers adapted for silent flight.
                  </div>
                  <div
                    class="goto border border-gray-400 text-sm font-semibold inline-block mt-2 p-1 px-2 rounded cursor-pointer"
                    action="goto"
                    goto="0"
                  >
                    Goto First Frame
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<style>
.platform {
  position: relative;
  transition: right 0.3s;
}

.body {
  background-color: white !important;
}
</style>
