import { useState } from "react";
import { FiLink } from "react-icons/fi";
import "./Home.css";

import Menu from "../../components/menu/Menu";
import LinkItem from "../../components/LinkItem/LinkItem";

import api from "../../services/Api";
import { saveLink } from "../../services/StoreLinks";

function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);
      saveLink("@encurtaLink", response.data);
      setLink("");
      
    } catch {
      alert("ops parece que algo deu errado");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <div className="logo">
        <img src="/logo.png" alt="Logo meu Link" />
        <h1>Meu Link</h1>
        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#FFF" />
          <input
            type="text"
            placeholder="Cole seu link aqui ..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Gerar Link</button>
      </div>

      <Menu />

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </div>
  );
}

export default Home;
