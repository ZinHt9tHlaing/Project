import SectionTitle from "../SectionTitle";
import WorkItems from "./WorkItems";
import works from "../data/works";

const Works = () => {
  return (
    <div className=" py-12">
      <SectionTitle id="works">Recent Works</SectionTitle>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {works.map((work) => (
          <WorkItems
            key={work.title}
            title={work.title}
            imgUrl={work.imgUrl}
            tech={work.tech}
            workUrl={work.workUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
