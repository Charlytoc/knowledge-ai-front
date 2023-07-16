import { ReactElement } from "react"

export interface FormInputProps {
    variables: Array<FormInput>
    formId: string
    submitFunction: (e:any) => void
}

export interface FormInput {
    inputType: string
    inputName: string
    placeholder: string
    setter?: (e:any) => void
    // TODO: Future
    value?: string
}

export default function InputFormVertical (FormInputProps: FormInputProps) {

    return (
        <form className="component-form-vertical" id={FormInputProps.formId} action="">
                {
                    FormInputProps.variables.map((item, index)=>(
                        <input key={index} placeholder={item.placeholder} name={item.inputName} onChange={item.setter}/>
                    ))
                }
                <button onClick={FormInputProps.submitFunction}>
                    submit
                </button>
        </form>
    )
}