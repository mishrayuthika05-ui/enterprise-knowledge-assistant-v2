import { useState } from "react";
import axios from "axios";

function Chat() {
  const [question, setQuestion] = useState("");
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  const askQuestion = async () => {
    if (!question.trim()) {
      alert("Please enter a question.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/ask`,
        {
          question,
        }
      );

      setChatHistory((prev) => [
        ...prev,
        {
          question,
          answer: response.data.answer,
        },
      ]);

      setQuestion("");
    } catch (error) {
      console.error(error);

      setChatHistory((prev) => [
        ...prev,
        {
          question,
          answer: "❌ Failed to get response.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Ask Question</h2>

      <input
        type="text"
        placeholder="Ask a question..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            askQuestion();
          }
        }}
      />

      <br />
      <br />

      <button onClick={askQuestion} disabled={loading}>
        {loading ? "Thinking..." : "Ask"}
      </button>

      <hr />

      {chatHistory.map((chat, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
            background: "#fafafa",
          }}
        >
          <strong>Question:</strong>
          <p>{chat.question}</p>

          <strong>Answer:</strong>
          <p>{chat.answer}</p>
        </div>
      ))}
    </div>
  );
}

export default Chat;