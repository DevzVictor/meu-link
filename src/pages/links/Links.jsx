import { useState, useEffect } from "react";
import "./Links.css";
import { FiArrowLeft, FiLink, FiTrash } from "react-icons/fi";
import { Link } from "react-router-dom";
import { getLinksSave, deleteLink } from "../../services/StoreLinks";
import LinkItem from "../../components/LinkItem/LinkItem";

function Links() {
  //renderizar os links na pagina
  const [myLinks, setMyLinks] = useState([]);

  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  const [emptyList, setEmptyList] = useState(false);

  useEffect(() => {
    async function getLinks() {
      const result = await getLinksSave("@encurtaLink");

      if (result.length === 0) {
        //nossa lista está vazia
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLinks();
  }, []);

  function handleOpenLink(link){
    setData(link);
    setShowModal(true);
  }

  async function handleDelete(id){
    const result = await deleteLink(myLinks, id);

    if(result.length === 0){
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <div className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#293C66" />
        </Link>

        <h1>Meus Links</h1>
      </div>

      { emptyList && (
        
        <div className="links-item">
          <h2 className="empty-text"> Sua lista está vazia...</h2>
        </div>

      )}

      {myLinks.map((link) => ( //renderizando os itens na tela
        <div key={link.id} className="links-item">

          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color="#fff" />
            {link.long_url}
          </button>

          <button className="link-delete" onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#FF5454" />
          </button>

        </div>
      ))}


      { showModal && (
        <LinkItem 
          closeModal={ () => setShowModal(false) }
          content={data}
        />
      )}

    </div>
  );
}

export default Links;
