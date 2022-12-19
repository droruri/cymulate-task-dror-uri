import {useForm} from "react-hook-form";


export function ContactForm() {
    const {register, handleSubmit, watch, formState: {errors, dirtyFields}} = useForm()
    const onSubmit = data => {
        console.log(data);
    }

    console.log(watch());
    return (
        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
            <span className="contact-form-row">
                <input
                    defaultValue="" {...register("firstName", {required: "Please complete this required field."})}
                    placeholder={"First name*"}/>

                <input defaultValue="" {...register("lastName", {required: "Please complete this required field."})}
                       placeholder={"Last name*"}/>
            </span>
            <span className="contact-form-row">
                <input defaultValue="" {...register("jobTitle", {required: "Please complete this required field."})}
                       placeholder={"Job Title*"}/>
                <input
                    defaultValue="" {...register("companyName", {required: "Please complete this required field."})}
                    placeholder={"Company Name*"}/>
            </span>
            <input defaultValue="" {...register("email", {required: "Please complete this required field."})}
                   placeholder={"Business Email*"}/>
            <input defaultValue="" {...register("country", {required: "Please complete this required field."})}
                   placeholder={"Country*"}/>
            <textarea defaultValue="" {...register("message", {required: "Please complete this required field."})}
                      placeholder={"Leave us a message*"}/>

            <input type="submit" className="contact-us-button contact-us-button-blue" value="GET IN TOUCH"/>
        </form>
    )
}