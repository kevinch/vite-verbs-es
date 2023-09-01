import { nanoid } from "nanoid";

function VerbTense({ data, title, isImperative }) {
  return (
    <div style={{ padding: "0 20px" }}>
      <div style={{ marginBottom: "20px" }}>{title}</div>

      <div style={{ fontWeight: "bold" }}>
        {isImperative ? (
          <>
            <div>{data[1]}</div>
            <div>{data[2]}</div>
            <div>{data[3]}</div>
            <div>{data[4]}</div>
            <div>{data[5]}</div>
          </>
        ) : (
          data.map((el, i) => (
            <div key={nanoid()}>
              <span>{el[0]}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default VerbTense;
