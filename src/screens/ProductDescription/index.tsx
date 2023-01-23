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

export function ProductDescription() {
  const {id} = useParams();
  const [produto,setProduto] = useState<ProductsDTO>();
  
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
        <Button title="Remover" />
      </OptionsButtons>
    </Container>
  );
}
