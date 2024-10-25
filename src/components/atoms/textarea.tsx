export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {};

const Textarea: React.FC<TextAreaProps> = (props) => {
    return(
        <textarea {...props}></textarea>
    )
}

export default Textarea;
