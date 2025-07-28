import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import { Icon } from "@iconify/react";

const Instructors = ({ sections, loading }) => {
  const instructors = sections?.find(
    (section) => section.type === "instructors"
  );

  if (loading) {
    return (
      <div className="flex items-center space-x-4">
        <Skeleton className="h-16 w-16 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-10 w-[350px]" />
          <Skeleton className="h-10 w-[300px]" />
        </div>
      </div>
    );
  }

  if (!instructors && !loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <p className="text-lg text-muted-foreground">No instructors found</p>
      </div>
    );
  }

  return (
    <section className="px-2 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl mb-4">
          {instructors.name}  
        </h2>
        <div className="">
          {instructors?.values?.map((item, index) => (
            <div
              key={index}
              className="flex flex-row items-center gap-6 rounded-xl p-6 border"
            >
              <Avatar className="w-20 h-20 ring-2 ring-primary/10 group-hover:ring-primary/30 transition-all duration-300">
                <AvatarImage src={item?.image} alt={item?.name} />
                <AvatarFallback className="text-lg font-medium bg-primary/10 text-primary">
                  {item.name?.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-xl flex space-x-[2px] hover:text-[#1DAA55] font-semibold text-foreground mb-2">
                  <span>{item.name}</span>
                   <Icon icon="lsicon:right-outline" className="text-2xl mt-[2px] text-[#1DAA55] " />
                </h3>
                {item?.description && (
                  <div
                    className="text-sm font-medium leading-relaxed max-w-2xl"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
