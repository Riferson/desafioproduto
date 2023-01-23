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
import { useState } from "react";

export function ProductDescription() {
  const {id} = useParams();
  
  return (
    <Container>
      <Title>Produto {id}</Title>
      <ProductDetails>
        <ContentDetails>
            <ProductImageArea>
            <ProductImage src="#" />
            </ProductImageArea>
            <Value>Valor: R$ 23,50</Value>
        </ContentDetails>
        <ProductDescriptionArea>
            <ProductDescriptions>
            Descrição do produto de forma bem detalhada
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
