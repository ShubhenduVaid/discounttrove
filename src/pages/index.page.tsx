import { Box } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { HeroBanner } from "@src/components/features/hero-banner";
import { ProductTileGrid } from "@src/components/features/product";
import { SeoFields } from "@src/components/features/seo";
import { client } from "@src/lib/client";

const Page = ({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      <HeroBanner {...page} />
      {page.productsCollection?.items && (
        <Box
          mt={{
            base: 5,
            md: 9,
            lg: 16,
          }}
        >
          <ProductTileGrid
            title="Trending Now"
            products={page.productsCollection.items}
          />
        </Box>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  try {
    const data = await client.pageLanding({ locale });

    const page = data.pageLandingCollection?.items[0];

    if (!page) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        page,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
};

export default Page;
