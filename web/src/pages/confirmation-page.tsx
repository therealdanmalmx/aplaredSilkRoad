import getOnId from "@/api/generic";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { centsToDecimalCurrency } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
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
        <div className="flex flex-1 items-center justify-center">
          <MoonLoader color="#a87932" size={50} />
        </div>
      )}
      {isError && (
        <div className="flex flex-1 items-center justify-center px-4">
          <p className="text-center font-eb-garamond text-4xl leading-tight text-primary sm:text-5xl">
            Could not find your treasures at this time. Try again later...
          </p>
        </div>
      )}
      {order && (
        <section className="mx-auto flex max-w-5xl flex-col gap-8 px-4 py-10 sm:px-6 lg:py-16">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Order confirmed
            </p>
            <h1 className="font-eb-garamond text-4xl leading-tight sm:text-5xl">
              Your delicate selection from{" "}
              <s className="opacity-70">the Great Silk Road</s> Aplared
            </h1>
            <p className="mt-4 text-muted-foreground">
              Your treasures await their journey and will soon reach the far
              lands of
              <b> {order.customer.address.city}</b>.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <Card>
              <CardHeader>
                <CardTitle>Your treasures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {order.items.map((item) => (
                  <div
                    className="flex gap-4 border-b border-border pb-4 last:border-0 last:pb-0"
                    key={item.productId}
                  >
                    <img
                      src={item.imageUrl}
                      alt="Ordered product"
                      className="size-24 shrink-0 rounded-md object-cover sm:size-28"
                    />
                    <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm font-medium">
                        {centsToDecimalCurrency(item.unitPrice * item.quantity)}
                        kr
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="h-fit bg-muted/40">
              <CardHeader>
                <CardTitle>Order details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div className="flex flex-col justify-between gap-4">
                  <div className="pt-2">
                    <div className="mt-1 flex flex-col font-medium">
                      <span className="text-muted-foreground">Customer </span>
                      <span className="text-left font-medium">
                        {order.customer.firstName} {order.customer.lastName}
                      </span>
                      <span className="text-left font-medium">
                        {order.customer.phone}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <span className="text-muted-foreground">Delivering to</span>
                    <div className="mt-1 flex flex-col font-medium">
                      <span>{order.customer.address.street}</span>
                      <span>{order.customer.address.city}</span>
                      <span>{order.customer.address.zipCode}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between border-t border-border pt-4 text-base">
                  <span className="font-medium">Total</span>
                  <span className="font-semibold text-primary">
                    {centsToDecimalCurrency(order.total)} kr
                  </span>
                </div>
                <Link
                  className="inline-block pt-2 font-medium text-primary underline-offset-4 hover:underline"
                  to="/"
                >
                  Continue shopping
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      )}
    </>
  );
}
