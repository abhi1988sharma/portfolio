import React from "react";

function CVComponent(props: { item: { title: string; startDate: string ; endDate: string ; description: string; }} ) {
  return (
    <div>
      <h3> {props.item.title}</h3>
      <h4>
        {props.item.startDate} - {props.item.endDate}
      </h4>
      <p>{props.item.description}</p>
      <hr />
    </div>
  );
}
export default CVComponent;

