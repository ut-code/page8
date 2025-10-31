"use client";
import { type ReactElement } from "react";
import { useNavigate } from "react-router";
import { updateWeight0 } from "~/random";
import { stages } from "~/stages";

function Example({
  title,
  description,
  code,
  element,
}: {
  title: string;
  description: string;
  code: string;
  element: ReactElement;
}) {
  return (
    <div className="mt-5 mb-5 ml-20 mr-20">
      <div className="text-2xl underline">{title}</div>
      <div className="flex h-70">
        <span className="w-1/2 m-4">{description}</span>
        <span className="w-1/2 flex flex-col">
          <code className="whitespace-pre-wrap p-4 bg-neutral-900 border border-gray-600 rounded-lg h-2/3 m-2 text-[0.8rem]">
            {code.trim()}
          </code>
          <div className="border border-gray-600 rounded-lg bg-white h-1/3 m-2 flex justify-center items-center">
            {element}
          </div>
        </span>
      </div>
    </div>
  );
}

export default function EnglishAnomaly() {
  const navigate = useNavigate();
  const pageNum = Number(localStorage.getItem("pageNum")); // ページ番号0~8

  return (
    <div className="text-white opacity-0 animate-fadeIn">
      <div
        className="top-0 fixed bg-[#091b0c] border-b-2 border-gray-500 w-full h-20 flex items-center justify-between px-8"
        style={{ zIndex: 2 }}
      >
        <span>
          <span className="text-6xl text-yellow-400">{pageNum}. </span>
          <span className={"text-4xl"}>Welcome</span>
        </span>

        <button
          className="bg-red-500 text-2xl p-3 border-2 border-black cursor-pointer"
          onClick={() => navigate("/")}
        >
          Quit game
        </button>
      </div>
      <button
        className="bg-[orangered] text-2xl p-3 border-2 border-black mt-30 ml-10 cursor-pointer"
        onClick={() => {
          stages.filter((s) => s.id === 11 && s.state !== "isDetected")[0].state = "isDetectedNew";
          stages.filter((s) => s.id === 11)[0].weight = 0;
          updateWeight0(stages);
          if (pageNum === 8) {
            navigate("/end");
          } else {
            localStorage.setItem("pageNum", `${pageNum + 1}`);
            navigate("/game");
          }
        }}
      >
        ← Go back
      </button>
      <div className="w-4/5 ml-auto mr-auto">
        <div className="font-bold text-center text-8xl underline decoration-[orangered]">
          Welcome
        </div>
        <div className="mt-10 mb-10">
          In this game, we mainly use a language called "CSS" to make the
          anomalies! Let's take a quick look at CSS here.
        </div>
        <div className="bg-[orangered] h-0.5"></div>
        <div className="mt-10 mb-10">
          <div className="mb-5">
            In web development, these 3 languages play an important role.
          </div>
          <ul className="space-y-6">
            <li className="p-4 border border-gray-600 rounded-lg">
              <dl>
                <dt className="font-bold text-2xl text-[orangered]">HTML</dt>
                <dd className="mt-1 text-lg">
                  A language that creates the framework of the web page.
                </dd>
              </dl>
            </li>
            <li className="p-4 border border-gray-600 rounded-lg">
              <dl>
                <dt className="font-bold text-2xl text-[orangered]">CSS</dt>
                <dd className="mt-1 text-lg">
                  A language that creates the appearance of the web page.
                </dd>
              </dl>
            </li>
            <li className="p-4 border border-gray-600 rounded-lg">
              <dl>
                <dt className="font-bold text-2xl text-[orangered]">
                  JavaScript
                </dt>
                <dd className="mt-1 text-lg">
                  A language that can add movement to the web page and run
                  complex algorithms.
                </dd>
              </dl>
            </li>
          </ul>
          <div className="mt-10">
            CSS is crutial in designing web pages. Let's look at some examples.
          </div>
        </div>
        <div className="text-4xl underline decoration-[orangered]">
          CSS examples
        </div>
        <Example
          title="1. Customizing texts"
          description="In the example on the right, the text color is determined by the “color” property, the text size is determined by the “font-size” property, and the boldness of the text is determined by the “font-weight” property. Besides these, you can also do things such as underlining and changing the font."
          code={
            ".text {\n  color: blue;\n  font-size: 60px;\n  font-weight: 800;\n}"
          }
          element={
            <div className="text-[#0000ff] text-6xl font-sans font-extrabold">
              Hello!
            </div>
          }
        />
        <Example
          title="2. Customizing buttons"
          description="In the example on the right, the border is created by the “border” property, and the shadow is created by the “box-shadow” property. Also, inside the “.button:active”, you can determine the style of the button when it is pressed down. In the example, the button turns red by the “background-color” property, and the shadow disappears by putting “none” in the “box-shadow” property."
          code={
            ".button {\n  border: 2px solid black;\n  box-shadow: 2px 2px 5px;\n}\n.button:active {\n  background-color: red;\n  box-shadow: none;\n}"
          }
          element={
            <button className="border-2 border-black shadow-[2px_2px_5px] active:bg-red-500 active:shadow-none font-sans text-black cursor-pointer">
              Click me!
            </button>
          }
        />
        <Example
          title="3. Customizing images"
          description="In the example on the right, the “width”, “height” properties determine the size of the image, the “transform” property determines the rotation angle, and the “filter” property makes the image black-and-white."
          code={
            ".img {\n  width: 200px;\n  height: 100px;\n  transform: rotate(6deg);\n  filter: grayscale(100%);\n}"
          }
          element={
            <img
              src="/image.png"
              className="w-40 h-20 rotate-6 grayscale"
            ></img>
          }
        />
      </div>
      <div className="flex justify-end mr-10">
        <button
          className="bg-[orangered] text-2xl p-3 border-2 border-black cursor-pointer mb-80"
          onClick={() => {
            stages.filter((s) => s.id === 11)[0].state = "isNotDetected";
            localStorage.setItem("pageNum", "0");
            navigate("/game");
          }}
        >
          Next →
        </button>
      </div>
      <div className="flex ml-10">
        <button
          className="bg-[orangered] text-2xl p-3 border-2 border-black cursor-pointer mb-10"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          Back to top
        </button>
      </div>
    </div>
  );
}
