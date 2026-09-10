import CheckoutCartCard from "@/components/checkout-cart-card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
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

export default function CheckoutPage() {
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
      <form className="flex flex-col gap-4">
        <FieldSet>
          <FieldLegend>Contact information</FieldLegend>
          <FieldDescription>
            We'll use this information to contact you about your order.
          </FieldDescription>

          <FieldGroup>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="firstname">First name</FieldLabel>
                <Input id="firstname" autoComplete="on" />
                <FieldError></FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="lastname">Last name</FieldLabel>
                <Input id="lastname" autoComplete="on" />
                <FieldError></FieldError>
              </Field>
            </div>
            <Field>
              <FieldLabel htmlFor="phone">Phone number</FieldLabel>
              <Input id="phone" autoComplete="on" />
              <FieldError></FieldError>
            </Field>
          </FieldGroup>
        </FieldSet>
        <FieldSet>
          <FieldLegend>Delivery adress</FieldLegend>
          <FieldDescription>
            We need information to deliver your order.
          </FieldDescription>

          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="country">Country</FieldLabel>{" "}
              <Select items={countries}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Countries</SelectLabel>
                    {countries.map((item) => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </Field>
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input id="city" autoComplete="on" />
              <FieldError></FieldError>
            </Field>
            <div className="grid grid-cols-2 gap-4">
              <Field>
                <FieldLabel htmlFor="street">Street</FieldLabel>
                <Input id="street" autoComplete="on" />
                <FieldError></FieldError>
              </Field>
              <Field>
                <FieldLabel htmlFor="zipcode">Zip code</FieldLabel>
                <Input id="zipcode" autoComplete="on" />
                <FieldError></FieldError>
              </Field>
            </div>
          </FieldGroup>
        </FieldSet>
      </form>
      <div className={isMobile ? "-order-1" : ""}>
        <CheckoutCartCard />
      </div>
    </div>
  );
}
