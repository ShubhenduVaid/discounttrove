import { Box } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import {
  ProductDetails,
  ProductTileGrid,
} from "@src/components/features/product";
import { SeoFields } from "@src/components/features/seo";
import { client } from "@src/lib/client";

const Page = ({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {product.seoFields && <SeoFields {...product.seoFields} />}
      <ProductDetails {...product} />
      {product.relatedProductsCollection?.items &&
        product.relatedProductsCollection?.items.length > 0 && (
          <Box
            mt={{
              base: 5,
              md: 9,
              lg: 16,
            }}
          >
            <ProductTileGrid
              title="Products related to this item"
              products={product.relatedProductsCollection.items}
            />
          </Box>
        )}
      {product.categoriesCollection?.items &&
        product.categoriesCollection?.items.length > 0 && (
          <Box
            mt={{
              base: 5,
              md: 9,
              lg: 16,
            }}
          >
            <ProductTileGrid
              title="Trending Now"
              products={product.categoriesCollection.items}
            />
          </Box>
        )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  params,
  locale,
  res,
}) => {
  res.setHeader("Cache-Control", "public, max-age=1800");

  if (!params?.slug) {
    return {
      notFound: true,
    };
  }

  try {
    const data = await client.pageProduct({
      slug: params.slug.toString(),
      locale,
    });
    const product = data.pageProductCollection?.items[0];

    if (!product) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        product,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Page;
