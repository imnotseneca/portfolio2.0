//In ReactJS with TypeScript, ReactNode is a type that represents a React element, an array of React elements, or a string, number, or boolean. It is defined in the react module and can be used to specify the type of a variable that can hold any of these types.

//ReactNode is useful when you want to specify that a prop or variable can hold any type of content that can be rendered by React, but you don't want to specify a more specific type. For example, you might use ReactNode when you want to allow a prop to hold a string, a number, an element, or an array of elements.

//It is important to note that ReactNode does not include the null or undefined values, so if you want to allow these values, you will need to use the React.ReactNode type instead of just ReactNode.

//https://dev.to/elhamnajeebullah/react-typescript-what-is-reactnode-and-when-to-use-it-3660

//https://www.totaltypescript.com/jsx-element-vs-react-reactnode

type SectionHeadingProps = {
  children: React.ReactNode;
};


export default function SectionHeading({ children }: SectionHeadingProps) {
  return <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>;
}
