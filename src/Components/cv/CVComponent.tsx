import React from "react";

function CVComponent(props: { item: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; startDate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; endDate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }; }) {
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
