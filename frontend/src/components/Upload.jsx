import { useState } from "react";
import axios from "axios";

function Upload() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file.");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/upload`,
        formData
      );

      setMessage("✅ " + response.data.status);
    } catch (error) {
      console.error(error);

      if (error.response) {
        setMessage(
          "❌ " +
            (error.response.data.detail ||
              JSON.stringify(error.response.data))
        );
      } else {
        setMessage("❌ " + error.message);
      }
    }

    setLoading(false);
  };

  return (
    <div>
      <h2>Upload Document</h2>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br />
      <br />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>

      <br />
      <br />

      <p>{message}</p>
    </div>
  );
}

export default Upload;