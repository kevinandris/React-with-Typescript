import React  from "react";

interface IProps {
    people: {
      name: string
      age: number
      url: string
      note?: string
    } []
  }
  

const List = (props: IProps) => {
    return (
        <div className="">
            I am a List
        </div>
    )
}

export default List