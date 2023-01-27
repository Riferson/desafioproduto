import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductsDTO } from "../../dtos/ProductsDTO";
import { api } from "../../services/api";
import { Container, Title, FormArea, ImgPreview, Save } from "./styles";
import { v4 as uuidv4 } from "uuid";


export function RegisterChangeProducts() {
  const [name, SetName] = useState("");
  const [valor, SetValor] = useState(0);
  const [description, SetDescription] = useState("");
  const [image, SetImage] = useState("#");
  const { id } = useParams();
  const [produto, setProduto] = useState<ProductsDTO>();
  const [isloading, setIsLoading] = useState(false);
  const [file, setFile] = useState("");

  const data = {
    idProduto: uuidv4(),
    descricao: description,
    imagem: image,
    nome: name,
    preco: valor,
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        if (!id) return;

        const response = await api.get(`/produto/${id}`);
        SetName(produto?.nome!);
        SetValor(produto?.preco!);
        SetDescription(produto?.descricao!);

        setIsLoading(true);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  }, [isloading]);

  const uploadImage = async (e: any) => {
    const formData = new FormData();
    formData.append("image", file);
    console.log("file", file);
    const headers = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    await api
      .post("/upload-image", formData, headers)
      .then((response) => console.log(response))
      .catch((err) => {
        if (err.response) {
          console.log(err.response);
        } else {
          console.log("tente mais tarde");
        }
      });
  };

  async function atualizarDados() {
    if (data.preco < 0 || data.descricao == "" || data.nome == "") {
      console.log(data);
      alert(
        "Campo Vazio ou numero negativo,por favor corrija preenchendo os campos ou com numero positivos"
      );
      return;
    }
    try {
      if (id) {
        console.log("data put", data);
        data.idProduto = id;
        await api.put(`/produto/${data.idProduto}`, data);
      } else {
        uploadImage(null);
        const response = await api.post("/produto/", data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Title>Cadastro / Alteração</Title>
      <FormArea>
        <h4>Produto</h4>
        <input
          type="text"
          value={name}
          onChange={(event) => SetName(event.target.value)}
        />
        <h4>Valor</h4>
        <input
          type="number"
          value={valor}
          onChange={(event) => SetValor(Number(event.target.value))}
        />
        <h4>Descrição</h4>
        <input
          type="text"
          value={description}
          onChange={(event) => SetDescription(event.target.value)}
        />
        <form action="/profile" method="post" encType="multipart/form-data">
          <input
            type="file"
            onChange={(event: any) => setFile(event.target.files[0])}
          />
        </form>

        <ImgPreview
          src={"https://www.actbus.net/fleetwiki/images/8/84/Noimage.jpg"}
          alt="teste"
        />

        <Link to={"/"}>
          <Save type="submit" value="Salvar" onClick={atualizarDados} />
        </Link>
      </FormArea>
    </Container>
  );
}
