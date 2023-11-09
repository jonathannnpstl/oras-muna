export default function Details({ id, onClick, openId }: any) {
  return (
    <details
      className="my-2"
      onClick={(e) => onClick(e, id)}
      open={openId === id}
    >
      <summary className="list-none p-3 text-base border-solid leading-none ">
        Details
      </summary>
      <p className="text-gray-500 text-sm p-5">
        Lorem ipsum dolor sit amet, eu alia suscipit mei. Reque iriure delectus
        vix id, ex sed forensibus suscipiantur. In eos exerci mollis apeirian,
        an qui latine alienum. Ad mea libris maluisset, consul assueverit sea
        ex.
      </p>
    </details>
  );
}
