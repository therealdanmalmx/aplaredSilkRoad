import getOnId from "@/api/generic";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { MoonLoader } from "react-spinners";
import type { Order } from "../../../shared/schemas/orderSchema";

export default function ConfirmationPage() {
  const { id } = useParams();
  const ENDPOINT = "order";

  const {
    data: order,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["order"],
    queryFn: () => getOnId<Order>(String(id), ENDPOINT),
  });

  return (
    <>
      {isLoading && (
        <MoonLoader className="mx-auto mt-24" color="#a87932" size={50} />
      )}
      {isError && <p>Could not find your treasures.</p>}
      {order && (
        <section>
          <div>
            <h1>
              Your delicate selection from{" "}
              <s className="opacity-70">the Great Silk Road</s> Aplared
            </h1>
            <p>
              Your treasures await their journey and will soon reach the far
              lands of {order.customer.address.city}
            </p>
          </div>
          {order.items.map((i) => (
            <div></div>
          ))}
        </section>
      )}
    </>
  );
}
