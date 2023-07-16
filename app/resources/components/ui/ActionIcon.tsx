import { ReactElement } from "react";

interface ActionProps {
    svgIcon: ReactElement
    onClick: () => void
    styleClass?: string
}

export default function ActionIcon (props : ActionProps) {
    return <div onClick={props.onClick} className={`component-svg-container ${props.styleClass}`}>
                    {props.svgIcon}
            </div>
}