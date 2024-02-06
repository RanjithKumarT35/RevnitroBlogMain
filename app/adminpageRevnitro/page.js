"use client";
import { useState } from "react";

export default function Contact() {
  const [inputs, setInputs] = useState({});
  const [message, setMessage] = useState("");
  const apiURL = process.env.NEXT_PUBLIC_API_URL;

  const handleInput = (e) => {
    setInputs((state) => {
      return { ...state, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/enquiry`, {
      method: "POST",
      body: JSON.stringify(inputs),
    })
      .then((res) => res.json())
      .then((res) => {
        setMessage(res.message);
        setInputs({});
        setTimeout(() => {
          setMessage("");
        }, 3000);
      });
  };

  return (
    <div>
      <main class="container mx-auto px-4 py-6" style={{ background: "#fff" }}>
        <h2
          class="text-4xl font-bold mb-4"
          style={{ textAlign: "center", color: "black" }}
        >
          Admin Page
        </h2>
        <form
          onSubmit={handleSubmit}
          class="w-full max-w-lg"
          style={{ marginTop: "40px" }}
        >
          {/*------------------------------ Default Code --------------------------*/}
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title:
            </label>
            <input
              name="title"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name"
              value={inputs.title ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="email" class="w-1/4" style={{ color: "black" }}>
              Image:
            </label>
            <input
              name="image"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              value={inputs.image ?? ""}
              id="email"
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Main&nbsp;Description&nbsp;:
            </label>
            <textarea
              name="description"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title1:
            </label>
            <input
              name="title1"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name1"
              value={inputs.title1 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="email" class="w-1/4" style={{ color: "black" }}>
              Image Link 1:
            </label>
            <input
              name="image1"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              value={inputs.image1 ?? ""}
              id="email"
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>

          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description1 :
            </label>
            <textarea
              name="description1"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description1 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>

          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title2:
            </label>
            <input
              name="title2"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name2"
              value={inputs.title2 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="email" class="w-1/4" style={{ color: "black" }}>
              Image Link 2:
            </label>
            <input
              name="image2"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              value={inputs.image2 ?? ""}
              id="email"
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>

          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description2 :
            </label>
            <textarea
              name="description2"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description2 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title3:
            </label>
            <input
              name="title3"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name3"
              value={inputs.title3 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="email" class="w-1/4" style={{ color: "black" }}>
              Image Link 3:
            </label>
            <input
              name="image3"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              value={inputs.image3 ?? ""}
              id="email"
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>

          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description3 :
            </label>
            <textarea
              name="description3"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description3 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title4:
            </label>
            <input
              name="title4"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name4"
              value={inputs.title4 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="email" class="w-1/4" style={{ color: "black" }}>
              Image Link 4:
            </label>
            <input
              name="image4"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              value={inputs.image4 ?? ""}
              id="email"
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description4 :
            </label>
            <textarea
              name="description4"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description4 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title5:
            </label>
            <input
              name="title5"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name5"
              value={inputs.title5 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="email" class="w-1/4" style={{ color: "black" }}>
              Image Link 5:
            </label>
            <input
              name="image5"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              value={inputs.image5 ?? ""}
              id="email"
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description5 :
            </label>
            <textarea
              name="description5"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description5 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title6:
            </label>
            <input
              name="title6"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name6"
              value={inputs.title6 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="email" class="w-1/4" style={{ color: "black" }}>
              Image Link 6:
            </label>
            <input
              name="image6"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              value={inputs.image6 ?? ""}
              id="email"
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>

          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description6 :
            </label>
            <textarea
              name="description6"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description6 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title7:
            </label>
            <input
              name="title7"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name7"
              value={inputs.title7 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description7 :
            </label>
            <textarea
              name="description7"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description7 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>

          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title8:
            </label>
            <input
              name="title8"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name8"
              value={inputs.title8 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description8 :
            </label>
            <textarea
              name="description8"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description8 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title9:
            </label>
            <input
              name="title9"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name9"
              value={inputs.title9 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description9 :
            </label>
            <textarea
              name="description9"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description9 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title10:
            </label>
            <input
              name="title10"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name10"
              value={inputs.title10 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description10 :
            </label>
            <textarea
              name="description10"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description10 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title11:
            </label>
            <input
              name="title11"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name11"
              value={inputs.title11 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description11 :
            </label>
            <textarea
              name="description11"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description11 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title12:
            </label>
            <input
              name="title12"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name12"
              value={inputs.title12 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description12 :
            </label>
            <textarea
              name="description12"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description12 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title13:
            </label>
            <input
              name="title13"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name13"
              value={inputs.title13 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description13 :
            </label>
            <textarea
              name="description13"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description13 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>

          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title14:
            </label>
            <input
              name="title14"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name14"
              value={inputs.title14 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description14 :
            </label>
            <textarea
              name="description14"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description14 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title15:
            </label>
            <input
              name="title15"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name15"
              value={inputs.title15 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description15 :
            </label>
            <textarea
              name="description15"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description15 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="name" class="w-1/4" style={{ color: "black" }}>
              Title16:
            </label>
            <input
              name="title16"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              type="text"
              id="name16"
              value={inputs.title16 ?? ""}
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>
          <div class="flex items-center mb-4">
            <label htmlFor="message" class="w-1/4" style={{ color: "black" }}>
              Description16 :
            </label>
            <textarea
              name="description16"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.description16 ?? ""}
              id="message"
              class="border rounded px-2 py-1 w-3/4"
              rows="3"
            ></textarea>
          </div>
          {/* ttttttttttttttttttttttttttttttttt */}

          {/*------------------------------ Description Extra Code --------------------------*/}

          <div class="flex items-center mb-4">
            <label htmlFor="email" class="w-1/4" style={{ color: "black" }}>
              Date:
            </label>
            <input
              name="created_at"
              style={{ color: "black", border: "1px solid black" }}
              onChange={handleInput}
              value={inputs.created_at ?? ""}
              placeholder="Month-Date-Year (12-01-2023)"
              type="text"
              id="email"
              class="border rounded px-2 py-1 w-3/4"
            />
          </div>

          <button
            type="submit"
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
        <div
          style={{
            marginTop: "30px",
            textAlign: "center",
            fontSize: "26px",
            color: "black",
          }}
        >
          {message && <p>{message}</p>}
        </div>
      </main>
    </div>
  );
}
