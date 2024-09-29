import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";
import { buttonVariants } from "./ui/button";

const contactFormSchema = z.object({
  firstName: z.string({ required_error: 'First Name is required', invalid_type_error: 'Please enter a valid name' }).min(3, { message: 'Minimum of 3 characters' }).max(50, { message: 'Exceeded maximum number of characters (50)' }),
  lastName: z.string({ required_error: 'Last Name is required', invalid_type_error: 'Please enter a valid name' }).min(3, { message: 'Minimum of 3 characters' }).max(50, { message: 'Exceeded maximum number of characters (50)' }),
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Invalid email address' }),
  queryType: z.enum(['General Enquiry', 'Support Request'], { required_error: 'Please select a query type' }),
  message: z.string().min(1, { message: 'Please enter your message' }).max(255, { message: 'Exceeded maximum number of characters (255)' }),
  isConsented: z.boolean().refine((val) => val === true, "You must consent to continue"),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      isConsented: false,
    }
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    toast({
      title: 'Form has been submitted successfully!',
      description: (
        <pre className="w-[340px] rounded-md bg-slate-950 dark:bg-black p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
      duration: 5000,
      action: (
        <ToastAction altText="Dismiss" className={`${buttonVariants({ variant: 'default' })}`}>Dismiss</ToastAction>
      ),
      className: 'flex flex-col space-y-2 items-end py-3'
    });
    console.log(values);
    form.reset();
  };

  return (
    <div>
      <Card className="pb-4">
        <CardHeader className="py-4">
          <CardTitle className="text-[1.4rem]">Contact Us</CardTitle>
          <CardDescription>Please fill this form below:</CardDescription>
        </CardHeader>
        <CardContent className="py-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="sm:flex sm:items-center sm:justify-between sm:space-x-4 space-y-4 sm:space-y-0">
                <FormField 
                  control={form.control}
                  name="firstName"
                  render={({ field, fieldState }) => (
                    <FormItem className="w-full">
                      <FormLabel>First Name <span>*</span></FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your first name" {...field} />
                      </FormControl>
                      {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field, fieldState }) => (
                    <FormItem className="w-full">
                      <FormLabel>Last Name <span>*</span></FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="Enter your last name" {...field} />
                      </FormControl>
                      {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                    </FormItem>
                  )} 
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem className="w-full">
                    <FormLabel>Email <span>*</span></FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Enter your email" {...field} />
                    </FormControl>
                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                  </FormItem>
                )} 
              />
              <div>
                <FormField
                  control={form.control}
                  name="queryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Query Type <span>*</span></FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-4 space-y-1"
                        >
                          <FormItem className="flex items-center space-x-3 space-y-0 custom-box">
                            <FormControl>
                              <RadioGroupItem value="General Enquiry" />
                            </FormControl>
                            <FormLabel className="font-normal">General Enquiry</FormLabel>
                          </FormItem>
                          <FormItem className="flex items-center space-x-3 space-y-0 custom-box">
                            <FormControl>
                              <RadioGroupItem value="Support Request" />
                            </FormControl>
                            <FormLabel className="font-normal">Support Request</FormLabel>
                          </FormItem>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <FormField 
                control={form.control}
                name="message"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Message <span>*</span></FormLabel>
                    <FormControl>
                      <Textarea className="min-h-[200px]" placeholder="Enter your message here" {...field} maxLength={255} />
                    </FormControl>
                    {fieldState.error && <FormMessage>{fieldState.error.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <FormField 
                control={form.control}
                name="isConsented"
                render={({ field, fieldState }) => (
                  <FormItem className="flex-col items-center space-y-0">
                    <div className="flex items-center space-x-4">
                      <FormControl>
                        <Checkbox 
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <FormLabel className="font-normal">I consent to being contacted by the team <span>*</span></FormLabel>
                    </div>
                    {fieldState.error && <FormMessage className="py-2">{fieldState.error.message}</FormMessage>}
                  </FormItem>
                )}
              />
              <Button variant='default' type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}