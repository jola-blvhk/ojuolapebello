"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { details } from "@/constants/details";
import { normalizeTitle } from "@/constants/functions";

const ProductDesignPage = dynamic(
  () => import("@/components/ProductDesignPages"),
  {
    ssr: false,
  }
);

const ProductDesignDetails = ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const normalizedId = normalizeTitle(params.id);
  const detail = details.find(
    (item) => normalizeTitle(item.title) === normalizedId
  );

  return (
    <>
      <Head>
        <title>{detail?.brandName} | Guaba</title>
      </Head>
      <ProductDesignPage
        brandBgImage={detail?.brandBgImage}
        brandLogo={detail?.brandLogo?.src}
        date={detail?.date}
        brandName={detail?.brandName}
        description={detail?.description}
      />
    </>
  );
};

export default ProductDesignDetails;
