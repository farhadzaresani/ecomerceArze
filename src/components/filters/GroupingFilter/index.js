import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";
import ToggleButton from "@/components/ui/Buttons/ToggleButton";
import AccordionItem from "./AccordionItem";

const GroupingFilter = ({ categories, filter, setFilter, isLoaded }) => {
  return (
    <div className='pt-10 mx-10 border-b-2 '>
      <div className='flex justify-between'>
        <div className='flex items-center gap-3'>
          <h2 className='text-navy font-medium'> دسته بندی</h2>
          <div className='h-1.5 w-1.5 bg-cream rounded-full'></div>
        </div>
        <ChevronUpIcon className='h-5 w-5 text-gray-500' />
      </div>
      <div className='   max-h-96 overflow-auto'>
        <AccordionItem isLoaded={isLoaded} title={"همه"} data={categories} />
      </div>

      <div className='flex  justify-between pt-5  '>
        <p className='text-navy font-medium text-sm'> فقط کالاهای تخفیف دار </p>
        <ToggleButton />
      </div>
    </div>
  );
};
export default GroupingFilter;
