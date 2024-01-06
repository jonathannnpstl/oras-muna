export default function Details({ id, onClick, openId, name, text }: any) {
  return (
    <details
      className="my-2"
      onClick={(e) => onClick(e, id)}
      open={openId === id}
    >
      <summary className="list-none p-3 text-base border-solid leading-none ">
        {name}
      </summary>
      <p className="text-gray-500 text-sm p-5">{text}</p>
    </details>
  );
}
