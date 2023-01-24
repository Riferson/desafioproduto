import {
  Container,
  Title,
  ProductDetails,
  ProductImageArea,
  ProductImage,
  Value,
  ProductDescriptionArea,
  ProductDescriptions,
  OptionsButtons,
  ContentDetails,
} from "./styles";



import { Button } from "../../components/Button";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { ProductsDTO } from "../../dtos/ProductsDTO";
import { DeleteModal } from "../../components/DeleteModal";

export function ProductDescription() {
  const {id} = useParams();
  const [produto,setProduto] = useState<ProductsDTO>();
  const [isDeleteModal,SetIsDeleteModal] = useState(false);

  function handleOpenDeleteModal(){
    SetIsDeleteModal(true);
  }

  function handleCloseDeleteModal(){
    SetIsDeleteModal(false);
  }

  
  useEffect(()=>{
    async function fetchProduct() {
      try {
        const response = await api.get(`/Produto/${id}`);
        setProduto(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  },[]);

  return (
    <Container>
      <DeleteModal isOpen={isDeleteModal} onRequestClose={handleCloseDeleteModal} id={id}/>
      <Title>{produto?.nome}</Title>
      <ProductDetails>
        <ContentDetails>
            <ProductImageArea>
            <ProductImage src="#" />
            </ProductImageArea>
            <Value>Valor: R$ {produto?.preco}</Value>
        </ContentDetails>
        <ProductDescriptionArea>
            <ProductDescriptions>
            {produto?.descricao}
            </ProductDescriptions>
        </ProductDescriptionArea>
      </ProductDetails>

      <OptionsButtons>
        <Link to={`/RegisterChangeProducts/${id}`}>
          <Button title="Editar"/>
        </Link>
        <input type='button' value="Remover" onClick={handleOpenDeleteModal}/>
      </OptionsButtons>
    </Container>
  );
}
