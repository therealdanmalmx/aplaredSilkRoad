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
import { useCartStorage } from "@/hooks/useCartStorage";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import z from "zod";
import {
  customerSchema,
  type Customer,
} from "../../../shared/schemas/customerSchema";
import {
  createOrderSchema,
  type CreateOrder,
} from "../../../shared/schemas/orderSchema";

interface Props {}

export default function CheckoutForm(props: Props) {
  const { cart } = useCartStorage();

  const orderForm = useForm<z.infer<typeof customerSchema>>({
    resolver: zodResolver(customerSchema),
    shouldFocusError: false,
    mode: "onSubmit",
  });

  const createOrder = async (customer: Customer) => {
    const newOrder: CreateOrder = {
      customer,
      items: cart.map((ci) => ({ productId: ci.id, quantity: ci.amount })),
    };
    const validation = createOrderSchema.safeParse(newOrder);
    if (!validation.success) {
      console.log("failed validation", validation.error);
      return;
    }
    // simulate fetch
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Successful order", validation.data);
    orderForm.reset();
  };

  const countries = [
    { label: "Sweden", value: "sweden" },
    { label: "Denmark", value: "denmark" },
    { label: "Finland", value: "finland" },
    { label: "Iceland", value: "iceland" },
    { label: "Norway", value: "norway" },
  ];

  return (
    <>
      <form
        id="new-order-form"
        className="flex flex-col gap-4"
        onSubmit={orderForm.handleSubmit(createOrder)}
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
                  type="text"
                  autoComplete="given-name"
                />
                <FieldError errors={[orderForm.formState.errors.firstName]} />
              </Field>
              <Field>
                <FieldLabel htmlFor="lastname">Last name</FieldLabel>
                <Input
                  id="lastname"
                  {...orderForm.register("lastName")}
                  type="text"
                  autoComplete="family-name"
                />
                <FieldError errors={[orderForm.formState.errors.lastName]} />
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="phone">Phone number</FieldLabel>
              <Input
                id="phone"
                {...orderForm.register("phone")}
                type="tel"
                autoComplete="tel"
              />
              <FieldError errors={[orderForm.formState.errors.phone]} />
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSeparator />
        <FieldSet>
          <FieldLegend>Delivery address</FieldLegend>
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
                type="text"
                autoComplete="address-level2"
              />
              <FieldError errors={[orderForm.formState.errors.address?.city]} />
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="street">Street</FieldLabel>
                <Input
                  id="street"
                  {...orderForm.register("address.street")}
                  type="text"
                  autoComplete="street-address"
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
                  type="text"
                  autoComplete="postal-code"
                />
                <FieldError
                  errors={[orderForm.formState.errors.address?.zipCode]}
                />
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
        <Button type="submit" disabled={orderForm.formState.isSubmitting}>
          {orderForm.formState.isSubmitting ? "Submitting..." : "Submit order"}
        </Button>
      </form>
    </>
  );
}
