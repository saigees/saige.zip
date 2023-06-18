"use client";
import resources from "./data";

export default function Projects() {
  return (
    <div className="flex flex-wrap smallest:flex-col  gap-2">
      {resources.map((resource) => {
        return (
          <div
            key={Math.floor(Math.random() * 99999999)}
            onClick={() => window.location.href = resource.url}
            className="group cursor-pointer h-[245px] w-[300px] mobile:w-[45%] smallest:w-[100%] rounded-lg border bg-white bg-opacity-30 p-2"
          >
            <div className="relative min-h-[140px] h-[50%] w-[100%] overflow-hidden rounded-lg ">
              <img
                src={resource.img}
                draggable={false}
                alt=""
                className="rounded-lg shadow-md h-[100%] w-[100%] object-cover scale-[1] group-hover:scale-[1.05] bounce"
              />
             {resource.stat ?  <div className={`absolute bottom-0 left-[2%] right-0 top-[77%] w-fit h-fit rounded-full px-2 py-1 ${resource.type === "dark" ? "bg-white text-black" : "bg-black text-white"}  bg-opacity-40`}>
                <p className="text-[12px]">
                {resource.stat}
                </p>
              </div> : <></>}
            </div>
            <div className="pl-0 p-3">
              <h1 className="font-bold text-lg">{resource.name}</h1>
                <p className="whitespace-normal">{resource.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
