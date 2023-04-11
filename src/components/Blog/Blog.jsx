import React from "react";
import CommonBanner from "../CommonBanner/CommonBanner";

const Blog = () => {
  return (
    <div>
      <div>
        <CommonBanner>Blog</CommonBanner>
      </div>
      <div className="container md:w-9/12 w-11/12 mx-auto my-8 md:my-16 space-y-3">
        <h2 className="text-2xl font-semibold">a. When should you use context API?</h2>
        <p className="ml-6 text-[#757575]">
          Context Api is used to share data between components. When we need to
          share same into two different level of components, then context API is
          very useful. Because of props drilling we need to pass data to some
          components where there is no use of the data at all to the component.
          Context API can send data directly to the specific component.
        </p>
        <h2 className="text-2xl font-semibold">b. What is a custom hook? </h2>
        <p className="ml-6 text-[#757575]">
          A custom hook is a reusable function. The function uses one or more
          built-in hooks to create custom hook. Custom hooks can be shared
          across multiple components. After creating custom hook it can be used
          in any components by calling it like useState or useEffect.{" "}
        </p>
        <h2 className="text-2xl font-semibold">c. What is useRef? </h2>
        <p className="ml-6 text-[#757575]">
          useRef is a built-in React hook that accepts one argument as the
          initial value and returns a reference. useRef is a way to store a
          reference to a value.The reference is stored in an object with a
          current property that you can read and modify.
        </p>
        <h2 className="text-2xl font-semibold">d. What is useMemo?</h2>
        <p className="ml-6 text-[#757575]">
          useMemo is a built-in react hook that allows to memorize the result of
          function. It mainly used to optimize the performance of React
          application by caching the result. It's recalculate when any
          dependency changed into the function.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
