import React from "react";

function SubscribeBanner({ variant }) {
  const style = {
    home: "bg-subscribe bg-no-repeat bg-cover bg-center mt-[120px] p-12 md:p-36",
    about: "bg-subscribe bg-no-repeat bg-cover bg-center p-12 md:p-36",
  };
  // customers data
  const customers = [
    {
      count: "100",
      text: "HAPPY CLIENTS",
      color: "text-blue-500",
    },
    {
      count: "500",
      text: "PUBLISHERS",
      color: "text-red-700",
    },
    {
      count: "25,000",
      text: "DAILY CONVERSIONS",
      color: "text-yellow-700",
    },
    {
      count: "150",
      text: "CAMPAIGNS DELIVERED",
      color: "text-green-700",
    },
  ];
  return (
    <div className={`${style[variant]}`}>
      <div className="container gap-12 grid-cols-1 grid lg:grid-cols-2 place-items-center justify-center  ">
        {customers.map((item) => {
          return (
            <div className="flex space-x-4 items-center">
              <h3 className="text-white text-[40px] md:text-[50px] font-semibold">
                {item.count}
                <span className={`${item.color}`}>+</span>
              </h3>
              <div className="max-w-[155px]">
                <p className="text-[15px] md:text-[20px] text-gray-300 font-medium ">
                  {item.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SubscribeBanner;
