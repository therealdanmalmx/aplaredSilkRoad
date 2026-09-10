import CheckoutCartCard from "@/components/checkout-cart-card";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCartStorage } from "@/hooks/useCartStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import type { Customer } from "../../../shared/schemas/customerSchema";
import { customerSchema } from "../../../shared/schemas/customerSchema";
import type { CreateOrder } from "../../../shared/schemas/orderSchema";

export default function CheckoutPage() {
  const { cart } = useCartStorage();

  const orderForm = useForm<z.infer<typeof customerSchema>>({
    resolver: zodResolver(customerSchema),
    shouldFocusError: false,
    mode: "onSubmit",
  });

  const createOrder = (customer: Customer) => {
    orderForm.reset();
    const newOrder: CreateOrder = {
      customer,
      items: cart.map((ci) => ({ productId: ci.id, quantity: ci.amount })),
    };

    console.log("Successful order", newOrder);
  };
  const onInvalidOrder = (fieldErrors: any) => {
    console.log("errors", fieldErrors);
  };

  const isMobile = useIsMobile();
  const countries = [
    { label: "Sweden", value: "sweden" },
    { label: "Denmark", value: "denmark" },
    { label: "Finland", value: "finland" },
    { label: "Iceland", value: "iceland" },
    { label: "Norway", value: "norway" },
  ];

  return (
    <div
      className={
        isMobile ? "flex flex-col m-4" : "mx-auto flex w-fit gap-8 m-4"
      }
    >
      <form
        id="new-order-form"
        className="flex flex-col gap-4"
        onSubmit={orderForm.handleSubmit(createOrder, onInvalidOrder)}
      >
        <FieldSet>
          <FieldLegend>Contact information</FieldLegend>
          <FieldDescription>
            We'll use this information to contact you about your order.
          </FieldDescription>

          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="firstname">First name</FieldLabel>
                <Input
                  id="firstname"
                  {...orderForm.register("firstName")}
                  autoComplete="on"
                />
                <FieldError errors={[orderForm.formState.errors.firstName]} />
              </Field>
              <Field>
                <FieldLabel htmlFor="lastname">Last name</FieldLabel>
                <Input
                  id="lastname"
                  {...orderForm.register("lastName")}
                  autoComplete="on"
                />
                <FieldError errors={[orderForm.formState.errors.lastName]} />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="phone">Phone number</FieldLabel>
              <Input
                id="phone"
                {...orderForm.register("phone")}
                autoComplete="on"
              />
              <FieldError errors={[orderForm.formState.errors.phone]} />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>Delivery adress</FieldLegend>
          <FieldDescription>
            We need information to deliver your order.
          </FieldDescription>

          <FieldGroup>
            <Controller
              control={orderForm.control}
              name="address.country"
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="country">Country</FieldLabel>{" "}
                  <Select
                    value={field.value}
                    onValueChange={field.onChange}
                    items={countries}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Countries</SelectLabel>
                        {countries.map((country) => (
                          <SelectItem key={country.value} value={country.value}>
                            {country.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input
                id="city"
                {...orderForm.register("address.city")}
                autoComplete="on"
              />
              <FieldError errors={[orderForm.formState.errors.address?.city]} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="street">Street</FieldLabel>
                <Input
                  id="street"
                  {...orderForm.register("address.street")}
                  autoComplete="on"
                />
                <FieldError
                  errors={[orderForm.formState.errors.address?.street]}
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="zipcode">Zip code</FieldLabel>
                <Input
                  id="zipcode"
                  {...orderForm.register("address.zipCode")}
                  autoComplete="on"
                />
                <FieldError
                  errors={[orderForm.formState.errors.address?.zipCode]}
                />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
        <Button type="submit" form="new-order-form">
          Submit order
        </Button>
      </form>
      <div className={isMobile ? "-order-1" : ""}>
        <CheckoutCartCard />
      </div>
    </div>
  );
}
