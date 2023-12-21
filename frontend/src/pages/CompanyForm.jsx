import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CompanyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    console.log(data);

    reset();
  };

  return (
    <div className="min-h-[80vh] flex flex-col gap-12 justify-center items-center w-full py-10">
      <h1 className="text-gray-950  text-center font-semibold md:text-3xl text-xl">
        Add new Startup
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2  w-[70vw]  mx-auto rounded-xl "
      >
        <label
          className="text-gray-950  font-medium space-x-1"
          htmlFor="startupName"
        >
          Startup Name
        </label>
        <input
          className="p-3  outline-none border-2 dark:border-none text-black rounded-md bg-gray-200  border-gray-900"
          placeholder="Infolabs"
          {...register("StartupName", {
            required: "Start up name is required",
          })}
        />
        {errors.StartupName && (
          <p className=" text-red-500">{`${errors.StartupName.message}`}</p>
        )}
        {/* Industry Vertical */}
        <div className="flex  md:flex-row flex-col md:gap-10 md:w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-950 mt-2 font-medium space-x-1">
              Industry Vertical
            </label>
            <input
              className="p-3  outline-none border-2 dark:border-none text-black rounded-md  bg-gray-200  border-gray-900"
              placeholder="%jd%392"
              {...register("IndustryVertical", {
                required: "Industry Vertical is required",
              })}
            />
            {errors.IndustryVertical && (
              <p className="text-red-500">{`${errors.IndustryVertical.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-950 mt-2 font-medium space-x-1">
              Sub Vertical
            </label>
            <input
              className="p-3  outline-none border-2 dark:border-none text-black rounded-md  bg-gray-200  border-gray-900"
              placeholder="%jd%392"
              {...register("SubVertical", {
                required: "Sub Vertical is required",
              })}
            />
            {errors.SubVertical && (
              <p className="text-red-500">{`${errors.SubVertical.message}`}</p>
            )}
          </div>
        </div>

        <div className="flex  md:flex-row flex-col md:gap-10 md:w-full">
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-950 mt-2 font-medium space-x-1">
              Location
            </label>
            <input
              className="p-3  outline-none border-2 dark:border-none text-black rounded-md  bg-gray-200  border-gray-900"
              placeholder="Write amount in Usd"
              {...register("CityLocation", {
                required: "Location required",
                maxLength: 10,
              })}
            />
            {errors.CityLocation && (
              <p className="text-red-500">{`${errors.CityLocation.message}`}</p>
            )}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-gray-950 mt-2 font-medium space-x-1">
              Date
            </label>
            <input
              type="date"
              className="p-3  outline-none border-2 dark:border-none text-black rounded-md  bg-gray-200  border-gray-900"
              placeholder="Write amount in Usd"
              {...register("Date", {
                required: "Date required",
              })}
            />
            {errors.Date && (
              <p className="text-red-500">{`${errors.Date.message}`}</p>
            )}
          </div>
        </div>

        {/* Investor name */}
        <label className="text-gray-950 mt-2 font-medium space-x-1">
          Investors Name ( Use , for multiple investor)
        </label>
        <input
          className="p-3  outline-none border-2 dark:border-none text-black rounded-md  bg-gray-200  border-gray-900"
          placeholder="Write investor name"
          {...register("InvestorsName", {
            required: "Investor Name is required",
          })}
        />
        {errors.InvestorsName && (
          <p className="text-red-500">{`${errors.InvestorsName.message}`}</p>
        )}

        {/* Investment type */}
        <label className="text-gray-950 mt-2 font-medium space-x-1">
          Investment Type
        </label>
        <input
          className="p-3  outline-none border-2 dark:border-none text-black rounded-md  bg-gray-200  border-gray-900"
          placeholder="Write investor name"
          {...register("InvestmentType", {
            required: "Investment Type is required",
          })}
        />
        {errors.InvestmentType && (
          <p className="text-red-500">{`${errors.InvestmentType.message}`}</p>
        )}

        {/* Investment amount */}
        <label className="text-gray-950 mt-2 font-medium space-x-1">
          Amount In USD
        </label>
        <input
          className="p-3  outline-none border-2 dark:border-none text-black rounded-md  bg-gray-200  border-gray-900"
          placeholder="Write amount in Usd"
          {...register("AmountInUSD", {
            required: "Amount In USD is required",
          })}
        />
        {errors.AmountInUSD && (
          <p className="text-red-500">{`${errors.AmountInUSD.message}`}</p>
        )}
        {/* Location */}

        <button
          className="bg-blue-700 disabled:bg-gray-600 p-2 rounded-md text-white mt-2 font-medium"
          type="submit"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CompanyForm;
