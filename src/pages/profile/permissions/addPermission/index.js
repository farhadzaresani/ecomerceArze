import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  BuildingOfficeIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import size from "react-element-popper/animations/size";
import { useState } from "react";
import { getCookie } from "cookies-next";
import { useMutation } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { setNewPermition } from "@/api/Api's";
import Loading from "@/components/ui/loading/Loading";
import DropDown from "@/components/ui/DropDown/DropDown";

const index = () => {
  const token = getCookie("access");
  const router = useRouter();
  const { control, register, handleSubmit, watch, formState } = useForm();

  const goBack = () => {
    router.back();
  };

  const addNewPermitHandler = useMutation({
    mutationFn: async (data) => {
      await setNewPermition(token, data);
    },
    onSuccess: (res) => {
      router.push("/profile/permissions/");
    },
  });

  const onSubmit = (data) => {
    addNewPermitHandler.mutateAsync(data);
  };

  if (addNewPermitHandler.isLoading) return <Loading />;
  return (
    <div className="bg-gray-100 min-h-screen pb-8">
      <div className="shadow-md py-5 px-8 sticky top-0 bg-white">
        <button onClick={goBack} className="flex gap-3">
          <ArrowRightIcon className="h-6 w-6 text-regalBlue" />
          <h1 className="font-semibold">مجوز ها</h1>
        </button>
      </div>
      <div className="bg-white px-4 mt-2 ">
        <div className="w-full flex gap-2 justify-center items-center border-b-[1px] py-4 ">
          <BuildingOfficeIcon className="h-6 w-6 text-regalBlue " />
          <h1 className="text-sm font-bold text-regalBlue">پروانه جدید</h1>
        </div>
        <form
          onSubmit={handleSubmit((data) => addNewPermitHandler.mutate(data))}
          className="py-2  flex flex-col gap-5"
        >
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">شماره پرونده : </label>
            <input
              {...register("file_number", { required: true })}
              className="bg-gray-100 p-3 rounded-lg outline-none text-xs"
              type="text"
            />
          </div>
<<<<<<< HEAD
          <div className='flex flex-col gap-1'>
            <label className='text-xs text-gray-500'>نوع پروانه : </label>
            <div className='bg-gray-100 rounded-lg p-2'>
              <Controller
                name='permit_type'
                control={control}
                defaultValue='' // Provide the initial value
                render={({ field }) => (
                  <DropDown
                    list={DUMMY_TYPES}
                    selectedOption={field.value}
                    onOptionSelect={(selectedValue) =>
                      field.onChange(selectedValue)
                    }
                  />
                )}
              />
=======
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">نوع پروانه : </label>
            <div className="bg-gray-100 rounded-lg p-2">
              <select
                {...register("permit_type", { required: true })}
                className="bg-gray-100 text-gray-400  outline-none text-xs w-full"
              >
                <option disabled selected></option>
                <option value={"1"}>پروانه شماره یک</option>
                <option value={"2"}>پروانه شماره دو</option>
                <option value={"3"}>پروانه شماره سه</option>
              </select>
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">شماره پروانه : </label>
            <input
              {...register("permit_number", { required: true })}
              className="bg-gray-100 p-3 rounded-lg outline-none text-xs"
              type="text"
            />
          </div>

          <div className="flex flex-col gap-1 relative ">
            <label className="text-xs text-gray-500">تاریخ صدور:</label>
            <Controller
              control={control}
              name="jalali_emission_date"
              rules={{ required: true }} //optional
              render={({ field: { onChange, name, value } }) => (
                <>
                  <DatePicker
                    onChange={(date) => {
                      onChange(
                        new Date(date)
                          .toLocaleDateString("fa-IR")
                          .replace("/", "-")
                          .replace("/", "-")
                      );
                    }}
                    calendar={persian}
                    locale={persian_fa}
                    animations={[size()]}
                    style={{
                      border: "0",
                      width: "100%",
                      backgroundColor: "#F3F4F6",
                      padding: "1.2rem",
                      outline: "none",
                      borderRadius: "8px",
                    }}
                  />
                </>
              )}
            />
            <button className="absolute left-2.5 top-8">
              <ChevronDownIcon className="h-4 w-4 text-gray-400" />
            </button>
          </div>
<<<<<<< HEAD
          <div className='flex flex-col gap-1'>
            <label className='text-xs text-gray-500'>کاربری: </label>
            <div className='bg-gray-100 rounded-lg p-2'>
              <Controller
                name='type_of_construction'
                control={control}
                defaultValue='' // Provide the initial value
                render={({ field }) => (
                  <DropDown
                    list={DUMMY_type_of_construction}
                    selectedOption={field.value}
                    onOptionSelect={(selectedValue) =>
                      field.onChange(selectedValue)
                    }
                  />
                )}
              />
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <label className='text-xs text-gray-500'>طبقات : </label>
            <div className='bg-gray-100 rounded-lg p-2'>
              <Controller
                name='number_of_floors'
                control={control}
                defaultValue='' // Provide the initial value
                render={({ field }) => (
                  <DropDown
                    list={[
                      { title: "1", value: "1" },
                      { title: "2", value: "2" },
                      { title: "3", value: "3" },
                    ]}
                    selectedOption={field.value}
                    onOptionSelect={(selectedValue) =>
                      field.onChange(selectedValue)
                    }
                  />
                )}
              />
=======
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">کاربری: </label>
            <div className="bg-gray-100 rounded-lg p-2">
              <select
                {...register("type_of_construction", { required: true })}
                className="bg-gray-100 text-gray-400  outline-none text-xs w-full"
              >
                <option disabled selected></option>
                <option value={"مسکونی"}>مسکونی</option>
                <option value={"Off"}>تجاری</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">طبقات : </label>
            <div className="bg-gray-100 rounded-lg p-2">
              <select
                {...register("number_of_floors", { required: true })}
                className="bg-gray-100 text-gray-400  outline-none text-xs w-full"
              >
                <option disabled selected></option>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
              </select>
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">مساحت : </label>
            <input
              {...register("area", { required: true })}
              className="bg-gray-100 p-3 rounded-lg outline-none text-xs"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">آدرس</label>
            <textarea
              {...register("address", { required: true })}
              className="bg-gray-100 p-3 rounded-lg outline-none text-xs resize-none h-24"
              type="text"
            />
          </div>
<<<<<<< HEAD
          <button className='w-full py-3 bg-teal-400 rounded-lg text-white font-bold text-xs'>
=======
          <button
            disabled={!formState.isValid}
            className="w-full py-2 bg-teal-400 rounded-lg text-white font-bold text-xs disabled:bg-gray-300"
          >
>>>>>>> 2b512b41e7e610cc8e26844f3e9c0aed2a4f2862
            ثبت پروانه
          </button>
        </form>
      </div>
    </div>
  );
};

export default index;

const DUMMY_TYPES = [
  { value: "1", title: "پروانه شماره یک" },
  { value: "2", title: "پروانه شماره دو" },
  { value: "3", title: "پروانه شماره سه" },
];

const DUMMY_type_of_construction = [
  { title: "مسکونی", value: "" },
  { title: "تجاری", value: "Off" },
];
