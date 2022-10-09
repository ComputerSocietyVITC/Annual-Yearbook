import * as React from "react";

let Layout = (props) => {
  return (
    <>
      <section className="p-4 grid lg:grid-cols-12 md:grid-cols-6 sm:grid-cols-1">
        <section className="lg:col-start-3 lg:col-span-8 md:col-start-2 md:col-span-4 sm:col-start-1">
          {props.children}
        </section>
      </section>
    </>
  );
};
export default Layout;
