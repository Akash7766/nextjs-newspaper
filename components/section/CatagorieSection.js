import React from "react";
import SectionHeader from "../SectionHeader";
import SquareCard from "../SquareCard";
import TextCard from "../TextCard";

const CatagorieSection = ({ news }) => {
  console.log(news);
  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="custom-border">
          <SectionHeader
            title={news[0]?.name}
            link={`/category/${news[0]?.name}`}
          />
          <SquareCard news={news[0]?.news[0]} />
          <TextCard news={news[0]?.news[1]} />
          <TextCard news={news[0]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[1]?.name}
            link={`/category/${news[1]?.name}`}
          />
          <SquareCard news={news[1]?.news[0]} />
          <TextCard news={news[1]?.news[1]} />
          <TextCard news={news[1]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[2]?.name}
            link={`/category/${news[2]?.name}`}
          />
          <SquareCard news={news[2]?.news[0]} />
          <TextCard news={news[2]?.news[1]} />
          <TextCard news={news[2]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[3]?.name}
            link={`/category/${news[3]?.name}`}
          />
          <SquareCard news={news[3]?.news[0]} />
          <TextCard news={news[3]?.news[1]} />
          <TextCard news={news[3]?.news[2]} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        <div className="custom-border">
          <SectionHeader
            title={news[4]?.name}
            link={`/category/${news[4]?.name}`}
          />
          <SquareCard news={news[4]?.news[0]} />
          <TextCard news={news[4]?.news[1]} />
          <TextCard news={news[4]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[5]?.name}
            link={`/category/${news[5]?.name}`}
          />
          <SquareCard news={news[5]?.news[0]} />
          <TextCard news={news[5]?.news[1]} />
          <TextCard news={news[5]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[6]?.name}
            link={`/category/${news[6]?.name}`}
          />
          <SquareCard news={news[6]?.news[0]} />
          <TextCard news={news[6]?.news[1]} />
          <TextCard news={news[6]?.news[2]} />
        </div>
        <div className="custom-border">
          <SectionHeader
            title={news[7]?.name}
            link={`/category/${news[7]?.name}`}
          />
          <SquareCard news={news[7]?.news[0]} />
          <TextCard news={news[7]?.news[1]} />
          <TextCard news={news[7]?.news[2]} />
        </div>
      </div>
    </>
  );
};

export default CatagorieSection;
