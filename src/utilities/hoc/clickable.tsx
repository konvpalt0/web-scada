import React from "react";

type Props = {
    //TODO fix any
    clickHandler: (...arg: any) => void,
};
type MakeClickableType<T> = (Component: React.FC<T>) => React.FC<T & Props>;

const MakeClickable:
    React.FC<{}> = ({children}) => {
    return (
        <div onClick={() => console.log("1")}>
            {children}
        </div>
    )
}

export default MakeClickable;