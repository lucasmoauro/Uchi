export const StepperOrder = () => {
  return (
    <>
      <ul className="flex justify-between items-center w-[95%] py-1">
        <li
          className="flex w-full items-center after:content-[''] 
          after:h-1 after:bg-secondary after:flex-1"
        >
          <div
            className="bg-secondary
            rounded-full h-10 w-10 flex
             items-center justify-center"
          >
            <div
              className="h-8 w-8 rounded-full flex
             items-center justify-center bg-primary text-accent font-semibold text-xl pb-0.5"
            >
              1
            </div>
          </div>
        </li>
        <li
          className="flex w-full items-center after:content-[''] 
          after:h-1 after:bg-secondary-accent after:flex-1"
        >
          <div
            className="bg-secondary-accent rounded-full h-10 w-10 flex
             items-center justify-center"
          >
            <div
              className="h-8 w-8 rounded-full flex
             items-center justify-center bg-primary text-accent font-semibold text-xl pb-0.5"
            >
              2
            </div>
          </div>
        </li>
        <li
          className="flex items-center after:content-[''] 
          after:h-1"
        >
          <div
            className="bg-secondary-accent
            rounded-full h-10 w-10 flex
             items-center justify-center"
          >
            <div
              className="h-8 w-8 rounded-full flex
             items-center justify-center bg-primary text-accent font-semibold text-xl pb-0.5"
            >
              3
            </div>
          </div>
        </li>
      </ul>
    </>
  );
};
