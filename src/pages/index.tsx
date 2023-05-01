import { Box } from "@chakra-ui/react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";

import { ProductTileGrid } from "@src/components/features/product";
import { SeoFields } from "@src/components/features/seo";
import { client } from "@src/lib/client";
import { SearchBar } from "@src/components/features/search";

const Page = ({
  page,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  type undefString = string | undefined;
  const router = useRouter();
  const imgUrl = router.query.img as undefString;
  const price = router.query.price as undefString;

  return (
    <>
      {page.seoFields && <SeoFields {...page.seoFields} />}
      {<SearchBar imageUrl={imgUrl} price={price} />}
      {page.productsCollection?.items && (
        <Box
          mt={{
            base: 5,
            md: 9,
            lg: 16,
          }}
        >
          <ProductTileGrid
            title="Thoughtfully Picked Treasures"
            products={page.productsCollection.items}
          />
        </Box>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    context.res.setHeader(
      "Cache-Control",
      `public, max-age=${process.env.CACHE_CONTROL_MAX_AGE}`
    );

    const data = await client.pageLanding();

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
  } catch (error) {
    console.error("slug ", error);
    return {
      notFound: true,
    };
  }
};

export default Page;
