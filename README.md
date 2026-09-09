# KortexPetShop

Site demonstrativo completo de um petshop fictício, com página institucional, lojinha interativa, sacola de orçamento e integração contextual com WhatsApp.

## Recursos

- Página inicial responsiva com história, serviços, equipe, depoimentos, galeria, FAQ e contato
- Lojinha com busca e filtros por categoria
- Sacola com ajuste de quantidades e total estimado
- Mensagens de WhatsApp diferentes para cada serviço e produto
- Menu adaptado para celular
- Página 404 personalizada
- Imagens originais armazenadas no próprio repositório
- Navegação por teclado e suporte a movimento reduzido

## Executar localmente

Requer Node.js 22.13 ou superior.

```bash
npm install
npm run dev
```

Depois, acesse `http://localhost:3000`.

## Gerar a versão de produção

```bash
npm run build
```

## Estrutura principal

```text
app/                  Páginas, metadados e estilos globais
components/           Cabeçalho, rodapé, loja e componentes reutilizáveis
public/images/        Ilustrações locais do projeto
```

## Observação

Este é um projeto demonstrativo. Nomes de profissionais, endereço, preços e demais dados comerciais são fictícios. O número de WhatsApp foi configurado conforme o briefing do projeto.
