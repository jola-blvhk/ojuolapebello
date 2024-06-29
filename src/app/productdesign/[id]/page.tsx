"use client";

import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { productDesignDetails } from "@/constants/details";
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
  const detail = productDesignDetails.find(
    (item) => normalizeTitle(item.title) === normalizedId
  );

  const renderLongDescription = (description: any) => {
    return description.split("\n\n").map((paragraph: string, index: number) => (
      <p key={index} className="pb-5 md:pb-6 lg:pb-7">
        {paragraph}
      </p>
    ));
  };

  return (
    <>
      <Head>
        <title>{detail?.brandName} | Guaba</title>
      </Head>
      <ProductDesignPage
        brandBgImage={detail?.brandBgImage}
        brandLogo={detail?.brandLogo?.src}
        brandName={detail?.brandName}
        description={detail?.description}
        width={detail?.width}
        height={detail?.height}
        review={detail?.review}
        reviewerName={detail?.reviewerName}
        reviewerJobPosition={detail?.reviewerJobPosition}
        longDescription={renderLongDescription(detail?.longDescription)}
        descriptionImage={detail?.descriptionImage}
      />
    </>
  );
};

export default ProductDesignDetails;
