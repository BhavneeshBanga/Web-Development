"use client";

export default function Home() {

  const sendData = async () => {

    const response = await fetch("/api/app", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Bhavneesh",
        age: 20,
      }),
    });

    const data = await response.json();

    console.log("Response from server:");
    console.log(data);
  };

  return (
    <div>
      <h1>Testing POST Request</h1>

      <button onClick={sendData}>
        Send Data
      </button>
    </div>
  );
}