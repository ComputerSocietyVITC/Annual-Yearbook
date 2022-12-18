import * as React from "react";

const NotFoundPage = ({ params }: any) => {
  if (params?.age > 9999) return <h1>Woah, Alien, who are you!👽</h1>;
  else {
    return <h1 className="font-bold text-3xl text-red-600">{params?.year}</h1>;
  }
};

export default NotFoundPage;

export const Head = () => <title>404 Page not found!</title>;
