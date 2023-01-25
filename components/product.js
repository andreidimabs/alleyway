import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import productImage from "../src/images/product.jpg";
const product = (props) => {
  const [productName, setProductName] = useState("");
  const [options, setOptions] = useState([]);
  const [variants, setVariants] = useState([]);
  const [active, setActive] = useState("false");
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://9xozpkins4.execute-api.ap-southeast-1.amazonaws.com/dev/api/product"
      );
      setProductName(response?.data?.product?.name);
      setOptions(response?.data?.product?.options);
      setVariants(response?.data?.product?.variants);
    };
    fetchData();
  }, []);
  const newVariant = variants.map((item) => item);
  const updateVariants = () => {
    setVariants(newVariant);
  };

  const handleClick = () => {
    setActive(true);
  };
  return (
    <div className="flex justify-center">
      <div className="col-span-3 mr-20 items-center">
        <div className="mt-5 text-base text-[#707070]">
          <p>
            {"Shop > Mobile phones > Samsung > "}{" "}
            <span className="font-bold text-black">{productName}</span>
          </p>
        </div>
        <div className="pl-0 pr-0 mr-16">
          <Image src={productImage} width="450" height="370" />
        </div>
      </div>
      <div className="col-span-9 w-96 mt-16">
        <h1 className="font-semibold text-center text-xl">{productName}</h1>
        {Object.keys(variants).map((color) => {
          return (
            <p className="font-semibold text-center text-xl">
              {variants[color].name}
            </p>
          );
        })}
        <p>{newVariant.name}</p>

        <p className="mx-0 mb-2.5 underline text-center text-[#707070]">
          Mobile phones:
        </p>

        {Object.keys(variants).map((color) => {
          return (
            <p className="text-xl mt-2.5 font-semibold text-center text-[#f36d22]">
              P{variants[color].price}
            </p>
          );
        })}
        <p className="text-xl mt-2.5 font-semibold text-center text-[#f36d22]">
          P{newVariant.price}
        </p>

        <p className="mx-0 mb-2.5 underline text-center text-[#707070]">
          variants:
        </p>
        <div className="pl-0 pr-0 border:1px solid #126B60;padding:0.9vw">
          <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">
            COLOR:
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              value="BLUE"
              className="w-28 m-1 p-0 text-xs bg-[#126B60] text-white"
              onClick={(e) => updateVariants(e)}
            >
              BLUE
            </button>
            <button
              value="BLACK"
              className="w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]"
              onClick={(e) => updateVariants(e)}
            >
              BLACK
            </button>
            <button
              value="WHITE"
              className="w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]"
              onClick={(e) => updateVariants(e)}
            >
              WHITE
            </button>
          </div>
        </div>
        <div className="pl-0 pr-0 border:1px solid #126B60;padding:0.9vw">
          <p className="text-xs mx-0 mb-1 font-semibold text-center text-[#126B60]">
            MEMORY:
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              value="BLUE"
              className="w-28 m-1 p-0 text-xs bg-[#126B60] text-white"
            >
              32GB
            </button>
            <button
              value="BLACK"
              className="w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]"
            >
              64GB
            </button>
            <button
              value="WHITE"
              className="w-28 m-1 p-0 text-xs bg-[#f0f0f0] text-[#126B60]"
            >
              256GB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
